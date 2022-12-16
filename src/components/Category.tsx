import { useState } from 'react'

import {
 faCat, faDog, faFilter, faPaw,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import i18n from 'i18next'

import { PetKindEnum } from '../constants/enum'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { setFilter } from '../store/reducers/petSlice'
import { FlexCenter } from '../styles/Base'
import {
  ButtonWrap, CategoryName, Container, FilterIconWrap, FilterText, Wrapper,
} from '../styles/components/Category'

const Category = () => {
  const dispatch = useAppDispatch()
  const [activeId, setActiveId] = useState(0)
  const { filter } = useAppSelector((state) => state.pet)
  const names: string[] = i18n.t('buttons.categories', { returnObjects: true })
  const onClick = (idx: number) => {
    setActiveId(idx)
    dispatch(
      setFilter({
        ...filter,
        kind: Object.keys(PetKindEnum)[idx] as PetKindUrlType,
        page: 1,
      }),
    )
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
