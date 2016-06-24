import store  from '../store/configureStore'
import Newsfeed from '../api/newsfeed'
import Comments from '../api/comments'
import catchAll from '../utils/catch_all'

const actions = {

  loadNewsfeedSuccesful : (newsfeed) => {
    return { type: 'LOAD_NEWSFEED_SUCCESFUL' , newsfeed }
  },
  getCommentsSuccesful : (comments) => {
    return { type: 'GET_COMMENTS_SUCCESFUL' , comments }
  }
}

//THUNKS
export function updateNewsfeed() {
  return function (dispatch) {
    return Newsfeed.getNewsfeed()
    .then((newsfeed) => {
      dispatch(actions.loadNewsfeedSuccesful(newsfeed))
    })
  }
}

export default actions
