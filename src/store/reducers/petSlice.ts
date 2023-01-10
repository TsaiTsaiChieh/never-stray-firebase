import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: PetState = {
  filter: {
    kind: undefined,
    age: undefined,
    sex: undefined,
    color: undefined,
    species: undefined,
    page: 1,
    limit: import.meta.env.VITE_PET_LIMIT,
  },
}

export const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    resetFilter: (state) => {
      state.filter = initialState.filter
    },
    setFilter: (state, { payload }: PayloadAction<GetPetReq>) => {
      state.filter = payload
    },
  },
})

export const { resetFilter, setFilter } = petSlice.actions

export default petSlice.reducer
