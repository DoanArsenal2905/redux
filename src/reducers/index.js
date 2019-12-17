import FootReducer from './foods-reducer'
import UserReducer from './user-reducer'
import ActiveFoodReducer from './active-food-reducer'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
  foods: FootReducer,
  users: UserReducer,
  activeFood: ActiveFoodReducer
})

export default allReducers