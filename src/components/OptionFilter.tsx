import { useState } from 'react'

import { useSearchParams } from 'react-router-dom'

import { PetAgeEnum, PetSexEnum } from '../constants/enum'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { setFilter } from '../store/reducers/petSlice'
import {
  LabelName,
  OptionBtn,
  OptionBtnOuter,
  OptionGroup,
  OptionsFilterWrap,
} from '../styles/pages/LeftFilter'
import { searchQuery } from '../utils/helper'

interface Props {
  fieldName: keyof Pick<GetPetReq, 'sex' | 'age'>
  label: string
  options: string[]
}
const OptionFilter = ({ fieldName, label, options }: Props) => {
  const dispatch = useAppDispatch()
  const optionEnum = fieldName === 'age' ? PetAgeEnum : PetSexEnum
  const { filter } = useAppSelector((state) => state.pet)
  const [searchParams] = useSearchParams()
  let fieldIdx = 0
  const urlParam = searchParams.get(fieldName)
  if (urlParam !== null) {
    fieldIdx = Object.keys(optionEnum).indexOf(urlParam) + 1
  }
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
  }
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
