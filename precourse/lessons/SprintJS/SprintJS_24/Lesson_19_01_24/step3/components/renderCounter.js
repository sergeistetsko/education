import {Header} from './counter/header/Header.js'
import {Value} from './counter/value/Value.js'
import {Button} from './counter/buttons/Button.js'
import {increaseDataCount, decreaseDataCount} from '../data/data.js'

export function renderCounter(someData) {
    document.body.innerHTML = ''
    // Header, Value, Button
    document.body.append(Header(), Value(), Button('+', increaseDataCount), Button('-', decreaseDataCount))
}