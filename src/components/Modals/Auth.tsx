import * as i18n from 'i18next'

import LoadingModal from './LoadingModal'
import { useAppSelector } from '../../store/hook'

const AuthModal = () => {
  const { loginLoading } = useAppSelector((state) => state.auth)

  return (
    <LoadingModal visible={loginLoading.visible} title={i18n.t(`titles.${loginLoading.type}`)!} />
  )
}

export default AuthModal
