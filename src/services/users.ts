import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const errorHandle = (error: any) => {
  const errorCode = error.code
  const errorMessage = error.message
  console.error('firebase err: ', errorCode, errorMessage)
  return errorCode
}
export const googleLogin = async (): Promise<UserDataType> => {
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  try {
    const result = await signInWithPopup(auth, provider)
    const { user } = result
    return Promise.resolve({
      uid: user.uid,
      name: user.displayName,
      email: user.email!,
      photo: user.photoURL,
    })
  } catch (error: any) {
    return Promise.reject(errorHandle(error))
  }
}
