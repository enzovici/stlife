import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class Comments extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.commentList = this.commentList.bind(this);

  }

  commentList(news) {
    let rows = []
    news.forEach((item, _) => {
      let news= (
        <div className='container' id='news'>
          <div className='column'>
          <tr key={`item_rec_${item.id}`}>
            <td><img className='avatar' src={item.author.avatar}></img></td>
            <td class='body-news'>{item.body}</td>
            <td>{item.subject}</td>
            <td>{item.downvotes}</td>
            <td>{item.downvotes}</td>
          </tr>
          <tr>
            <td >{item.author.dispaly_name}</td>
            <td className='place'><img src='/img/loc.svg'></img>{item.author.nearest_area.name}</td>
            <td className='votes'><img src='/img/up.svg'></img>{item.upvotes}</td>
            <td className='votes'><img src='img/down.svg'></img>{item.downvotes}</td>
            <td className='date'><img src='img/cal.svg'></img>{new Date(item.posted_at).toUTCString()}</td>
          </tr>
          <tr> + comments</tr>
            </div>
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
             <h3>Comments</h3>
             <table>
               <thead>
                 <tr>
                   Latest stories
                 </tr>
               </thead>
               <tbody>
            {this.commentList(newsfeedItems)}
               </tbody>
             </table>
           </div>
    )
  }
}

function mapStateToProps (state, ownprops) {
  return {
    newsfeed: state.mainStore.comments
  }
}

export default connect(mapStateToProps)(Comments)
