import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { Category, Header } from '../../components'
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
  useEffect(() => {
    const { kind } = params
    if (kind) {
      dispatch(
        setFilter({
          ...filter,
          kind: PetKindEnum[kind.replace('kind=', '') as PetKindUrlType],
        }),
      )
    }
  }, [params])

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
      </Container>
    </>
  )
}

export default PetList
