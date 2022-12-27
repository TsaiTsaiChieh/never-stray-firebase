import { useState } from 'react'

import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'

import { Paths } from '../../constants'
import { PetAgeEnum } from '../../constants/enum'
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
const AgeFilter = ({ label, options }: Props) => {
  const dispatch = useAppDispatch()
  const { filter } = useAppSelector((state) => state.pet)
  const [searchParams] = useSearchParams()
  const ageUrl = searchParams.get('age')
  let ageIdx = 0
  if (ageUrl !== null) ageIdx = Object.keys(PetAgeEnum).indexOf(ageUrl) + 1
  const [active, setActive] = useState<number>(ageIdx)
  const navigate = useNavigate()
  const onClick = (i: number) => {
    setActive(i)
    const params = searchQuery(filter)
    if (i !== 0) params.age = Object.keys(PetAgeEnum)[i - 1]
    else {
      delete params.age
      dispatch(setFilter({ ...filter, age: undefined }))
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
            $active={active === i}
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

export default AgeFilter
