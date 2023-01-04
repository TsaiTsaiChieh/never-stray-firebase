import { CatLoading } from '../../components'
import Pagination from '../../components/Pagination'
import { useAppSelector } from '../../store/hook'
import { NotFound, PetContainer } from '../../styles/pages/PetList'
import Card from './Card'

interface Props {
  data: PetType[]
}
const Pets = ({ data }: Props) => {
  const { catLoading } = useAppSelector((state) => state.loading)

  return (
    <>
      <PetContainer>
        {catLoading ? <CatLoading /> : null}
        {!catLoading && data.length
          ? data.map((ele) => <Card key={ele.animal_id} detail={ele} />)
          : null}
        {!catLoading && !data.length ? <NotFound /> : null}
      </PetContainer>
      <Pagination />
    </>
  )
}

export default Pets
