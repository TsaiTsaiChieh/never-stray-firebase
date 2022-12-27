import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { SingleValue } from 'react-select'

import { Paths } from '../constants'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { setFilter } from '../store/reducers/petSlice'
import {
  LabelName,
  OptionsFilterWrap,
  Selector,
} from '../styles/pages/LeftFilter'
import { searchQuery } from '../utils/helper'

interface Props {
  label: string
  options: LabelValueType[]
  placeholder?: string
}
const CityFilter = ({ label, options, placeholder }: Props) => {
  const dispatch = useAppDispatch()
  const nav = useNavigate()
  const { filter } = useAppSelector((state) => state.pet)
  const [searchParams, setSearchParams] = useSearchParams()
  const onChange = (newValue: SingleValue<LabelValueType>) => {
    if (newValue !== null) {
      const params: any = searchQuery(filter)
      params.city = newValue.value
      nav({
        pathname: Paths.home,
        search: `?${createSearchParams(params)}`,
      })
    } else {
      searchParams.delete('city')
      setSearchParams(searchParams)
      dispatch(setFilter({ ...filter, city: undefined }))
    }
  }
  const cityUrl = searchParams.get('city')
  let cityIdx = -1
  if (cityUrl !== null) { cityIdx = options.map((ele) => ele.value).indexOf(cityUrl) }

  const defaultValue: LabelValueType | undefined = cityIdx > -1 && cityUrl !== null
      ? {
          label: cityUrl,
          value: options[cityIdx].value,
        }
      : undefined

  return (
    <OptionsFilterWrap>
      <LabelName>{label}</LabelName>
      <Selector
        defaultValue={defaultValue}
        options={options}
        isSearchable={false}
        onChange={onChange}
        placeholder={placeholder}
        isClearable
      />
    </OptionsFilterWrap>
  )
}

export default CityFilter
