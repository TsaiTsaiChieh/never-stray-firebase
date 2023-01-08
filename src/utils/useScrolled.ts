import { useEffect, useState } from 'react'

export const useScrolled = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  useEffect(() => {
    const onScroll = () => (window.scrollY > 0 ? setScrolled(true) : setScrolled(false))
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scrolled
}
