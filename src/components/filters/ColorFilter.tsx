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
} from '../../styles/components/LeftFilter'

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
      nav({
        pathname: Paths.home,
        search: createSearchParams({
          kind: filter.kind,
          sex: filter.sex,
          page: '1',
          color: newValue.value,
        }).toString(),
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
        onChange={(e) => onChange(e)}
        isClearable
      />
    </OptionsFilterWrap>
  )
}

export default ColorFilter
