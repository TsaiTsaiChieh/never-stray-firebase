import {
  faAnglesRight,
  faAngleRight,
  faAngleLeft,
  faAnglesLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

import { useAppSelector } from '../store/hook/index'
import {
  LeftWrap,
  PageButton,
  PageWrapper,
  RightWrap,
} from '../styles/components/Pagination'

const Pagination = () => {
  const { filter } = useAppSelector((state) => state.pet)
  const { pathname } = useLocation()
  const { page } = filter
  const disablePage = (max: number) => page < max

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
