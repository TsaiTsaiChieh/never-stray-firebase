import { Category, Header } from '../../components'
import { useGetPetsQuery } from '../../services/api'
import { useAppSelector } from '../../store/hook'
import { Container, PetContainer } from '../../styles/pages/PetList'
import Card from './Card'

const PetList = () => {
  const { filter } = useAppSelector((state) => state.pet)
  const { data } = useGetPetsQuery(filter)

  return (
    <>
      <Header />
      <Category />
      <Container>
        <PetContainer>
          {data && data.map((ele:PetType) => <Card key={ele.animal_id} detail={ele} />)}
        </PetContainer>
      </Container>
    </>
  )
}

export default PetList
