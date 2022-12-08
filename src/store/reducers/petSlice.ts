import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: PetState = {
  filter: { page: 1, limit: 24 },
  pets: [],
}

export const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    setFilter: (state, { payload }: PayloadAction<GetPetReq>) => {
      state.filter = payload
    },
  },
})

export const { setFilter } = petSlice.actions

export default petSlice.reducer
