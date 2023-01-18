import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './reducers/authSlice'
import loadingReducer from './reducers/loadingSlice'
import petReducer from './reducers/petSlice'
import uiReducer from './reducers/uiSlice'
import { api } from '../services/api'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  pet: petReducer,
  loading: loadingReducer,
  ui: uiReducer,
  auth: authReducer,
})

export default rootReducer
