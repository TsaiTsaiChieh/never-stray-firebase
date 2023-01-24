import i18n from 'i18next'
import { useNavigate } from 'react-router-dom'

import { TextFilter } from '../../components'
import { Paths } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setIsLike } from '../../store/reducers/authSlice'
import { resetFilter } from '../../store/reducers/petSlice'
import {
 LikeBtn, LikeBtnOuter, SubFilterWrap,
} from '../../styles/components/Filter'

const SubFilter = () => {
  const dispatch = useAppDispatch()
  const nav = useNavigate()
  const { isLike } = useAppSelector((state) => state.auth)
  const Labels: string[] = i18n.t('labels.filters', { returnObjects: true })
  const Placeholders: string[] = i18n.t('placeholders.selector', {
    returnObjects: true,
  })
  const isLikeHandle = () => {
    dispatch(setIsLike(!isLike))
    dispatch(resetFilter())
    nav({ pathname: Paths.home })
  }
  return (
    <SubFilterWrap>
      <TextFilter
        fieldName='id'
        label={Labels[0]}
        placeholder={Placeholders[0]}
      />
      <LikeBtnOuter $active={isLike}>
        <LikeBtn onClick={isLikeHandle}>{i18n.t('buttons.like')}</LikeBtn>
      </LikeBtnOuter>
    </SubFilterWrap>
  )
}

export default SubFilter
