import {
 ChangeEvent, KeyboardEvent, useEffect, useState,
} from 'react'

import clsx from 'clsx'
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'

import { Paths } from '../constants'
import { useAppSelector } from '../store/hook/index'
import {
  LeftWrap,
  PageButton,
  PageIcon,
  PageInput,
  PageWrapper,
  RightWrap,
} from '../styles/components/Pagination'
import { isPositiveInteger, searchQuery } from '../utils/helper'

interface Props {
  length: number
}
const Pagination = ({ length }: Props) => {
  const LIMIT = parseInt(import.meta.env.VITE_PET_LIMIT, 10)
  const iconPaths: string[] = [
    'angles-left',
    'angle-left',
    'angle-right',
    'angles-right',
  ]
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { filter } = useAppSelector((state) => state.pet)
  const [pageValue, setPageValue] = useState(filter.page.toString())
  const page = searchParams.get('page')
  const disablePage = (max: number) => filter.page <= max
  const handlePageOnClick = (offset: number) => {
    const params = searchQuery(filter)
    params.page = (filter.page + offset).toString()
    navigate({
      pathname: Paths.home,
      search: createSearchParams(params).toString(),
    })
    window.scroll({ top: 0, behavior: 'smooth' })
  }
  const changePageInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (isPositiveInteger(value) || value === '') setPageValue(value)
  }
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const params = searchQuery(filter)
      params.page = pageValue === '' ? 1 : pageValue
      navigate({
        pathname: Paths.home,
        search: createSearchParams(params).toString(),
      })
    }
  }
  useEffect(() => {
    if (page) setPageValue(page)
    else if (page === null) setPageValue('1')
  }, [page])

  return (
    <PageWrapper>
      <LeftWrap>
        <PageButton
          className={clsx({ disabled: disablePage(10) })}
          onClick={() => handlePageOnClick(-10)}
          aria-label={iconPaths[0]}
        >
          <PageIcon
            $content={`/images/${iconPaths[0]}.svg`}
            alt={iconPaths[0]}
          />
        </PageButton>
        <PageButton
          className={clsx({ disabled: disablePage(1) })}
          onClick={() => handlePageOnClick(-1)}
          aria-label={iconPaths[1]}
        >
          <PageIcon
            $content={`/images/${iconPaths[1]}.svg`}
            alt={iconPaths[1]}
          />
        </PageButton>
      </LeftWrap>
      <PageInput
        aria-label='page'
        type='number'
        value={pageValue}
        onKeyDown={(e) => onKeyDown(e)}
        onChange={(e) => changePageInput(e)}
      />
      <RightWrap>
        <PageButton
          className={clsx({ disabled: length < LIMIT })}
          onClick={() => handlePageOnClick(1)}
          aria-label={iconPaths[2]}
        >
          <PageIcon
            $content={`/images/${iconPaths[2]}.svg`}
            alt={iconPaths[2]}
          />
        </PageButton>
        <PageButton
          className={clsx({ disabled: length < LIMIT })}
          onClick={() => handlePageOnClick(10)}
          aria-label={iconPaths[3]}
        >
          <PageIcon
            $content={`/images/${iconPaths[3]}.svg`}
            alt={iconPaths[3]}
          />
        </PageButton>
      </RightWrap>
    </PageWrapper>
  )
}

export default Pagination
