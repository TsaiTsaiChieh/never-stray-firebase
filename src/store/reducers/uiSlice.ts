import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: UiState = {
  filterVisible: false,
  overLimitVisible: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleFilterVisible: (state) => {
      state.filterVisible = !state.filterVisible
    },
    setOverLimitVisible: (state, { payload }: PayloadAction<boolean>) => {
      state.overLimitVisible = payload
    },
  },
})

export const { toggleFilterVisible, setOverLimitVisible } = uiSlice.actions

export default uiSlice.reducer
