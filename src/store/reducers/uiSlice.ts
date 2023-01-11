import { createSlice } from '@reduxjs/toolkit'

import { sizes } from '../../styles'

const initialState: UiState = {
  filterVisible: window.innerWidth <= sizes.MD,
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
