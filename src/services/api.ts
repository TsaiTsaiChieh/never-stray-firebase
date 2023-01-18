import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { PetAgeEnum, PetKindEnum, PetSexEnum } from '../constants/enum'
import { mixReplace } from '../utils/helper'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getPets: builder.query<GetPetsRes, GetPetReq>({
      query: ({
        limit,
        page,
        kind,
        id,
        age,
        sex,
        species,
        color,
        city,
        shelter,
      }) => {
        let url = `?UnitId=QcbUEzN6E6DL&$top=${limit}&$skip=${limit * (page - 1)}`
        if (kind && PetKindEnum[kind]) url += `&animal_kind=${PetKindEnum[kind]}`
        if (id) url += `&animal_id=${id}`
        if (age && PetAgeEnum[age]) url += `&animal_age=${PetAgeEnum[age]}`
        if (sex && PetSexEnum[sex]) url += `&animal_sex=${PetSexEnum[sex]}`
        if (species) url += `&animal_Variety=${mixReplace(species)}`
        if (color) {
          url += `&animal_colour=${color}`
        }
        if (city) url += `&animal_area_pkid=${city}`
        if (shelter) {
          url += `&animal_shelter_pkid=${shelter}`
        }
        return {
          url,
          method: 'GET',
        }
      },
    }),
  }),
})

export const { useGetPetsQuery } = api
