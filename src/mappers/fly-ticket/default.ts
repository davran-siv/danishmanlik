import {injectConst, mapper} from '../../common/annotations/common'
import {FlyTicketMapper} from '../index'
import {FlyTicketRecordStorage} from '../../storages'
import {computed} from 'mobx'
import FlyTicket from '../../models/fly-ticket'

@mapper
export default class DefaultFlyTicketMapper implements FlyTicketMapper {
  constructor(@injectConst('FlyTicketRecordStorage') protected store: FlyTicketRecordStorage) {
  
  }
  
  @computed
  get all(){
    return this.store.getWithDefault('list', {}, FlyTicket.ModelList)._
  }
}
