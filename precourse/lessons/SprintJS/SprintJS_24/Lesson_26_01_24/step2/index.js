import {data, subscribe} from './data/data.js'
import {Todolist} from './components/todolist.js'

function refreshUI(){
    const rootElement = document.getElementById('root')
    rootElement.innerHTML = ''
    const todolistElement = Todolist(data)
    rootElement.append(todolistElement)
}
refreshUI()
subscribe(refreshUI)