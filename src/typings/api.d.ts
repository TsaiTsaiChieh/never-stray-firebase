type GetPetsRes = PetType[]
type GetPetsReq = {
  limit: number
  page: number
  kind?: PetKindUrlType
  id?: number
  age?: PetAgeUrlType
  sex?: PetSexUrlType
  species?: string
  color?: string
  city?: CityUrlType
  shelter?: ShelterUrlType
}
type GetPetRes = GetPetsRes
type GetPetReq = {
  id: string
}
