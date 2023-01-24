type PetState = {
  filter: GetPetReq
}
type ModalLoading = {
  visible: boolean
  title?: string
  content?: string
}
type AuthModalType = {
  visible: boolean
  type: 'login' | 'logout'
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
  likeModalVisible: boolean
  loginLoading: AuthModalType
  likePets: PetType[]
  isLike: boolean
}
