import { useEffect } from 'react'

import { MainLoading } from './components'
import View from './routes/View'
import { useAppDispatch, useAppSelector } from './store/hook'
import { setMainLoading } from './store/reducers/loadingSlice'

export const App = () => {
  const dispatch = useAppDispatch()
  const { mainLoading } = useAppSelector((state) => state.loading)
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setMainLoading(false))
    }, 500)
    return () => clearTimeout(timer)
  }, [dispatch, mainLoading])

  return mainLoading ? <MainLoading /> : <View />
}

export default App
