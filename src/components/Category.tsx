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
import { createSearchParams, useNavigate } from 'react-router-dom'

import { PetKindEnum } from '../constants/enum'
import { Paths } from '../constants/index'
import { useAppSelector } from '../store/hook'
import { FlexCenter } from '../styles/Base'
import {
  ButtonWrap,
  CategoryName,
  Container,
  FilterIconWrap,
  FilterText,
  Wrapper,
} from '../styles/components/Category'

const Category = () => {
  const navigate = useNavigate()
  const [activeId, setActiveId] = useState(0)
  const { filter } = useAppSelector((state) => state.pet)
  const names: string[] = i18n.t('buttons.categories', { returnObjects: true })
  const onClick = (idx: number) => {
    setActiveId(idx)
    navigate({
      pathname: Paths.home,
      search: createSearchParams({
        kind: Object.keys(PetKindEnum)[idx] as PetKindUrlType,
        page: filter.page.toString(),
      }).toString(),
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
        <FlexCenter>
          {categoryItem.map(({ id, name, icon }) => (
            <ButtonWrap
              key={id}
              className={clsx({ active: activeId === id })}
              onClick={() => onClick(id)}
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
