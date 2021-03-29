import { combineReducers } from 'redux'
import listingsReducer from './listingsReducer'
import tripsReducer from './tripsReducer'

export default combineReducers({
    listingsReducer,
    tripsReducer
  })




  //combines reducers

  //reducer is a function that takes in an action and existing data, 
  //cahnges the data according to the type and payload of the action, 
  //and then sends the updated data to the state.

  //like the middle man that combines the action and data and that changed data is sent to the state.

  //dispatch is the function that triggers the middle man