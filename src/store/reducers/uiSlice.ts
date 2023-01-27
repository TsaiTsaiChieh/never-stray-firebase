import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: UiState = {
  filterVisible: false,
  overLimitVisible: false,
  shouldLoginVisible: false,
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
    setShouldLoginVisible: (state, { payload }: PayloadAction<boolean>) => {
      state.shouldLoginVisible = payload
    },
  },
})

export const { toggleFilterVisible, setOverLimitVisible, setShouldLoginVisible } = uiSlice.actions

export default uiSlice.reducer
