import {storage} from '../../common/annotations/common'
import {FlyTicketRecordStorage} from '../index'
import FlyTicket from '../../models/fly-ticket'
import DefaultRecordStorage from '../../common/storages/base/default'
import {action} from 'mobx'

@storage
export default class DefaultFlyTicketRecordStorage extends DefaultRecordStorage<FlyTicket.Records> implements FlyTicketRecordStorage {
}

