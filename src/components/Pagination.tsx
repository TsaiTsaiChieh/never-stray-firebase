import {
 ChangeEvent, KeyboardEvent, useEffect, useState,
} from 'react'

import {
  faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import {
 Link, useLocation, useNavigate, useSearchParams,
} from 'react-router-dom'

import { useAppSelector } from '../store/hook/index'
import {
  LeftWrap, PageButton, PageInput, PageWrapper, RightWrap,
} from '../styles/components/Pagination'

const Pagination = () => {
  const navigate = useNavigate()
  const { filter } = useAppSelector((state) => state.pet)
  const { page } = filter
  const [pageValue, setPageValue] = useState(page.toString())
  const location = useLocation()
const { pathname } = location
  const [searchParams] = useSearchParams()

  const disablePage = (max: number) => page < max
  const changePageInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPageValue(e.target.value)
  }
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key)) e.preventDefault()
  }
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      navigate(`${pathname}?page=${parseInt(pageValue, 10)}`)
    }
  }
  useEffect(() => {
    const pageUrl = searchParams.get('page')
    if (pageUrl) setPageValue(pageUrl)
  }, [location.search])

  return (
    <PageWrapper>
      <LeftWrap>
        <PageButton
          as={Link}
          className={clsx({ disabled: disablePage(10) })}
          to={`${pathname}?page=${page - 10}`}
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </PageButton>
        <PageButton
          as={Link}
          className={clsx({ disabled: disablePage(1) })}
          to={`${pathname}?page=${page - 1}`}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </PageButton>
      </LeftWrap>
      <PageInput
        type='number'
        value={pageValue}
        onKeyPress={(e) => onKeyPress(e)}
        onKeyDown={(e) => onKeyDown(e)}
        onChange={(e) => changePageInput(e)}
      />
      <RightWrap>
        <PageButton as={Link} to={`${pathname}?page=${page + 1}`}>
          <FontAwesomeIcon icon={faAngleRight} />
        </PageButton>
        <PageButton as={Link} to={`${pathname}?page=${page + 10}`}>
          <FontAwesomeIcon
            icon={faAnglesRight}
            to={`${pathname}?page=${page + 10}`}
          />
        </PageButton>
      </RightWrap>
    </PageWrapper>
  )
}

export default Pagination
