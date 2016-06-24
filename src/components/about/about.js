import React from 'react'
import { connect } from 'react-redux'

class About extends React.Component {
  render() {

    return (
      <div>
        <h6><p>This assesment has been realized with REACT and REDUX following the FLUX pattern.
          Webpack bundler, Babel transpiler and MOCHA test suite.</p>
        <p>Read the <a href='https://github.com/enzovici/streetlife-assesment.git'>repository README </a>
        for more informations.</p>
    </h6>
  </div>
)
}
}


function mapStateToProps (state, ownprops) {
  return {
    mainStore: state.mainStore
  }
}

export default connect(mapStateToProps)(About)

//
// <h3>Invoice ID ({id})</h3>
// <div>
//   <p>Status: {invoice.details.status}</p>
//   <p>Amount: {invoice.details.terms.amount} £</p>
//   <p>Type: {invoice.kind}</p>
// </div>
// <div>
//   <a href='{invoice.links.sender}'> Sender </a>
//   <p>ID: {invoice.sender.id}</p>
//   <p>Type: {invoice.sender.kind} </p>
//   <p>Address: {invoice.sender.owner.address}</p>
// </div>
// <div>
//   <a href='{invoice.links.sender}'> Recipient </a>
//   <p>ID: {invoice.recipient.id}</p>
//   <p>Type: {invoice.recipient.kind} </p>
//   <p>Address: {invoice.recipient.owner.address}</p>
// </div>
// <div>
//   <p>Amount: {invoice.details.terms.amount} £</p>
//   <p>Status: {invoice.details.status}</p>
//   <p>Amount: {invoice.details.terms.amount} £</p>
// </div>
