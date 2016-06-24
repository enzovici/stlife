import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class Newsfeed extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.feedList = this.feedList.bind(this);

  }

  feedList(news) {
    let rows = []
    news.forEach((item, _) => {
      let news= (
        <div id='news'>
          <tr key={`item_rec_${item.id}`}>
            <img src={item.author.avatar}></img>
            <td>{item.body}</td>
            <td>{item.subject}</td>
            <td>{item.downvotes}</td>
            <td>{item.downvotes}</td>
          </tr>
          <tr className='votes'> <img src='/img/up.svg'></img>{item.upvotes} <img src='img/down.svg'></img>{item.downvotes}</tr>
          </div>
        )
        rows.push(news)
      })
      return rows
    }

  render () {
  let newsfeedItems = this.props.newsfeed
  console.log(newsfeedItems)
    return (
      <div>
             <h3>Newsfeed</h3>
             <table>
               <thead>
                 <tr>
                   <th>ID</th>
                   <th>Status</th>
                   <th>Amount</th>
                 </tr>
               </thead>
               <tbody>
            {this.feedList(newsfeedItems)}
               </tbody>
             </table>
           </div>
    )
  }
}

function mapStateToProps (state, ownprops) {
  return {
    newsfeed: state.mainStore.newsfeed
  }
}

export default connect(mapStateToProps)(Newsfeed)
