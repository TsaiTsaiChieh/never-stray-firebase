import {
 ChangeEvent, KeyboardEvent, useEffect, useState,
} from 'react'

import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'

import { Paths } from '../constants'
import { useAppDispatch } from '../store/hook'
import { setIsLike } from '../store/reducers/authSlice'
import { resetFilter } from '../store/reducers/petSlice'
import {
  ClearIcon,
  TextFilterWrap,
  TextLabelName,
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
      dispatch(setIsLike(false))
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
  useEffect(
    () => (urlParam === null ? setText('') : setText(urlParam)),
    [urlParam],
  )

  return (
    <TextFilterWrap>
      <TextLabelName>{label}</TextLabelName>
      <TextSearchOuter>
        <TextSearch
          type='number'
          value={text}
          onChange={changeInput}
          onKeyDown={onkeyDown}
          placeholder={placeholder}
        />
        {!text ? null : <ClearIcon onClick={clearText} alt='clear' />}
      </TextSearchOuter>
    </TextFilterWrap>
  )
}

export default TextFilter
