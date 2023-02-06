import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { api } from '../../services/api'

const initialState: PetState = {
  pets: [],
  filter: {
    kind: undefined,
    age: undefined,
    sex: undefined,
    color: undefined,
    species: undefined,
    page: 1,
    limit: parseInt(import.meta.env.VITE_PET_LIMIT, 10),
  },
}

export const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    resetFilter: (state) => {
      state.filter = initialState.filter
    },
    setFilter: (state, { payload }: PayloadAction<GetPetsReq>) => {
      state.filter = payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getPets.matchFulfilled,
      (state, { payload }: PayloadAction<GetPetsRes>) => {
        state.pets = payload
      },
    )
  },
})

export const { resetFilter, setFilter } = petSlice.actions

export default petSlice.reducer
