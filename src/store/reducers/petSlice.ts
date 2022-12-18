import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { PetKindEnum } from '../../constants/enum'

const initialState: PetState = {
  filter: {
    kind: Object.keys(PetKindEnum)[0] as PetKindUrlType,
    page: 1,
    limit: 18,
  },
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
