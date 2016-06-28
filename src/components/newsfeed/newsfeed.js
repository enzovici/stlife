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
    this.getNewsMarkup = this.getNewsMarkup.bind(this)
  }

  getCommentsIds(comments){
    let ids =[]
    comments.forEach( (comment) => {
      ids.push(comment)
    })
    return ids
  }

  getNewsMarkup(id){
    let item = _.where(this.props.newsfeed, {id: id})
    return item[0].body
  }

  feedList(news) {
    let rows = []
    news.forEach((item, _) => {
      let news= (
            <tr key={`item_rec_${item.id}`}>
              <td>
                <img className='avatar' src={item.author.avatar}></img><p className='author-name'>{item.author.display_name}</p>
                  <td className='votes'>
                    <img src='/img/up.svg'></img>{item.upvotes}
                    <img src='img/down.svg'></img>{item.downvotes}
                      <p>
                        <Accordion>
                            <Panel header="Collapsible Group Item #1" eventKey="1">
                              <CommentList ids={this.getCommentsIds(item.comments)} />
                            </Panel>
                        </Accordion>
                      </p>
                  </td>
              </td>
              <td class='body-news'>
                <p className='news-subject'>Subject:<strong>{item.subject}</strong> </p>
                <p className='news-body' dangerouslySetInnerHTML={{__html: this.getNewsMarkup(item.id)}}></p>
                <p className='date'><img src='/img/loc.svg'></img>{item.author.nearest_area.name}   <img src='img/cal.svg'></img>{new Date(item.posted_at).toUTCString()}</p>
              </td>
              <td className='place'></td>
          </tr>



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
        <table>
          <thead>
            <tr>
              Latest stories
            </tr>
          </thead>
          <tbody>
            {this.feedList(newsfeedItems)}
          </tbody>
        </table>
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
