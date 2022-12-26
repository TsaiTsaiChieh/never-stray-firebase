import { useState } from 'react'

import {
  faCat,
  faDog,
  faFilter,
  faPaw,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import i18n from 'i18next'
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'

import { PetKindEnum } from '../constants/enum'
import { Paths } from '../constants/index'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { setFilter } from '../store/reducers/petSlice'
import { FlexCenter } from '../styles/Base'
import {
  ButtonWrap,
  CategoryName,
  Container,
  FilterIconWrap,
  FilterText,
  Wrapper,
} from '../styles/components/Category'
import { searchQuery } from '../utils/helper'

const Category = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { filter } = useAppSelector((state) => state.pet)
  const [searchParams] = useSearchParams()
  const kindUrl = searchParams.get('kind')
  let kindIdx = 0
  if (kindUrl !== null) kindIdx = Object.keys(PetKindEnum).indexOf(kindUrl) + 1
  const [activeId, setActiveId] = useState<number>(kindIdx)
  const names: string[] = i18n.t('buttons.categories', { returnObjects: true })
  const onClick = (i: number) => {
    setActiveId(i)
    const params = searchQuery(filter)
    if (i !== 0) params.kind = Object.keys(PetKindEnum)[i - 1]
    else {
      delete params.kind
      dispatch(setFilter({ ...filter, kind: undefined }))
    }
    navigate({
      pathname: Paths.home,
      search: createSearchParams(params).toString(),
    })
  }
  const icons = [faPaw, faCat, faDog]
  const categoryItem: CategoryItemType[] = names.map((name, i) => ({
    id: i,
    name,
    icon: icons[i],
  }))

  return (
    <Wrapper>
      <Container>
        <FilterIconWrap>
          <FontAwesomeIcon icon={faFilter} />
          <FilterText>{i18n.t('buttons.filter')}</FilterText>
        </FilterIconWrap>
        <FlexCenter xlGap={35}>
          {categoryItem.map(({ id, name, icon }, i) => (
            <ButtonWrap
              key={id}
              className={clsx({ active: activeId === id })}
              onClick={() => onClick(i)}
            >
              <FontAwesomeIcon icon={icon} />
              <CategoryName>{name}</CategoryName>
            </ButtonWrap>
          ))}
        </FlexCenter>
      </Container>
    </Wrapper>
  )
}
export default Category
