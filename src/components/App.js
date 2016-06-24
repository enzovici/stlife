import React, { PropTypes } from 'react'
import { Router, browserHistory } from 'react-router'
import Header  from './main/header'

export default class App extends React.Component {
  render() { //all comps go here
    return (
      <div>
        <div class="container">
          <h1 id="logo" >
            <a href="https://www.streetlife.com/">Streetlife</a>
          </h1>
          <div class="row">
            <div class="column">  <Header /> </div>
          </div>
          <div class="row">
            <div class="column">  {this.props.children} </div>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}
