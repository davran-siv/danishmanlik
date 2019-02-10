import {injectMethod, service} from '../../common/annotations/common'
import BaseService from '../../common/services/base/base'
import {FlyTicketService} from '../index'
import {Fetcher} from '../../fetchers'
import {FlyTicketRecordStorage} from '../../storages'

@service
export default class DefaultFlyTicketService extends BaseService implements FlyTicketService {
  
  private fetcher: Fetcher
  private store: FlyTicketRecordStorage
  
  @injectMethod('Fetcher')
  setFetcher(fetch: Fetcher) {
    this.fetcher = fetch
  }
  
  @injectMethod('FlyTicketRecordStorage')
  setStore(store: FlyTicketRecordStorage){
    this.store = store
  }
  
  async getAll() {
    // const allFlyTickets = await this.fetcher.get(paths.FlyTicket.all, undefined, FlyTicket.ModelList)
    
    //TODO Remove to fake rest api
    const allFlyTickets = {
      list: [
        {
          id: 1,
          from: 'Antalya',
          to: 'Almaty',
          way: 'OW',
          departureTime: 'Sun Mar 11 2018 15:04:38 GMT+0600',
          arrivalTime: 'Mon Mar 12 2018 14:48:45 GMT+0600',
          airline: 'Sunday Airlines',
          price: {
            value: 90.00,
            currency: 'USD'
          },
          remainingPlaces: 3
        },
        {
          id: 2,
          from: 'Antalya',
          to: 'Almaty',
          way: 'OW',
          departureTime: 'Sun Mar 11 2018 15:05:38 GMT+0600',
          arrivalTime: 'Mon Mar 12 2018 14:48:45 GMT+0600',
          airline: 'Sunday Airlines',
          price: {
            value: 120.00,
            currency: 'USD'
          },
          remainingPlaces: 0
        }
      ],
      totalCount: 2
    }
    this.store.set('list', allFlyTickets)
  }
  
}
