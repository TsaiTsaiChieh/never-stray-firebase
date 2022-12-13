import { useEffect } from 'react'

import { useLocation, useParams, useSearchParams } from 'react-router-dom'

import { Category, Header } from '../../components'
import Pagination from '../../components/Pagination'
import { PetKindEnum } from '../../constants/enum'
import { useGetPetsQuery } from '../../services/api'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setFilter } from '../../store/reducers/petSlice'
import { Container, PetContainer } from '../../styles/pages/PetList'
import Card from './Card'

const PetList = () => {
  const { filter } = useAppSelector((state) => state.pet)
  const { data } = useGetPetsQuery(filter)
  const dispatch = useAppDispatch()
  const params = useParams()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const { kind } = params
    const page = searchParams.get('page')
    if (kind) {
      dispatch(
        setFilter({
          ...filter,
          kind: PetKindEnum[kind.replace('kind=', '') as PetKindUrlType],
        }),
      )
    }
    if (page) dispatch(setFilter({ ...filter, page: parseInt(page, 10) }))
  }, [location.search])

  return (
    <>
      <Header />
      <Category />
      <Container>
        <PetContainer>
          {data
            && data.map((ele: PetType) => (
              <Card key={ele.animal_id} detail={ele} />
            ))}
        </PetContainer>
        <Pagination />
      </Container>
    </>
  )
}

export default PetList
