import * as i18n from 'i18next'
import { useNavigate } from 'react-router-dom'

import { Paths } from '../constants'
import { useAppDispatch } from '../store/hook'
import { resetFilter } from '../store/reducers/petSlice'
import {
  AuthState,
  AvatarWrap,
  ChText,
  Container,
  EnText,
  GoogleLogo,
  Logo,
  LogoTextWrap,
  LogoWrap,
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
        <LogoWrap onClick={go2home}>
          <Logo alt='logo' />
          <LogoTextWrap>
            <ChText>{i18n.t('titles.main')}</ChText>
            <EnText>{i18n.t('titles.main_en')}</EnText>
          </LogoTextWrap>
        </LogoWrap>
        <AvatarWrap>
          <GoogleLogo alt='login' />
          <AuthState>{i18n.t('buttons.login')}</AuthState>
        </AvatarWrap>
      </Container>
    </Wrapper>
  )
}

export default Header
