import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import Filter from './Filter'
import Pets from './Pets'
import SubFilter from './SubFilter'
import {
  AuthModal,
  Category,
  Footer,
  Header,
  LikeModal,
  OverLimitModal,
  ShouldLoginModal,
} from '../../components'
import { api } from '../../services/api'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setFilter } from '../../store/reducers/petSlice'
import {
  Banner,
  Container,
  PetsAndPage,
  SubFilterAndPetsWrap,
} from '../../styles/pages/PetList'
import { isPositiveInteger } from '../../utils/helper'
import { useScrolled } from '../../utils/useScrolled'

const PetList = () => {
  const { filter, pets } = useAppSelector((state) => state.pet)
  const dispatch = useAppDispatch()
  const location = useLocation()
  const scrolled = useScrolled()
  const { isLike, userData } = useAppSelector((state) => state.auth)
  useEffect(() => {
    dispatch(api.endpoints.getPets.initiate(filter))
  }, [dispatch, filter])

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const params = Object.fromEntries(urlParams)
    dispatch(
      setFilter({
        id: params.id ? parseInt(params.id, 10) : filter.id,
        kind: params.kind ? (params.kind as PetKindUrlType) : filter.kind,
        age: params.age ? (params.age as PetAgeUrlType) : filter.age,
        sex: params.sex ? (params.sex as PetSexUrlType) : filter.sex,
        page: isPositiveInteger(params.page) ? Number(params.page) : 1,
        species: params.species ? params.species : filter.species,
        color: params.color ? params.color : filter.color,
        city: params.city
          ? (parseInt(params.city, 10) as CityUrlType)
          : filter.city,
        shelter: params.shelter
          ? (parseInt(params.shelter, 10) as ShelterUrlType)
          : filter.shelter,
        limit: parseInt(import.meta.env.VITE_PET_LIMIT, 10),
      }),
    )
  }, [location.search])

  return (
    <>
      <AuthModal />
      <LikeModal />
      <OverLimitModal />
      <ShouldLoginModal />
      <Header />
      <Category scrolled={scrolled} />
      <Container>
        <Filter scrolled={scrolled} />
        <SubFilterAndPetsWrap>
          <a href='https://www.buymeacoffee.com/never.stray' target='_blank' rel='noreferrer noopener'>
            <Banner />
          </a>
          <SubFilter />
          <PetsAndPage>
            {pets.length !== 0 && (
              <Pets data={isLike && userData ? userData.like_pets : pets} />
            )}
          </PetsAndPage>
        </SubFilterAndPetsWrap>
      </Container>
      <Footer />
    </>
  )
}

export default PetList
