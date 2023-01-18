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
    login: (state, { payload }: PayloadAction<UserInfoType>) => {
      state.isAuth = true
      state.userData = payload
    },
    logout: (state) => {
      state.isAuth = false
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
