import {Header} from './counter/header/Header.js'
import {Value} from './counter/value/Value.js'
import {Button} from './counter/button/Button.js'

export function renderCounter(someData) {
    document.body.innerHTML = ''
    // Header, Value, Button
    document.body.append(Header(someData.title), Value(someData.count), Button())
}