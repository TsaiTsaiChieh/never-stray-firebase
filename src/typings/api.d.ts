type GetPetsRes = PetType[]
type GetPetReq = {
  limit: number
  page: number
  kind: PetKindUrlType
  animal_id?: number
  age: PetAgeUrlType
  sex: PetSexUrlType
  animal_sterilization?: string
  color?: string
  city?: number
  animal_shelter_pkid?: number
}
