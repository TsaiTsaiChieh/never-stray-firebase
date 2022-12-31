import { ChangeEvent, KeyboardEvent, useState } from 'react'

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'

import { Paths } from '../constants'
import { useAppDispatch } from '../store/hook'
import { resetFilter } from '../store/reducers/petSlice'
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
  maxLength?: number
}
const TextFilter = ({
  fieldName,
  label,
  placeholder,
  maxLength = 8,
}: Props) => {
  const dispatch = useAppDispatch()
  const nav = useNavigate()
  const [searchParams] = useSearchParams()
  const urlParam = searchParams.get(fieldName)
  const [text, setText] = useState<string>(urlParam !== null ? urlParam : '')
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (isPositiveInteger(value) || value === '') {
      setText(value.slice(0, maxLength))
    }
  }
  const onkeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (text) {
        nav({
          pathname: Paths.home,
          search: createSearchParams({
            [fieldName]: text.toString(),
          }).toString(),
        })
      } else if (text === '') {
        dispatch(resetFilter())
        nav({
          pathname: Paths.home,
        })
      }
    }
  }
  const clearText = () => {
    setText('')
    dispatch(resetFilter())
    searchParams.delete(fieldName)
    nav({
      pathname: Paths.home,
      search: createSearchParams(searchParams).toString(),
    })
  }
  return (
    <OptionsFilterWrap>
      <LabelName>{label}</LabelName>
      <TextSearchOuter>
        <TextSearch
          type='number'
          value={text}
          onChange={changeInput}
          onKeyDown={onkeyDown}
          placeholder={placeholder}
        />
        {!text ? null : (
          <FontAwesomeIcon icon={faCircleXmark} onClick={clearText} />
        )}
      </TextSearchOuter>
    </OptionsFilterWrap>
  )
}

export default TextFilter
