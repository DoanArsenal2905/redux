import React, { Component } from 'react'
import {connect} from 'react-redux'

class FoodDetail extends Component {
  render() {
    if (!this.props.activeFood) {
      return (<h4>Select a Food</h4>)
    }
    return (
      <div>
        <img alt='' src={this.props.activeFood.imageUrl}></img>
        <p>Name: {this.props.activeFood.name}</p>
        <p>Description: {this.props.activeFood.description}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeFood: state.activeFood
  }
}
let FootDetailContainer = connect(mapStateToProps)(FoodDetail)

export default FootDetailContainer