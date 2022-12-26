import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { PetAgeEnum, PetKindEnum, PetSexEnum } from '../constants/enum'

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
        animal_id,
        age,
        sex,
        animal_sterilization,
        color,
        city,
        animal_shelter_pkid,
      }) => {
        let url = `?UnitId=QcbUEzN6E6DL&$top=${limit}&$skip=${limit * (page - 1)}`
        if (kind && PetKindEnum[kind]) url += `&animal_kind=${PetKindEnum[kind]}`
        if (animal_id) url += `&animal_id={${animal_id}}`
        if (age && PetAgeEnum[age]) url += `&animal_age=${PetAgeEnum[age]}`
        if (sex && PetSexEnum[sex]) url += `&animal_sex=${PetSexEnum[sex]}`
        if (animal_sterilization) {
          url += `&animal_sterilization={${animal_sterilization}}`
        }
        if (color) {
          url += `&animal_colour=${color}`
        }
        if (city) url += `&animal_area_pkid=${city}`
        if (animal_shelter_pkid) {
          url += `&animal_shelter_pkid=${animal_shelter_pkid}`
        }
        console.log(`${import.meta.env.VITE_API_URL}${url}`)
        return {
          url,
          method: 'GET',
        }
      },
    }),
  }),
})

export const { useGetPetsQuery } = api
