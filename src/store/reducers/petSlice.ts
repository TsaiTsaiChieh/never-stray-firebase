import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { PetAgeEnum, PetSexEnum } from '../../constants/enum'
import { api } from '../../services/api'

const initialState: PetState = {
  filter: {
    kind: undefined,
    age: Object.keys(PetAgeEnum)[0] as PetAgeUrlType,
    sex: Object.keys(PetSexEnum)[0] as PetSexUrlType,
    color: undefined,
    page: 1,
    limit: import.meta.env.VITE_PET_LIMIT,
  },
  pets: [],
}

export const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    resetState: () => initialState,
    setFilter: (state, { payload }: PayloadAction<GetPetReq>) => {
      state.filter = payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getPets.matchFulfilled,
      (state, { payload }: PayloadAction<PetType[]>) => {
        state.pets = payload
      },
    )
  },
})

export const { resetState, setFilter } = petSlice.actions

export default petSlice.reducer
