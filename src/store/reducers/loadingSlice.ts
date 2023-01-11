import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { api } from '../../services/api'

const initialState: LoadingState = {
  catLoading: false,
  dogLoading: false,
  pageLoading: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setDogLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.dogLoading = payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getPets.matchPending, (state) => {
      state.pageLoading = true
    })
    builder.addMatcher(api.endpoints.getPets.matchFulfilled, (state) => {
      state.pageLoading = false
    })
    builder.addMatcher(api.endpoints.getPets.matchRejected, (state) => {
      state.pageLoading = false
    })
  },
})

export const { setDogLoading } = loadingSlice.actions

export default loadingSlice.reducer
