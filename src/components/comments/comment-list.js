import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import _ from 'underscore'

class CommentList extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.commentList = this.commentList.bind(this)
  }

  commentList(comments) {
    let rows = []
    let ids = []
    comments.forEach((item) => {
      let comment= (
        <div className='row' key={`item_rec_${Math.floor((Math.random() * 10000) + 1)}`}>
          <div className='column'>
            <p className='comment-author-name'><img src={item.author.avatar}></img><strong>{item.author.display_name}</strong></p>
            <p className='column column-80 column-offset-0 comment-body' dangerouslySetInnerHTML={{__html: item.body}}></p>
            <p className='comment-date'><img src='/img/cal.svg'></img>{new Date(item.posted_at).toUTCString()}</p>
          </div>
        </div>
      )
      rows.push(comment)
    })
    return rows
  }

  render () {
    return (
      <div className='column'> {this.commentList(this.props.ids)} </div>
    )
  }
}

function mapStateToProps (state, ownprops) {
  return {
    comments: state.mainStore.comments
  }
}

export default connect(mapStateToProps)(CommentList)
