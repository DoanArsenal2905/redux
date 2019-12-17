import {SELECT_FOOD} from './actionTypes'

export const selectFood = food => {
  console.log(`You clicked food name = ${food.name}`)
  return {
    type: SELECT_FOOD,
    payload: food
  }
}