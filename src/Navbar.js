import React, { Component } from 'react'
import './navbar.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import New from './components/New'
import Food from '../src/components/Food'

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/new'>New</Link></li>
            <li><Link to='/food'>Food</Link></li>
          </ul>
          <Route exact path='/' component={Home}></Route>
          <Route path='/new' component={New}></Route>
          <Route path='/food' component={Food}></Route>
        </div>
      </Router>
    )
  }
}
