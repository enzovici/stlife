const defaultState = {
  newsfeed: {},
  comments: []
}

const mainStore = (state = defaultState, action) => {
  console.log('ACTION:', action.type)
  switch (action.type) {
    case 'LOAD_NEWSFEED_SUCCESFUL':
      return Object.assign({}, state, {newsfeed: action.newsfeed})

    case 'GET_COMMENTS_SUCCESFUL':
      return Object.assign({}, state, {comments: action.comments})

    default:
      console.log(action, 'UNKNOWN ACTION')
      return state
  }
}

export default mainStore
