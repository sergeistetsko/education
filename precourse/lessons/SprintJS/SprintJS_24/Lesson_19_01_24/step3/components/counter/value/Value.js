import {data} from '../../../data/data.js'

export function Value() {
    const valueElement = document.createElement('div')
    valueElement.append(data.count)
    return valueElement
}