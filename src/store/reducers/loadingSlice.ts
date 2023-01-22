import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { api } from '../../services/api'

const initialState: LoadingState = {
  mainLoading: true,
  pageLoading: false,
  modalLoading: {
    visible: false,
  },
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setMainLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.mainLoading = payload
    },
    setModal: (state, { payload }: PayloadAction<ModalLoading>) => {
      state.modalLoading = payload
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

export const { setMainLoading, setModal } = loadingSlice.actions

export default loadingSlice.reducer
