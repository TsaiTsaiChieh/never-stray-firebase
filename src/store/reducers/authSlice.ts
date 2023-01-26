import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: AuthState = {
  userData: undefined,
  isAuth: false,
  loginLoading: {
    visible: false,
    type: 'login',
  },
  likeModalVisible: false,
  isLike: false,
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
      state.isAuth = initialState.isAuth
      state.userData = undefined
      state.loginLoading = initialState.loginLoading
      state.isLike = initialState.isLike
      state.likeModalVisible = initialState.likeModalVisible
    },
    setAuthLoading: (state, { payload }: PayloadAction<AuthModalType>) => {
      state.loginLoading = payload
    },
    setIsLike: (state, { payload }: PayloadAction<boolean>) => {
      state.isLike = payload
    },
    addLikePet: (state, { payload }: PayloadAction<PetType>) => {
      if (state.userData) {
        const likeLimit = parseInt(import.meta.env.VITE_LIKE_LIMIT, 10)
        state.likeModalVisible = true
        if (state.userData.like_pets.length <= likeLimit) {
          state.userData.like_pets.push(payload)
        }
        state.likeModalVisible = false
      }
    },
    deleteLikePet: (state, { payload }: PayloadAction<number>) => {
      if (state.userData) {
        const likeLimit = parseInt(import.meta.env.VITE_LIKE_LIMIT, 10)
        state.likeModalVisible = true
        if (state.userData.like_pets.length <= likeLimit) {
          state.userData.like_pets = state.userData.like_pets.filter(
            (ele) => ele.animal_id !== payload,
          )
        }
        state.likeModalVisible = false
      }
    },
  },
})

export const {
  login,
  logout,
  setAuthLoading,
  setIsLike,
  addLikePet,
  deleteLikePet,
} = authSlice.actions

export default authSlice.reducer
