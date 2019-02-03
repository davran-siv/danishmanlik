import {observable} from 'mobx'
import {attr} from '../common/annotations/model'

namespace FlyTicket {
  export class Model {
    @attr()
    @observable
    id: string

    @attr()
    @observable
    question: string

    @attr()
    @observable
    answer: string

    @attr()
    @observable
    language: string
  }
}

export default FlyTicket
