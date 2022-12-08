import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
        animal_id,
        animal_age,
        animal_sex,
        animal_sterilization,
        animal_colour,
        animal_area_pkid,
        animal_shelter_pkid,
      }) => {
        let url = `?UnitId=QcbUEzN6E6DL&$top=${limit}&$skip=${limit * page}`

        if (animal_id) url += `&animal_id={${animal_id}}`
        if (animal_age) url += `&animal_age=[{${animal_age.join(',')}}]`
        if (animal_sex) url += `&animal_sex=[{${animal_sex.join(',')}}]`
        if (animal_sterilization) {
          url += `&animal_sterilization={${animal_sterilization}}`
        }
        if (animal_colour) {
          url += `&animal_colour=[{${animal_colour.join(',')}}]`
        }
        if (animal_area_pkid) url += `&animal_area_pkid={${animal_area_pkid}}`
        if (animal_shelter_pkid) {
          url += `&animal_shelter_pkid={${animal_shelter_pkid}}`
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
