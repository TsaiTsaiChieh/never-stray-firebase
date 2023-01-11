import * as i18n from 'i18next'
import { useNavigate } from 'react-router-dom'

import { Paths } from '../constants'
import { useAppDispatch } from '../store/hook'
import { resetFilter } from '../store/reducers/petSlice'
import {
  AuthState,
  AvatarWrap,
  Container,
  GoogleLogo,
  Logo,
  Wrapper,
} from '../styles/components/Header'

export const Header = () => {
  const dispatch = useAppDispatch()
  const nav = useNavigate()
  const go2home = () => {
    nav({ pathname: Paths.home })
    dispatch(resetFilter())
  }

  return (
    <Wrapper>
      <Container className='flex-center'>
        <Logo onClick={go2home} alt='logo' />
        <AvatarWrap>
          <GoogleLogo />
          <AuthState>{i18n.t('buttons.login')}</AuthState>
        </AvatarWrap>
      </Container>
    </Wrapper>
  )
}

export default Header
