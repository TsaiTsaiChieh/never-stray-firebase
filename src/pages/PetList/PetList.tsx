import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { Category, Header } from '../../components'
import Pagination from '../../components/Pagination'
import { useGetPetsQuery } from '../../services/api'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setFilter } from '../../store/reducers/petSlice'
import { Container, NotFound, PetContainer } from '../../styles/pages/PetList'
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
        kind: params.kind as PetKindUrlType,
        page: parseInt(params.page, 10),
        limit: 18,
      }),
    )
  }, [location.search])

  return (
    <>
      <Header />
      <Category />
      <Container>
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
      </Container>
    </>
  )
}

export default PetList
