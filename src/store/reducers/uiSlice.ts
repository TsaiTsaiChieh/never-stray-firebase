import { createSlice } from '@reduxjs/toolkit'

const initialState: UiState = {
  filterVisible: true,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleFilterVisible: (state) => {
      state.filterVisible = !state.filterVisible
    },
  },
})

export const { toggleFilterVisible } = uiSlice.actions

export default uiSlice.reducer
