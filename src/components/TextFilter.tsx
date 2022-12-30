import { ChangeEvent, KeyboardEvent, useState } from 'react'

import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'

import { Paths } from '../constants'
import { useAppSelector } from '../store/hook/index'
import {
  LabelName,
  OptionsFilterWrap,
  TextSearch,
  TextSearchOuter,
} from '../styles/components/Filter'
import { isPositiveInteger } from '../utils/helper'

interface Props {
  fieldName: keyof Pick<GetPetReq, 'id'>
  label: string
  placeholder?: string
}
const TextFilter = ({ fieldName, label, placeholder }: Props) => {
  const nav = useNavigate()
  const [searchParams] = useSearchParams()
  const urlParam = searchParams.get(fieldName)
  const [searchValue, setSearchValue] = useState<string | undefined>(
    urlParam !== null ? urlParam : undefined,
  )
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (isPositiveInteger(value) || value === '') setSearchValue(value)
  }
  const onkeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && searchValue) {
      nav({
        pathname: Paths.home,
        search: createSearchParams({ id: searchValue.toString() }).toString(),
      })
    }
  }

  return (
    <OptionsFilterWrap>
      <LabelName>{label}</LabelName>
      <TextSearchOuter>
        <TextSearch
          type='number'
          value={searchValue}
          onChange={(e) => changeInput(e)}
          onKeyDown={(e) => onkeyDown(e)}
          placeholder={placeholder}
        />
      </TextSearchOuter>
    </OptionsFilterWrap>
  )
}

export default TextFilter
