import { Category, Header } from '../../components'
import { useGetPetsQuery } from '../../services/api'
import { useAppSelector } from '../../store/hook'

const PetList = () => {
  const { filter } = useAppSelector((state) => state.pet)
  const { data } = useGetPetsQuery(filter)

  return (
    <>
      <Header />
      <Category />
      {data
        && data.map((ele) => <span key={ele.animal_id}>{ele.animal_id}</span>)}
    </>
  )
}

export default PetList
