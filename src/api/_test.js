import base from './base'
import Newsfeed from './newsfeed'
import Comments from './comments'
import catchAll from '../utils/catch_all'

const DELAY = 0

const testAPI = () => {
  console.log('################### DATA MODELS ##################')

Newsfeed.getNewsfeed()
.catch(catchAll)
.then((res) => {
  console.log('Newsfeed:', res)
})
.catch(catchAll)

Comments.all()
.catch(catchAll)
.then((res) => {
  console.log('Comment:', res)
})
.catch(catchAll)
}

export default testAPI
