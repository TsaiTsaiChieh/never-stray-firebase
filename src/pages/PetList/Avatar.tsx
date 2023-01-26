import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hook'
import { addLikePet, deleteLikePet } from '../../store/reducers/authSlice'
import { setOverLimitVisible } from '../../store/reducers/uiSlice'
import {
  ID,
 Like, Paw, PetImg, PetImgWrap,
} from '../../styles/pages/PetList'
import useProgressiveImage from '../../utils/useProgressiveImage'

interface Props {
  detail?: PetType
}
const Avatar = ({ detail }: Props) => {
  const id = detail ? detail.animal_id : undefined
  const src = detail ? detail.album_file : 'null'
  const dispatch = useAppDispatch()
  const { userData } = useAppSelector((state) => state.auth)
  const [isLike, setIsLike] = useState(
    id && userData ? userData.like_pets.map((ele) => ele.animal_id).includes(id)
      : false,
  )
  const [loading, setLoading] = useState<boolean>(true)
  const nullImgPath = '/images/pet-null.svg'
  const loadingImgPath = '/images/pet-mask.svg'
  const img = useProgressiveImage(src === '' ? nullImgPath : src)
  useEffect(() => {
    if (img) setLoading(false)
  }, [img])
  useEffect(() => {
    if (id && userData && userData.like_pets.map((ele) => ele.animal_id).includes(id)) {
      setIsLike(true)
    } else setIsLike(false)
  }, [userData?.like_pets])

  const toggleLike = async () => {
    const likeLimit = parseInt(import.meta.env.VITE_LIKE_LIMIT, 10)
    if (
      detail
      && !isLike
      && userData
      && userData.like_pets.length < likeLimit
    ) {
      dispatch(addLikePet(detail))
    } else if (isLike && userData?.email && id) {
      dispatch(deleteLikePet(id))
    } else if (!isLike && userData?.like_pets.length === likeLimit) {
      dispatch(setOverLimitVisible(true))
    }
  }

  return (
    <PetImgWrap>
      <Paw alt='' />
      {id ? <Like onClick={toggleLike} $fill={isLike} /> : null}
      <PetImg $loading={loading} src={img || loadingImgPath} />
      <ID $loading={loading}>{id}</ID>
    </PetImgWrap>
  )
}

export default Avatar
