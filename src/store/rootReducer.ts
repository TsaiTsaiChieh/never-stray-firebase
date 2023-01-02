import { combineReducers } from '@reduxjs/toolkit'

import { api } from '../services/api'
import loadingReducer from './reducers/loadingSlice'
import petReducer from './reducers/petSlice'
import uiReducer from './reducers/uiSlice'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  pet: petReducer,
  loading: loadingReducer,
  ui: uiReducer,
})

export default rootReducer
