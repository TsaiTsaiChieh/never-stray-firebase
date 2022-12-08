import { combineReducers } from '@reduxjs/toolkit'

import { api } from '../services/api'
import petReducer from './reducers/petSlice'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  pet: petReducer,
})

export default rootReducer
