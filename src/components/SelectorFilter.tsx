import { useEffect, useState } from 'react'

import i18n from 'i18next'
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import type { SingleValue } from 'react-select'

import { Paths } from '../constants'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { setIsLike } from '../store/reducers/authSlice'
import { setFilter } from '../store/reducers/petSlice'
import {
  LabelName,
  OptionsFilterWrap,
  Selector,
  SelectOuter,
} from '../styles/components/Filter'
import { searchQuery } from '../utils/helper'

interface Props {
  fieldName: keyof Pick<GetPetsReq, 'species' | 'city' | 'color' | 'shelter'>
  options: LabelValueType[]
  label: string
  placeholder?: string
}
const SelectorFilter = ({
 fieldName, options, label, placeholder,
}: Props) => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const nav = useNavigate()
  const { filter } = useAppSelector((state) => state.pet)
  const urlParam = searchParams.get(fieldName)
  const fieldIdx = urlParam === null
      ? 0
      : options.map((ele) => ele.value.toString()).indexOf(urlParam)
  const [value, setValue] = useState<LabelValueType | null>(
    fieldIdx > -1 && urlParam !== null
      ? { value: options[fieldIdx].value, label: options[fieldIdx].label }
      : null,
  )
  const onChange = (newValue: SingleValue<LabelValueType>) => {
    if (newValue !== null) {
      setValue(newValue)
      const params = searchQuery(filter)
      params[fieldName] = newValue.value
      nav({
        pathname: Paths.home,
        search: createSearchParams(params).toString(),
      })
    } else {
      setValue(null)
      searchParams.delete(fieldName)
      setSearchParams(searchParams)
      dispatch(setFilter({ ...filter, [fieldName]: undefined }))
    }
    dispatch(setIsLike(false))
  }
  // reset state
  useEffect(() => {
    if (urlParam === null) setValue(null)
  }, [urlParam])

  return (
    <OptionsFilterWrap>
      <LabelName>{label}</LabelName>
      <SelectOuter>
        <Selector
          aria-label={fieldName}
          classNamePrefix='Select'
          value={value}
          options={options}
          placeholder={placeholder}
          onChange={onChange}
          isSearchable={false}
          isClearable
          components={{ IndicatorSeparator: () => null }}
          noOptionsMessage={() => i18n.t('placeholders.empty_options')}
        />
      </SelectOuter>
    </OptionsFilterWrap>
  )
}

export default SelectorFilter
