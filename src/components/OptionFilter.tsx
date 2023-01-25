import { useEffect, useState } from 'react'

import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'

import { Paths } from '../constants'
import { PetAgeEnum, PetSexEnum } from '../constants/enum'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { setIsLike } from '../store/reducers/authSlice'
import { setFilter } from '../store/reducers/petSlice'
import {
  LabelName,
  OptionBtn,
  OptionBtnOuter,
  OptionGroup,
  OptionsFilterWrap,
} from '../styles/components/Filter'
import { searchQuery } from '../utils/helper'

interface Props {
  fieldName: keyof Pick<GetPetReq, 'sex' | 'age'>
  label: string
  options: string[]
}
const OptionFilter = ({ fieldName, label, options }: Props) => {
  const nav = useNavigate()
  const dispatch = useAppDispatch()
  const optionEnum = fieldName === 'age' ? PetAgeEnum : PetSexEnum
  const { filter } = useAppSelector((state) => state.pet)
  const [searchParams] = useSearchParams()
  const urlParam = searchParams.get(fieldName)
  const fieldIdx = urlParam !== null
      ? Object.keys(optionEnum).indexOf(urlParam.toLocaleUpperCase()) + 1
      : 0
  const [activeId, setActiveId] = useState<number>(fieldIdx)
  const onClick = (i: number) => {
    setActiveId(i)
    const params = searchQuery(filter)
    if (i !== 0) params[fieldName] = Object.keys(optionEnum)[i - 1]
    else {
      delete params[fieldName]
      dispatch(
        setFilter({
          ...filter,
          [fieldName]: undefined,
        }),
      )
    }
    nav({
      pathname: Paths.home,
      search: createSearchParams(params).toString(),
    })
    dispatch(setIsLike(false))
  }
  // reset state
  useEffect(() => {
    if (urlParam === null) setActiveId(0)
  }, [urlParam])

  return (
    <OptionsFilterWrap>
      <LabelName>{label}</LabelName>
      <OptionGroup>
        {options.map((option, i) => (
          <OptionBtnOuter
            key={option}
            $active={i === activeId}
            onClick={() => onClick(i)}
          >
            <OptionBtn>{option}</OptionBtn>
          </OptionBtnOuter>
        ))}
      </OptionGroup>
    </OptionsFilterWrap>
  )
}

export default OptionFilter
