import * as i18n from 'i18next'
import { Trans } from 'react-i18next'

import ConfirmModal from './ConfirmModal'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setOverLimitVisible } from '../../store/reducers/uiSlice'

const OverLimit = () => {
  const dispatch = useAppDispatch()
  const { overLimitVisible } = useAppSelector((state) => state.ui)
  const confirmAction = () => {
    dispatch(setOverLimitVisible(false))
  }

  return (
    <ConfirmModal visible={overLimitVisible} title={i18n.t('titles.over_limit')!} content={<Trans i18nKey='content.over_limit' values={{ limit: import.meta.env.VITE_LIKE_LIMIT }} />} confirmAction={confirmAction} />
  )
}

export default OverLimit
