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
        <tr key={`item_rec_${Math.floor((Math.random() * 10000) + 1)}`}>
          <td><img src={item.author.avatar}></img> </td>
          <td>
            <p><strong>{item.author.display_name}</strong></p>
            <p className='comment-body' dangerouslySetInnerHTML={{__html: item.body}}></p>
            <p>{new Date(item.posted_at).toUTCString()}</p>
          </td>
        </tr>
      )
      rows.push(comment)
    })
    return rows
  }

  render () {
    return (
      <td> {this.commentList(this.props.ids)} </td>

    )
  }
}

function mapStateToProps (state, ownprops) {
  return {
    comments: state.mainStore.comments
  }
}

export default connect(mapStateToProps)(CommentList)
