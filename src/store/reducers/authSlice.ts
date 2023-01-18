import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: AuthState = {
  userData: undefined,
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<UserInfoType>) => {
      state.userData = payload
    },
    setIsAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload
    },
  },
})

export const { setUserData, setIsAuth } = authSlice.actions

export default authSlice.reducer
