import {data, subscriber} from './data/data.js'
import {Todolist} from './components/todolist/todolist.component.js'

subscriber(refreshUI)

function refreshUI() {
    const todolist = Todolist(data.todolist)

    const rootElement = document.getElementById('root')

    rootElement.innerHTML = ''

    rootElement.append(todolist)
}

refreshUI()