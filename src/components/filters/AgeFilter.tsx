import { useState } from 'react'

import { createSearchParams, useNavigate } from 'react-router-dom'

import { Paths } from '../../constants'
import { PetAgeEnum } from '../../constants/enum'
import { useAppSelector } from '../../store/hook'
import {
  LabelName,
  OptionBtn,
  OptionBtnOuter,
  OptionGroup,
  OptionsFilterWrap,
} from '../../styles/components/LeftFilter'

interface Props {
  label: string
  options: string[]
}
const AgeFilter = ({ label, options }: Props) => {
  const { filter } = useAppSelector((state) => state.pet)
  const [active, setActive] = useState<PetAgeUrlType>(filter.age)
  const navigate = useNavigate()
  const onClick = (i: number) => {
    setActive(Object.keys(PetAgeEnum)[i] as PetAgeUrlType)
    navigate({
      pathname: Paths.home,
      search: createSearchParams({
        kind: filter.kind,
        age: Object.keys(PetAgeEnum)[i],
        page: '1',
      }).toString(),
    })
  }
  return (
    <OptionsFilterWrap>
      <LabelName>{label}</LabelName>
      <OptionGroup>
        {options.map((ele, i) => (
          <OptionBtnOuter
            $active={active === Object.keys(PetAgeEnum)[i]}
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
