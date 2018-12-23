import * as React from 'react'
import './index.scss'
import i18n from '../../../common/translate'
import FlyTicket from '../../../models/fly-ticket'
import LinkTo from '../../ui/common/link-to'
import Table from '../table'
import Moment from 'react-moment'
import { FlyTicketService } from '../../../services'
import { instanceRegistry } from '../../../common/annotations/common'
import { FlyTicketMapper } from '../../../mappers'
import { observer } from 'mobx-react'

interface Props {
  history?: History
  location?: any
  match?: any
  flyTickets: FlyTicket.Model[]
}

class FlyTicketsTable extends React.Component<Props, {}> {
  render() {


    return (
      <div className='fly-tickets-table'>
        <Table data={this.props.flyTickets} columns={tableColumns}/>
      </div>
    )
  }
}

interface ContainerProps {
  lightVersion?: boolean
}

@observer
export default class FlyTicketsTableContainer extends React.Component<ContainerProps, {}> {
  private flyTicketService: FlyTicketService = instanceRegistry.get('FlyTicketService')
  private flyTicketMapper: FlyTicketMapper = instanceRegistry.get('FlyTicketMapper')

  componentWillMount() {
    this.flyTicketService.getAll()
  }

  render() {
    const allFlyTickets = this.flyTicketMapper.all.list.map(it => ({
      id: it.id,
      from: it.from,
      to: it.to,
      way: it.way,
      departureTime: it.departureTime,
      arrivalTime: it.arrivalTime,
      airline: it.airline,
      price: it.price,
      remainingPlaces: it.remainingPlaces
    }))
    return (
      <div>
        <FlyTicketsTable flyTickets={allFlyTickets}/>
      </div>
    )
  }
}


const tableColumns = [
  {
    Header: 'Откуда',
    accessor: 'from'
  },
  {
    Header: 'Куда',
    accessor: 'to'
  },
  {
    Header: 'Путь',
    accessor: 'way'
  },
  {
    Header: 'Время отлета',
    id: 'departureTime',
    accessor: (d: string) => <Moment format='DD.MM.YYYY hh:mm'>{d}</Moment>
  },
  {
    Header: 'Время прилета',
    id: 'arrivalTime',
    accessor: (d: string) => <Moment format='DD.MM.YYYY hh:mm'>{d}</Moment>
  },
  {
    Header: 'Авиалиния',
    accessor: 'airline'
  },
  {
    Header: 'Цена',
    id: 'price',
    accessor: (d: FlyTicket.Model) => `${d.price.value} ${d.price.currency}`
  },
  {
    Header: 'Купить',
    id: 'remainingPlaces',
    accessor: (d: FlyTicket.Model) => (d.remainingPlaces > 0) ? <LinkTo to=''>Уточнить</LinkTo> :
      <LinkTo to=''>Уточнить</LinkTo>
  }
]
