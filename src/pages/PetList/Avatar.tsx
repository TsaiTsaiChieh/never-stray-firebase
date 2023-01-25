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
    id && userData ? userData.like_ids.includes(id) : false,
  )
  const [loading, setLoading] = useState<boolean>(true)
  const nullImgPath = '/images/pet-null.svg'
  const loadingImgPath = '/images/pet-mask.svg'
  const img = useProgressiveImage(src === '' ? nullImgPath : src)
  useEffect(() => {
    if (img) setLoading(false)
  }, [img])
  useEffect(() => {
    if (id && userData && userData.like_ids.includes(id)) {
      setIsLike(true)
    } else setIsLike(false)
  }, [userData?.like_ids])

  const toggleLike = async () => {
    if (!isLike && userData && userData.like_limit > 0 && id) {
      dispatch(addLikePet({ id, pet: detail! }))
    } else if (isLike && userData?.email && id) {
      dispatch(deleteLikePet(id))
    } else if (!isLike && userData?.like_limit === 0) { dispatch(setOverLimitVisible(true)) }
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
