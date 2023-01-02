import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { Category, Header } from '../../components'
import Pagination from '../../components/Pagination'
import { useGetPetsQuery } from '../../services/api'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setFilter } from '../../store/reducers/petSlice'
import {
 Container, NotFound, NotFoundWrap, PetContainer, PetsAndPage,
} from '../../styles/pages/PetList'
import { isPositiveInteger } from '../../utils/helper'
import Card from './Card'
import LeftFilter from './LeftFilter'

const PetList = () => {
  const { filter } = useAppSelector((state) => state.pet)
  const { data } = useGetPetsQuery(filter)
  const dispatch = useAppDispatch()
  const location = useLocation()
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
        city: params.city ? parseInt(params.city, 10) as CityUrlType : filter.city,
        shelter: params.shelter ? parseInt(params.shelter, 10) as ShelterUrlType : filter.shelter,
        limit: import.meta.env.VITE_PET_LIMIT,
      }),
    )
  }, [location.search])

  return (
    <>
      <Header />
      <Category />
      <Container>
        <LeftFilter />
        <PetsAndPage>
          <PetContainer>
            {data?.length ? (
            data.map((ele: PetType) => (
              <Card key={ele.animal_id} detail={ele} />
            ))
          ) : (
            <NotFoundWrap>
              <NotFound />
            </NotFoundWrap>
          )}
          </PetContainer>
          <Pagination />
        </PetsAndPage>
      </Container>
    </>
  )
}

export default PetList
