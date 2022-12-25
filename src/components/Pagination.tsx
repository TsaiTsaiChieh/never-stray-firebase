import {
 ChangeEvent, KeyboardEvent, useEffect, useState,
} from 'react'

import {
  faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import {
  createSearchParams, useNavigate, useSearchParams,
} from 'react-router-dom'

import { Paths } from '../constants'
import { useAppSelector } from '../store/hook/index'
import {
  LeftWrap, PageButton, PageInput, PageWrapper, RightWrap,
} from '../styles/components/Pagination'
import { isPositiveInteger } from '../utils/helper'

const Pagination = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { filter } = useAppSelector((state) => state.pet)
  const [pageValue, setPageValue] = useState(filter.page.toString())
  const disablePage = (max: number) => filter.page <= max
  const handlePageOnClick = (offset: number) => {
    navigate({
      pathname: Paths.home,
      search: createSearchParams({
        kind: filter.kind,
        age: filter.age,
        sex: filter.sex,
        page: (filter.page + offset).toString(),
      }).toString(),
    })
  }
  const changePageInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (isPositiveInteger(value)) setPageValue(value)
  }
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        navigate({
          pathname: Paths.home,
          search: createSearchParams({
            kind: filter.kind as PetKindUrlType,
            sex: filter.sex,
            age: filter.age,
            page: pageValue,
          }).toString(),
        })
    }
  }
  useEffect(() => {
    const page = searchParams.get('page')
    if (page) setPageValue(page)
  }, [searchParams.get('page')])

  return (
    <PageWrapper>
      <LeftWrap>
        <PageButton
          className={clsx({ disabled: disablePage(10) })}
          onClick={() => handlePageOnClick(-10)}
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </PageButton>
        <PageButton
          className={clsx({ disabled: disablePage(1) })}
          onClick={() => handlePageOnClick(-1)}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </PageButton>
      </LeftWrap>
      <PageInput
        type='number'
        value={pageValue}
        onKeyDown={(e) => onKeyDown(e)}
        onChange={(e) => changePageInput(e)}
      />
      <RightWrap>
        <PageButton onClick={() => handlePageOnClick(1)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </PageButton>
        <PageButton onClick={() => handlePageOnClick(10)}>
          <FontAwesomeIcon icon={faAnglesRight} />
        </PageButton>
      </RightWrap>
    </PageWrapper>
  )
}

export default Pagination
