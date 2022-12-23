import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { Category, Header, LeftFilter } from '../../components'
import Pagination from '../../components/Pagination'
import { useGetPetsQuery } from '../../services/api'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setFilter } from '../../store/reducers/petSlice'
import {
 Container, NotFound, PetContainer, PetsAndPage,
} from '../../styles/pages/PetList'
import { isPositiveInteger } from '../../utils/helper'
import Card from './Card'

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
        kind: params.kind ? (params.kind as PetKindUrlType) : filter.kind,
        age: params.age ? (params.age as PetAgeUrlType) : filter.age,
        page: isPositiveInteger(params.page) ? Number(params.page) : 1,
        limit: 18,
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
            <NotFound />
          )}
          </PetContainer>
          <Pagination />
        </PetsAndPage>
      </Container>
    </>
  )
}

export default PetList
