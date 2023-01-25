import * as i18n from 'i18next'
import { Trans } from 'react-i18next'

import ConfirmModal from './ConfirmModal'
import { useAppSelector } from '../../store/hook'

const OverLimit = () => {
  const { overLimitVisible } = useAppSelector((state) => state.ui)
  return (
    <ConfirmModal visible={overLimitVisible} title={i18n.t('titles.over_limit')!} content={<Trans i18nKey='content.over_limit' values={{ limit: import.meta.env.VITE_PET_LIMIT }} />} />
  )
}

export default OverLimit
