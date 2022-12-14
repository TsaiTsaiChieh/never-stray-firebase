import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { Category, Header } from '../../components'
import { useGetPetsQuery } from '../../services/api'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setFilter } from '../../store/reducers/petSlice'
import {
  Container,
  PetsAndPage,
} from '../../styles/pages/PetList'
import { isPositiveInteger } from '../../utils/helper'
import { useScrolled } from '../../utils/useScrolled'
import Filter from './Filter'
import Pets from './Pets'

const PetList = () => {
  const { filter } = useAppSelector((state) => state.pet)
  const { data } = useGetPetsQuery(filter, { refetchOnMountOrArgChange: true })
  const dispatch = useAppDispatch()
  const location = useLocation()
  const scrolled = useScrolled()

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
        limit: import.meta.env.VITE_PET_LIMIT,
      }),
    )
  }, [location.search])

  return (
    <>
      <Header />
      <Category scrolled={scrolled} />
      <Container>
        <Filter scrolled={scrolled} />
        <PetsAndPage>
          {data && <Pets data={data} />}
        </PetsAndPage>
      </Container>
    </>
  )
}

export default PetList
