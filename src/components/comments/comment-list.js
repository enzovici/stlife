import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import _ from 'underscore'

class CommentList extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.commentList = this.commentList.bind(this)
    this.getCommmentMarkup = this.getCommmentMarkup.bind(this)
  }

  getCommmentMarkup(id){
    let item = _.where (this.props.comments, {relative_id: id})
    console.log(item)
    if (item[0].body)
      return item[0].body
    else
      return 'no comments'
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
            <p className='comment-body' dangerouslySetInnerHTML={{__html: this.getCommmentMarkup(item.relative_id)}}></p>
            <p>{new Date(item.posted_at).toUTCString()}</p>
          </td>
        </tr>
      )
      rows.push(comment)
    })
    return rows
  }

  render () {
    let comments = this.props.comments
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
