import React, { Component } from 'react'
import {connect} from 'react-redux'

class FoodList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    )
  }
}

mapStateToProps = state => {
  return {
    foods: state.foods
  }
}

let FootContainer = connect

export default FoodList

