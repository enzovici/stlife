import api from './base'

class Newsfeed {

  static getNewsfeed() {
    return api.get(`/newsfeed.json`)
  }
}

export default Newsfeed
