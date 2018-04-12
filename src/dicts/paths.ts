import {configuration} from '../configs/index'

const base = (rest: string) => `${configuration.remoteApi}/${rest}`

export default class paths {
  static Post = class {
    static byId = (postId: number) => base(`posts/${postId}`)
    static all = base('posts')
  }
  
  static FlyTicket = class {
    static byId = (flyTicketId: number) => base(`fly-tickets/${flyTicketId}`)
    static all = base('fly-tickets')
  }
  
}
