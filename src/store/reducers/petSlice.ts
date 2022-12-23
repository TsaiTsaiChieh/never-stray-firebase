import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { PetAgeEnum, PetKindEnum, PetSexEnum } from '../../constants/enum'

const initialState: PetState = {
  filter: {
    kind: Object.keys(PetKindEnum)[0] as PetKindUrlType,
    age: Object.keys(PetAgeEnum)[0] as PetAgeUrlType,
    sex: Object.keys(PetSexEnum)[0] as PetSexUrlType,
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
