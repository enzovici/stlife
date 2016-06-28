import React, { PropTypes } from 'react'
import ReactDOM, {findDOMNode} from 'react-dom'
import { connect } from 'react-redux'
import _ from 'underscore'
import CommentList from '../comments/comment-list'
import {Accordion} from 'react-bootstrap'
import {Panel} from 'react-bootstrap'

class Newsfeed extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.feedList = this.feedList.bind(this)
    this.getCommentsIds = this.getCommentsIds.bind(this)
  }

  getCommentsIds(comments){
    let ids =[]
    comments.forEach( (comment) => {
      ids.push(comment)
    })
    return ids
  }

  feedList(news) {
    let rows = []
    news.forEach((item) => {
      let news= (
        <div className='newsfeed'>
          <div className="row" key={`item_rec_${item.id}`}>
            <div className='column'>
              <img className='avatar' src={item.author.avatar}></img><p className='author-name'>{item.author.display_name}</p>
              <p className='votes'>
                <img src='/img/up.svg'></img>{item.upvotes}
                  <img src='img/down.svg'></img>{item.downvotes}
                  </p>
                </div>
                <div className='column column-80 column-offset-0 body-news'>
                  <p className='news-subject'>Subject: <strong>{item.subject}</strong> </p>
                  <p className='news-body' dangerouslySetInnerHTML={{__html: item.body}}></p>
                  <p className='date'><img src='/img/loc.svg'></img>{item.author.nearest_area.name}   <img src='img/cal.svg'></img>{new Date(item.posted_at).toUTCString()}</p>
                </div>
                <div className='column place'></div>
              </div>
              <div className='comments'>
                <CommentList ids={this.getCommentsIds(item.comments)} />
              </div>
            </div>
          )
          rows.push(news)
        })
        return rows
      }

      render () {
        let newsfeedItems = this.props.newsfeed
        return (
          <div id='comment'>
            <div className='column'>
              <h3>Newsfeed</h3>
              {this.feedList(newsfeedItems)}
            </div>
          </div>
        )
      }
    }

    function mapStateToProps (state, ownprops) {
      return {
        newsfeed: state.mainStore.newsfeed,
        comments: state.mainStore.comments
      }
    }

    export default connect(mapStateToProps)(Newsfeed)
