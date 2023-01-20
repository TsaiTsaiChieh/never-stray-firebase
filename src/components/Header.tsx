import * as i18n from 'i18next'
import { useNavigate } from 'react-router-dom'

import { Paths } from '../constants'
import { createData, readDoc } from '../services/crud'
import { googleLogin } from '../services/users'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { login, logout } from '../store/reducers/authSlice'
import { resetFilter } from '../store/reducers/petSlice'
import {
  AuthState,
  AvatarWrap,
  ChText,
  Container,
  EnText,
  GoogleLogo,
  GoogleLogoWrap,
  Logo,
  LogoTextWrap,
  LogoWrap,
  UserPic,
  Wrapper,
} from '../styles/components/Header'

export const Header = () => {
  const dispatch = useAppDispatch()
  const nav = useNavigate()
  const go2home = () => {
    nav({ pathname: Paths.home })
    dispatch(resetFilter())
  }
  const { isAuth, userData } = useAppSelector((state) => state.auth)
  const authHandle = async () => {
    if (!isAuth) {
      const user = await googleLogin()
      const { name, email, photo } = user
      const docSnap: UserInfoType = await readDoc('users', email)
      const saved: any = {
        email,
        name: name !== null ? name : '',
        photo: photo !== null ? photo : '',
      }
      if (!docSnap) {
        saved.like_limit = 18
        saved.create_time = new Date()
      }
      await createData('users', email, saved)
      delete saved.create_time
      dispatch(
        login(docSnap ? { ...saved, like_limit: docSnap.like_limit } : saved),
      )
    } else if (isAuth) {
      dispatch(logout())
    }
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
        <AvatarWrap onClick={authHandle}>
          {userData ? (
            <UserPic $content={userData.photo} />
          ) : (
            <GoogleLogoWrap>
              <GoogleLogo alt='login' />
            </GoogleLogoWrap>
          )}
          <AuthState>
            {isAuth ? i18n.t('buttons.logout') : i18n.t('buttons.login')}
          </AuthState>
        </AvatarWrap>
      </Container>
    </Wrapper>
  )
}

export default Header
