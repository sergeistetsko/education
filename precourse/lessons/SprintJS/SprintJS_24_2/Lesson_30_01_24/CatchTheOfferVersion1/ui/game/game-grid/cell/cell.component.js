import {data} from '../../../../data.js'
import {Offer} from './offer/offer.component.js'

export function Cell(x, y) {
    const cellElement = document.createElement('td')
    if (x === data.x && y === data.y) {
        cellElement.append(Offer())
    }
    return cellElement
}

