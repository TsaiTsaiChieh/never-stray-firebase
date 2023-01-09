import { useEffect, useRef, useState } from 'react'

import { CatLoading } from '../../components'
import Pagination from '../../components/Pagination'
import { useAppSelector } from '../../store/hook'
import { NotFound, PetContainer } from '../../styles/pages/PetList'
import { Card } from './Card'

interface Props {
  data: PetType[]
}
const Pets = ({ data }: Props) => {
  const { catLoading } = useAppSelector((state) => state.loading)
  const initOffset = window.innerWidth < 768 ? 6 : 9
  const offset = window.innerWidth < 768 ? 2 : 9
  const lastItemRef = useRef<any | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)
  const [page, setPage] = useState<number>(1)
  const [ids, setIds] = useState<number[]>([])
  const totalPage = Math.ceil((data.length - initOffset) / offset) + 1
  useEffect(() => {
    setIds(data.slice(0, initOffset).map((ele) => ele.animal_id))
    return () => {
      setIds([])
    }
  }, [data.length])

  useEffect(() => {
    if (page <= totalPage) {
      const newPage = page + 1
      const options = {
        root: document,
        rootMargin: '20px',
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

  //  console.log(data.map((ele) => ele.animal_id), ids)

  return (
    <>
      <PetContainer>
        {catLoading ? <CatLoading /> : null}
        {!catLoading && data.length
          ? // ? data.map((ele) => <Card key={ele.animal_id} detail={ele} />)
            ids.map((id, i) => {
              if (data.length >= ids.length) {
                const ref = i === ids.length - 1 ? lastItemRef : null
                return <Card key={id} detail={data[i]} ref={ref} />
              }
              return null
            })
          : null}
        {!catLoading && !data.length ? <NotFound /> : null}
      </PetContainer>
      <Pagination />
    </>
  )
}

export default Pets
