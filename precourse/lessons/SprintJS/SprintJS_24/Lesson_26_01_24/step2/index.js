import {data} from './data/data.js'
import {Todolist} from './components/todolist.js'

const rootElement = document.getElementById('root')
const todolistElement = Todolist(data)

rootElement.append(todolistElement)