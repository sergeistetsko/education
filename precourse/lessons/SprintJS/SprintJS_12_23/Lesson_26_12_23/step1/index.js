import {data} from './data/data.js'
import {Todolist} from './components/todolist/todolist.component.js'

const todolist = Todolist(data.todolist)

const rootElement = document.getElementById('root')
rootElement.append(todolist)