type PetState = {
  filter: GetPetsReq
  pets: PetType[]
  currIdx?: number
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
  overLimitVisible: boolean
  shouldLoginVisible: boolean
}
type AuthState = {
  userData?: UserInfoType
  isAuth: boolean
  likeModalVisible: boolean
  loginLoading: AuthModalType
  isLike: boolean
}
