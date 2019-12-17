import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
  }

  buttonClick = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    })) 
  }

  render() {
    return (
      <div>
        <button className='ToggleButton' onClick={ this.buttonClick }>
          Toggle { this.state.isOn ? `ON` : `OFF` }
        </button>
      </div>
    )
  }
}
