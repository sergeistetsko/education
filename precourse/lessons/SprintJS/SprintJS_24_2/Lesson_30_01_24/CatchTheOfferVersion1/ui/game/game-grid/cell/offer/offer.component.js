import {catchOffer} from '../../../../../data.js'

export function Offer() {
    const element = document.createElement('img')

    element.src = './assets/images/offer.svg'

    function clickHandler() {
        catchOffer()
    }

    element.addEventListener('click', clickHandler)

    return element
}