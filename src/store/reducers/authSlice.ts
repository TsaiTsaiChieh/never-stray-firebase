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
  likePets: [],
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
    addLikePet: (
      state,
      { payload }: PayloadAction<{ id: number; pet: PetType }>,
    ) => {
      if (state.userData) {
        state.likeModalVisible = true
        if (state.userData.like_ids.length <= import.meta.env.VITE_PET_LIMIT) {
          state.userData.like_ids.push(payload.id)
          state.likePets.push(payload.pet)
          state.userData.like_limit = import.meta.env.VITE_PET_LIMIT - state.likePets.length
        }
        state.likeModalVisible = false
      }
    },
    deleteLikePet: (state, { payload }: PayloadAction<number>) => {
      if (state.userData) {
        state.likeModalVisible = true
        if (state.userData.like_limit <= import.meta.env.VITE_PET_LIMIT) {
          state.userData.like_ids = state.userData.like_ids.filter(
            (ele) => ele !== payload,
          )
          state.likePets = state.likePets.filter(
            (ele) => ele.animal_id !== payload,
          )
          state.userData.like_limit = import.meta.env.VITE_PET_LIMIT - state.likePets.length
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
