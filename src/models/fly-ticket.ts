import {observable} from 'mobx'
import {attr} from '../common/annotations/model'

namespace FlyTicket {
  export class Model {
    @attr()
    @observable
    id: number
    
    @attr()
    @observable
    from: string
    
    @attr()
    @observable
    to: string
    
    @attr()
    @observable
    way: string
    
    @attr()
    @observable
    departureTime: string
    
    @attr()
    @observable
    arrivalTime: string
    
    @attr()
    @observable
    airline: string
    
    @attr()
    @observable
    price: Price
    
    @attr()
    @observable
    remainingPlaces: number
  }
  
  export class Price {
    @attr()
    @observable
    value: number
  
    @attr()
    @observable
    currency: string
  }
  
  export class ModelList {
    @attr({type: Model, defaultValue: [], optional: true})
    @observable
    list: Model[]
    
    @attr()
    @observable
    totalCount: number
  }
  
  export interface Records {
    list: ModelList
  }
}

export default FlyTicket
