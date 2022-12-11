import Lottie from 'lottie-react'

import rotationCat from '../json/rotation-cat.json'
import { useAppSelector } from '../store/hook'
import { CatLoadingWrap } from '../styles/components/Loading'

const CatLoading = () => {
  const { catLoading } = useAppSelector((state) => state.loading)

  return (
    <CatLoadingWrap visible={catLoading}>
      <Lottie animationData={rotationCat} loop />
    </CatLoadingWrap>
  )
}

export default CatLoading
