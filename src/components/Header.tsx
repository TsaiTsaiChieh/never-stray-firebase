import * as i18n from 'i18next'
import { useNavigate } from 'react-router-dom'

import { Paths } from '../constants'
import { createData, readDoc, updateData } from '../services/crud'
import { googleLogin } from '../services/users'
import { useAppDispatch, useAppSelector } from '../store/hook'
import {
 login, logout, setAuthLoading, setIsLike,
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
      const docSnap: UserInfoType = await readDoc('users', email)
      const saved: any = {
        email,
        name: name !== null ? name : '',
        photo: photo !== null ? photo : '',
      }
      if (!docSnap) {
        saved.like_limit = import.meta.env.VITE_PET_LIMIT
        saved.like_ids = []
        saved.create_time = new Date()
      }
      await createData('users', email, saved)
      // delete non-serializable data
      delete saved.create_time
      delete saved.update_time
      dispatch(
        login(
          docSnap
            ? {
                ...saved,
                like_limit: docSnap.like_limit,
                like_ids: docSnap.like_ids,
              }
            : saved,
        ),
      )
      dispatch(setAuthLoading({ type: 'login', visible: false }))
    } else if (isAuth && userData) {
      dispatch(setAuthLoading({ type: 'logout', visible: true }))
      await updateData('users', userData.email, {
        like_ids: userData.like_ids,
        like_limit:
          userData.like_limit > import.meta.env.VITE_PET_LIMIT
            ? import.meta.env.VITE_PET_LIMIT
            : userData.like_limit,
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
