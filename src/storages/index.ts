import Todo from '../models/todo'
import {RecordStorage} from '../common/storages/base'
import Post from '../models/post'
import FlyTicket from '../models/fly-ticket'

export interface TodoRecordStorage extends RecordStorage<Todo.Records> {
  newModel(): Todo.Model
  
  toggleTodo(todo: Todo.Model): this
  
  addNewToAllList(todo: Todo.Model): this
  
  getAll(): Todo.ModelList
}

export interface PostRecordStorage extends RecordStorage<Post.Records> {

}

export interface FlyTicketRecordStorage extends RecordStorage<FlyTicket.Records> {

}
