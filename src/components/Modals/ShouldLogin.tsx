import * as i18n from 'i18next'

import ConfirmModal from './ConfirmModal'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setShouldLoginVisible } from '../../store/reducers/uiSlice'

const ShouldLogin = () => {
  const dispatch = useAppDispatch()
  const { shouldLoginVisible } = useAppSelector((state) => state.ui)
  const confirmAction = () => {
    dispatch(setShouldLoginVisible(false))
  }
  return (
    <ConfirmModal visible={shouldLoginVisible} title={i18n.t('titles.should_login')!} content={i18n.t('content.should_login')!} confirmAction={confirmAction} />
  )
}

export default ShouldLogin
