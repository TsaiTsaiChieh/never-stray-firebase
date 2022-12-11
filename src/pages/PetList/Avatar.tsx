import React, { useEffect, useState } from 'react'

import { Paw, PetImg, PetImgWrap } from '../../styles/pages/PetList'
import useProgressiveImage from '../../utils/useProgressiveImage'

interface Props {
  src: string
}
const Avatar = ({ src }: Props) => {
  const [loading, setLoading] = useState<boolean>(true)
  const nullImgPath = '/images/pet-null.svg'
  const loadingImgPath = '/images/pet-mask.svg'
  const img = src === '' ? nullImgPath : useProgressiveImage(src)
  useEffect(() => {
    if (img) setLoading(false)
  }, [img])

 return (
   <PetImgWrap>
     <Paw />
     <PetImg $loading={loading} src={img || loadingImgPath} />
   </PetImgWrap>
 )
}

export default Avatar
