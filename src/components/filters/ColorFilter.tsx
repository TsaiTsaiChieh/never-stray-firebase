import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { SingleValue } from 'react-select'

import { Paths } from '../../constants'
import { useAppSelector } from '../../store/hook'
import {
  LabelName,
  OptionsFilterWrap,
  Selector,
} from '../../styles/components/LeftFilter'

interface Props {
  label: string
  options: LabelValueType[]
}
const ColorFilter = ({ label, options }: Props) => {
  const nav = useNavigate()
  const { filter } = useAppSelector((state) => state.pet)
  const [searchParams] = useSearchParams()

  const onChange = (newValue: SingleValue<LabelValueType>) => {
    nav({
      pathname: Paths.home,
      search: createSearchParams({
        kind: filter.kind,
        sex: filter.sex,
        page: '1',
        color: newValue!.value,
      }).toString(),
    })
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
        onChange={(e) => onChange(e)}
      />
    </OptionsFilterWrap>
  )
}

export default ColorFilter
