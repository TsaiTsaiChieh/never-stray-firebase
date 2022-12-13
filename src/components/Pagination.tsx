import {
 faAnglesRight, faAngleRight, faAngleLeft, faAnglesLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router-dom'

import { useAppSelector } from '../store/hook/index'
import { LeftWrap, PageWrapper, RightWrap } from '../styles/components/Pagination'

const Pagination = () => {
  const { filter } = useAppSelector((state) => state.pet)
const { pathname } = useLocation()

  return (
    <PageWrapper>
      <LeftWrap>
        <Link to={`${pathname}?page=${filter.page - 10}`}>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </Link>
        <Link to={`${pathname}?page=${filter.page - 1}`}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Link>
      </LeftWrap>
      <RightWrap>
        <Link to={`${pathname}?page=${filter.page + 1}`}>
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
        <Link to={`${pathname}?page=${filter.page + 10}`}>
          <FontAwesomeIcon icon={faAnglesRight} />
        </Link>
      </RightWrap>
    </PageWrapper>
  )
}

export default Pagination
