import { Card } from './Card'
import Loading from './Loading'
import Pagination from '../../components/Pagination'
import { useIntersection } from '../../hooks/useIntersection'
import { useAppSelector } from '../../store/hook'
import { NotFound, PetContainer } from '../../styles/pages/PetList'

interface Props {
  data: PetType[]
}
const Pets = ({ data }: Props) => {
  const { pageLoading } = useAppSelector((state) => state.loading)
  const initOffset = 9
  const [ids, lastItemRef] = useIntersection(initOffset, data)
  return (
    <>
      <PetContainer>
        {pageLoading
          // eslint-disable-next-line react/no-array-index-key
          ? Array.from({ length: initOffset }).map((_, i) => <Loading key={i} />) : null}
        {!pageLoading && data.length
          ? ids.map((id, i) => {
              if (data.length >= ids.length) {
                const ref = i === ids.length - 1 ? lastItemRef : null
                return <Card key={id} detail={data[i]} ref={ref} />
              }
              return null
            })
          : null}
        {!pageLoading && !data.length ? <NotFound /> : null}
      </PetContainer>
      <Pagination length={data.length} />
    </>
  )
}

export default Pets
