import { useState } from 'react'

import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'

import { Paths } from '../../constants'
import { PetAgeEnum, PetSexEnum } from '../../constants/enum'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setFilter } from '../../store/reducers/petSlice'
import {
  LabelName,
  OptionBtn,
  OptionBtnOuter,
  OptionGroup,
  OptionsFilterWrap,
} from '../../styles/components/LeftFilter'
import { searchQuery } from '../../utils/helper'

interface Props {
  label: string
  options: string[]
}
const SexFilter = ({ label, options }: Props) => {
  const dispatch = useAppDispatch()
  const { filter } = useAppSelector((state) => state.pet)
  const [searchParams] = useSearchParams()
  const ageUrl = searchParams.get('sex')
  let ageIdx = 0
  if (ageUrl !== null) ageIdx = Object.keys(PetAgeEnum).indexOf(ageUrl) + 1
  const [active, setActive] = useState<number>(ageIdx)
  const navigate = useNavigate()
  const onClick = (i: number) => {
    setActive(i)
    const params = searchQuery(filter)
    if (i !== 0) params.sex = Object.keys(PetSexEnum)[i - 1]
    else {
      delete params.sex
      dispatch(setFilter({ ...filter, sex: undefined }))
    }
    navigate({
      pathname: Paths.home,
      search: createSearchParams(params).toString(),
    })
  }
  return (
    <OptionsFilterWrap>
      <LabelName>{label}</LabelName>
      <OptionGroup>
        {options.map((ele, i) => (
          <OptionBtnOuter
            $active={i === active}
            key={ele}
            onClick={() => onClick(i)}
          >
            <OptionBtn>{ele}</OptionBtn>
          </OptionBtnOuter>
        ))}
      </OptionGroup>
    </OptionsFilterWrap>
  )
}

export default SexFilter
