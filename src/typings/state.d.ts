type PetState = {
  filter: GetPetReq
}
type ModalLoading = {
  visible: boolean
  title?: string
  content?: string
}
type LoadingState = {
  mainLoading: boolean
  pageLoading: boolean
  modalLoading: ModalLoading
}
type UiState = {
  filterVisible: boolean
}
type AuthState = {
  userData?: UserInfoType
  isAuth: boolean
}
