import React, { Component } from 'react'
import FoodListContainer from '../containers/FoodList'
import FoodDetailContainer from '../containers/FoodDetail'

export default class FoodList extends Component {
  render() {
    return (
      <div>
        <h3>List of Food: </h3>
          <FoodListContainer />
          <hr />
        <h3>Food Detail: </h3>
          <FoodDetailContainer />
      </div>
    )
  }
}
