import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router' // browserHistory
import actions from './actions/actions'
import configureStore from './store/configureStore'
import routes from './routes'
import Newsfeed from './api/newsfeed'
import Comments from './api/comments'
import testAPI from './api/_test'
import catchAll from './utils/catch_all'

//testAPI()

const store = configureStore()
console.log('store log', store)
window.storeDebug = store.getState() // FIXME: disable in production

// instanciate store
Newsfeed.getNewsfeed()
  .catch(catchAll)
  .then((res) => {
    store.dispatch(actions.loadNewsfeedSuccesful(res.data.messages))
  })
  .catch(catchAll)

Comments.all()
  .catch(catchAll)
  .then((res) => {
    store.dispatch(actions.getCommentsSuccesful(res.data.comments))
  })
  .catch(catchAll)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('.container')
)
