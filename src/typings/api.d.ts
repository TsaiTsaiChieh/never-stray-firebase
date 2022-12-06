type GetPetsRes = PetType[]
type GetPetReq = {
  limit: number
  page: number
  animal_id?: number
  animal_age?: string[]
  animal_sex?: string[]
  animal_sterilization?: string
  animal_colour?: string[]
  animal_area_pkid?: number
  animal_shelter_pkid?: number
}
