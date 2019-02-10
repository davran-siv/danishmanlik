import Todo from '../models/todo'
import Post from '../models/post'
import {Maybe} from '../common/types'
import FlyTicket from '../models/fly-ticket'

export interface TodoMapper {
  
  all: Todo.Model[]
  
  unfinishedTodoCount: number
  
  lastOne: Maybe<Todo.Model>
}

export interface PostMapper {
  
  postById: Post.Model | undefined
}

export interface FlyTicketMapper {
  
  all: FlyTicket.ModelList
  
}

export interface FlyTicket {
  id: number,
  from: string,
  to: string,
  way: string,
  departureTime: string,
  arrivalTime: string,
  airline: string,
  price: Price,
  remainingPlaces: number
}

export interface Price {
  value: number,
  currency: string
}
