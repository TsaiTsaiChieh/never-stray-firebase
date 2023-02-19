import { useNavigate } from 'react-router-dom'

import { Paths } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setCurrPetIdx } from '../../store/reducers/petSlice'
import {
  IconContainer,
  IconWrap,
  NextIcon,
  PageContainer,
  PrevIcon,
} from '../../styles/pages/Pet'

const NextOrPrev = () => {
  const limit = parseInt(import.meta.env.VITE_PET_LIMIT, 10)
  const nav = useNavigate()
  const dispatch = useAppDispatch()
  const { pets, currIdx } = useAppSelector((state) => state.pet)
  const preAction = () => {
    if (currIdx !== undefined) {
      const tmp = currIdx - 1
      dispatch(setCurrPetIdx(tmp))
      nav(`${Paths.pet}/${pets[tmp].animal_id}`)
    }
  }
  const nextAction = () => {
    if (currIdx !== undefined) {
      const tmp = currIdx + 1
      dispatch(setCurrPetIdx(tmp))
      nav(`${Paths.pet}/${pets[tmp].animal_id}`)
    }
  }
  
  return (
    <PageContainer>
      <IconContainer>
        <IconWrap $visible={!!currIdx && currIdx > 0} onClick={preAction}>
          {currIdx && currIdx > 0 ? <PrevIcon /> : null}
        </IconWrap>
        <IconWrap $visible={currIdx !== undefined && currIdx < limit - 1} onClick={nextAction}>
          {currIdx !== undefined && currIdx < limit ? <NextIcon /> : null}
        </IconWrap>
      </IconContainer>
    </PageContainer>
  )
}

export default NextOrPrev
