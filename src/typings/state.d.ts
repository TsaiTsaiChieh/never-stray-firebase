type PetState = {
  filter: GetPetReq
  pets: PetType[]
}
type LoadingState = {
  catLoading: boolean
  dogLoading: boolean
}
type UiState = {
  filterVisible: boolean
}
