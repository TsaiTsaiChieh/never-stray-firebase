type GetPetsRes = PetType[]
type GetPetReq = {
  limit: number
  page: number
  kind?: PetKindUrlType
  id?: number
  age?: PetAgeUrlType
  sex: PetSexUrlType
  color?: string
  city?: number
  shelter?: number
}
