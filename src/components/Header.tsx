import * as i18n from 'i18next'
import { useNavigate } from 'react-router-dom'

import { Paths } from '../constants'
import { createData, readDoc, updateData } from '../services/crud'
import { googleLogin } from '../services/users'
import { useAppDispatch, useAppSelector } from '../store/hook'
import {
  login,
  logout,
  setAuthLoading,
  setIsLike,
} from '../store/reducers/authSlice'
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
    dispatch(setIsLike(false))
  }
  const { isAuth, userData } = useAppSelector((state) => state.auth)
  const authHandle = async () => {
    if (!isAuth) {
      const user = await googleLogin()
      dispatch(setAuthLoading({ type: 'login', visible: true }))
      const { name, email, photo } = user
      const docSnap: UserFromFirebase | undefined = await readDoc(
        'users',
        email,
      )
      const loginInfo: Omit<UserInfoType, 'like_pets'> = {
        email,
        name: name !== null ? name : '',
        photo: photo !== null ? photo : '',
      }
      if (!docSnap) {
        const saved: UserInfoType = { ...loginInfo, like_pets: [] }
        await createData('users', email, {
          ...saved,
          create_time: new Date(),
        })
        dispatch(login(saved))
      } else if (docSnap) {
        dispatch(
          login({
            ...loginInfo,
            like_pets: docSnap.like_pets,
          }),
        )
      }
      dispatch(setAuthLoading({ type: 'login', visible: false }))
    } else if (isAuth && userData) {
      dispatch(setAuthLoading({ type: 'logout', visible: true }))
      await updateData('users', userData.email, {
        like_pets: userData.like_pets,
      })
      dispatch(logout())
      dispatch(setAuthLoading({ type: 'logout', visible: false }))
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
