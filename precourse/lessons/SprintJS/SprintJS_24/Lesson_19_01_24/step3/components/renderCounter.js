import {Header} from './counter/header/Header.js'
import {Value} from './counter/value/Value.js'
import {ButtonInc} from './counter/buttons/ButtonInc.js'
import {ButtonDec} from './counter/buttons/ButtonDec.js'

export function renderCounter(someData) {
    document.body.innerHTML = ''
    // Header, Value, Button
    document.body.append(Header(), Value(), ButtonInc(), ButtonDec())
}