import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {selectFood} from '../actions/index'

class FoodList extends Component {

  createFoodListItems() {
    let listItems = this.props.foods.map(item => {
      return <p key={item.id} onClick={() => this.props.selectFood(item)}>
        Food Name: {item.name}
      </p>
    })
    return listItems
  }

  render() {
    return (
      <div>
        <ul>
          {this.createFoodListItems()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    foods: state.foods
  }
}

const mapDispacthToProps = dispacth => {
  return bindActionCreators({selectFood}, dispacth)
}

let FootContainer = connect(mapStateToProps, mapDispacthToProps)(FoodList)

export default FootContainer

