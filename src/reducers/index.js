import { combineReducers } from 'redux'
import control from './control'

export const rootReducer = combineReducers({
  control
})

export default function(state, action) {
  return rootReducer(state, action)
}
