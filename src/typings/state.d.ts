type PetState = {
  filter: GetPetReq
}
type LoadingState = {
  mainLoading: boolean
  pageLoading: boolean
}
type UiState = {
  filterVisible: boolean
}
type AuthState = {
  userData?: UserInfoType
  isAuth: boolean
}
