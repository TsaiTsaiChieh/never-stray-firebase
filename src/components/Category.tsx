import { useState } from 'react'

import {
  faCat,
  faDog,
  faPaw,
  faFilter,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import i18n from 'i18next'
import { Link } from 'react-router-dom'

import { PetKindEnum } from '../constants/enum'
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
  const [activeId, setActiveId] = useState(0)
  const names: string[] = i18n.t('buttons.categories', { returnObjects: true })
  const onClick = (idx: number) => {
    setActiveId(idx)
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
            <Link key={id} to={`/kind=${Object.keys(PetKindEnum)[id]}`}>
              <ButtonWrap
                className={clsx({ active: activeId === id })}
                onClick={() => onClick(id)}
              >
                <FontAwesomeIcon icon={icon} />
                <CategoryName>{name}</CategoryName>
              </ButtonWrap>
            </Link>
          ))}
        </FlexCenter>
      </Container>
    </Wrapper>
  )
}
export default Category
