import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: PetState = {
  pets: [],
  currIdx: undefined,
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
    setPets: (state, { payload }: PayloadAction<{pets: GetPetsRes; currIdx: number}>) => {
      state.pets = payload.pets
      state.currIdx = payload.currIdx
    },
    setCurrPetIdx: (state, { payload }: PayloadAction<number>) => {
      state.currIdx = payload
    },
  },
})

export const {
 resetFilter, setFilter, setPets, setCurrPetIdx,
} = petSlice.actions

export default petSlice.reducer
