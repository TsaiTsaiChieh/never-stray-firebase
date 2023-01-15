import { useEffect, useState } from 'react'

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
import { toggleFilterVisible } from '../store/reducers/uiSlice'
import {
  ButtonWrap,
  CategoryIcon,
  CategoryName,
  CategoryWrap,
  Container,
  FilterIcon,
  FilterIconWrap,
  FilterText,
  Wrapper,
} from '../styles/components/Category'
import { searchQuery } from '../utils/helper'

interface Props {
  scrolled: boolean
}
const Category = ({ scrolled }: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { filter } = useAppSelector((state) => state.pet)
  const [searchParams] = useSearchParams()
  const kindUrl = searchParams.get('kind')
  const [activeId, setActiveId] = useState<number>(
    kindUrl !== null
      ? Object.keys(PetKindEnum).indexOf(kindUrl.toUpperCase()) + 1
      : 0,
  )
  const names: string[] = i18n.t('buttons.categories', { returnObjects: true })
  const onClick = (i: number) => {
    setActiveId(i)
    const params = searchQuery(filter)
    params.page = 1
    if (i !== 0) params.kind = Object.keys(PetKindEnum)[i - 1]
    else if (i === 0) {
      // means all kind
      delete params.kind
      dispatch(setFilter({ ...filter, page: 1, kind: undefined }))
    }
    navigate({
      pathname: Paths.home,
      search: createSearchParams(params).toString(),
    })
    window.scroll({ top: 0, behavior: 'smooth' })
  }
  const icons = ['/images/all.svg', '/images/cat.svg', '/images/dog.svg']
  const categoryItem: CategoryItemType[] = names.map((name, i) => ({
    id: i,
    name,
    iconPath: icons[i],
  }))
  // reset state
  useEffect(() => {
    if (kindUrl === null) setActiveId(0)
  }, [kindUrl])
  const toggleFilter = () => {
    dispatch(toggleFilterVisible())
  }
  return (
    <Wrapper $scrolled={scrolled}>
      <Container>
        <FilterIconWrap onClick={toggleFilter}>
          <FilterIcon alt='filter' />
          <FilterText>{i18n.t('buttons.filter')}</FilterText>
        </FilterIconWrap>
        <CategoryWrap>
          {categoryItem.map(({ id, name, iconPath }, i) => (
            <ButtonWrap
              key={id}
              className={clsx({ active: activeId === id })}
              onClick={() => onClick(i)}
            >
              <CategoryIcon $content={iconPath} alt={name} />
              <CategoryName>{name}</CategoryName>
            </ButtonWrap>
          ))}
        </CategoryWrap>
      </Container>
    </Wrapper>
  )
}
export default Category
