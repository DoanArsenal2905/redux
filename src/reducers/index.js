import FootReducer from './foods-reducer'
import UserReducer from './user-reducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  foods: FootReducer,
  users: UserReducer
})

export default allReducers