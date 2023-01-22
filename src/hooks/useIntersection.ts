import {
 MutableRefObject, useEffect, useRef, useState,
} from 'react'

export const useIntersection = (
  initOffset: number,
  data: any[],
): [number[], MutableRefObject<any>] => {
  const offset = window.innerWidth < 768 ? 2 : 3
  const lastItemRef = useRef<any | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)
  const [page, setPage] = useState<number>(1)
  const [ids, setIds] = useState<number[]>([])
  const totalPage = useRef<number>(
    data.length < initOffset
      ? 1
      : Math.ceil((data.length - initOffset) / offset) + 1,
  )
  useEffect(() => {
    setIds(data.slice(0, initOffset).map((ele) => ele.animal_id))
    return () => {
      setIds([])
      setPage(1)
    }
  }, [data, initOffset])
  useEffect(() => {
    if (page <= totalPage.current) {
      const newPage = page + 1
      const options = {
        root: document,
        rootMargin: '220px',
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
  return [ids, lastItemRef]
}
