import api from './base'

export default class Comments {

  static all() {
    return api.get(`/comments.json`)
  }
}
