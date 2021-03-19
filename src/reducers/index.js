import { combineReducers } from 'redux'
import listingsReducer from './listingsReducer'
import tripsReducer from './tripsReducer'

export default combineReducers({
    listingsReducer,
    tripsReducer
  })