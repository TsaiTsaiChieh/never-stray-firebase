type GetPetsRes = PetType[]
type GetPetReq = {
  limit: number
  page: number
  kind: PetKindUrlType
  animal_id?: number
  age: PetAgeUrlType
  animal_sex?: string[]
  animal_sterilization?: string
  animal_colour?: string[]
  animal_area_pkid?: number
  animal_shelter_pkid?: number
}
