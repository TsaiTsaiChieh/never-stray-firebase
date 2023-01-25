import * as i18n from 'i18next'

import LoadingModal from './LoadingModal'
import { useAppSelector } from '../../store/hook'

const LikeModal = () => {
  const { likeModalVisible } = useAppSelector((state) => state.auth)

  return (
    <LoadingModal visible={likeModalVisible} title={i18n.t('titles.update_like')!} content={i18n.t('content.update_like')!} />
  )
}

export default LikeModal
