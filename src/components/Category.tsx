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
  const { filter } = useAppSelector((state) => state.pet)
  const [searchParams] = useSearchParams()
  const [activeId, setActiveId] = useState<PetKindUrlType>(
    searchParams.get('kind') as PetKindUrlType,
  )
  const names: string[] = i18n.t('buttons.categories', { returnObjects: true })
  const onClick = (i: number) => {
    setActiveId(Object.keys(PetKindEnum)[i] as PetKindUrlType)
    navigate({
      pathname: Paths.home,
      search: createSearchParams({
        kind: Object.keys(PetKindEnum)[i],
        age: filter.age,
        sex: filter.sex,
        page: '1',
      }).toString(),
    })
  }
  const icons = [faPaw, faCat, faDog]
  const categoryItem: CategoryItemType[] = names.map((name, i) => ({
    id: Object.keys(PetKindEnum)[i] as PetKindUrlType,
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
