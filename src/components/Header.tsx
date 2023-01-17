import * as i18n from 'i18next'
import { useNavigate } from 'react-router-dom'

import { Paths } from '../constants'
import { createData, readDoc } from '../services/crud'
import { googleLogin } from '../services/users'
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
  const loginHandle = async () => {
    const userData = await googleLogin()
    const { name, email, photo } = userData
    const docSnap = await readDoc('users', email)
    const saved: any = {
      name: name !== null ? name : '',
      email,
      photo: photo !== null ? photo : '',
    }
    if (!docSnap) {
      saved.like_limit = 18
      saved.create_time = new Date()
    }
    await createData('users', email, saved)
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
        <AvatarWrap onClick={loginHandle}>
          <GoogleLogo alt='login' />
          <AuthState>{i18n.t('buttons.login')}</AuthState>
        </AvatarWrap>
      </Container>
    </Wrapper>
  )
}

export default Header
