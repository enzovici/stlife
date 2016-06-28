import React from 'react'
import { connect } from 'react-redux'

export default class About extends React.Component {
  render () {
    return (
      <div>
        <h3>About</h3>
        <h6><p>This assesment has been realized with REACT and REDUX.
          Webpack bundler, Babel transpiler and MOCHA test suite.</p>
        <p>Read the <a href='https://github.com/enzovici/streetlife-assesment.git'>repository README </a>
        for more informations.</p>
      <p>The app could be better componentized, all components are stateful (containers) due to the short time I had. </p>
    </h6>
  </div>
  ) }
}
