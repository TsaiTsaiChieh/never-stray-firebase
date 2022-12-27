import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { SingleValue } from 'react-select'

import { Paths } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setFilter } from '../../store/reducers/petSlice'
import {
  LabelName,
  OptionsFilterWrap,
  Selector,
} from '../../styles/pages/LeftFilter'
import { searchQuery } from '../../utils/helper'

interface Props {
  label: string
  options: LabelValueType[]
  placeholder?: string
}
const ColorFilter = ({ label, options, placeholder }: Props) => {
  const dispatch = useAppDispatch()
  const nav = useNavigate()
  const { filter } = useAppSelector((state) => state.pet)
  const [searchParams, setSearchParams] = useSearchParams()

  const onChange = (newValue: SingleValue<LabelValueType>) => {
    if (newValue !== null) {
      const params = searchQuery(filter)
      params.color = newValue.value
      nav({
        pathname: Paths.home,
        search: createSearchParams(params).toString(),
      })
    } else {
      searchParams.delete('color')
      setSearchParams(searchParams)
      dispatch(setFilter({ ...filter, color: undefined }))
    }
  }
  const colorUrl = searchParams.get('color')
  const defaultValue: LabelValueType | undefined = colorUrl !== null
  && options.map((ele) => ele.value).includes(colorUrl)
      ? { label: colorUrl, value: colorUrl }
      : undefined

  return (
    <OptionsFilterWrap>
      <LabelName>{label}</LabelName>
      <Selector
        defaultValue={defaultValue}
        options={options}
        isSearchable={false}
        placeholder={placeholder}
        onChange={onChange}
        isClearable
      />
    </OptionsFilterWrap>
  )
}

export default ColorFilter
