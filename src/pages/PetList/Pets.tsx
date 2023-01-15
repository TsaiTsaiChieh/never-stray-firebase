import { useEffect, useRef, useState } from 'react'

import { Card } from './Card'
import Loading from './Loading'
import Pagination from '../../components/Pagination'
import { useAppSelector } from '../../store/hook'
import { NotFound, PetContainer } from '../../styles/pages/PetList'

interface Props {
  data: PetType[]
}
const Pets = ({ data }: Props) => {
  const { pageLoading } = useAppSelector((state) => state.loading)
  const initOffset = window.innerWidth < 768 ? 6 : 9
  const offset = window.innerWidth < 768 ? 2 : 3
  const lastItemRef = useRef<any | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)
  const [page, setPage] = useState<number>(1)
  const [ids, setIds] = useState<number[]>(data.slice(0, initOffset).map((ele) => ele.animal_id))
  const totalPage = useRef<number>(data.length < initOffset
  ? 1
  : Math.ceil((data.length - initOffset) / offset) + 1)
  useEffect(() => {
    setIds(data.slice(0, initOffset).map((ele) => ele.animal_id))
    return () => {
      setIds([])
      setPage(1)
    }
  }, [data.length])

  useEffect(() => {
    if (page <= totalPage.current) {
      const newPage = page + 1
      const options = {
        root: document,
        rootMargin: '40px',
        threshold: 1,
      }
      const callback = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
          setIds((prev) => [
            ...prev,
            ...data
              .slice(
                initOffset + (page - 1) * offset,
                initOffset + page * offset,
              )
              .map((ele) => ele.animal_id),
          ])
          setPage(newPage)
        }
      }
      observer.current = new IntersectionObserver(callback, options)
      if (lastItemRef.current) {
        observer.current.observe(lastItemRef.current)
      }
    }
    return () => {
      if (observer.current !== null) {
        observer.current.disconnect()
      }
    }
  })

  return (
    <>
      <PetContainer>
        {pageLoading
          // eslint-disable-next-line react/no-array-index-key
          ? Array.from({ length: initOffset }).map((_, i) => <Loading key={i} />) : null}
        {!pageLoading && data.length
          ? ids.map((id, i) => {
              if (data.length >= ids.length) {
                console.log(i, ids.length - 1)
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
