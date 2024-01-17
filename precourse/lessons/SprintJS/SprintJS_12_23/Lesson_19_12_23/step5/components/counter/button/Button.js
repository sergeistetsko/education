import {increaseClientCount} from "../../../data/data.js";
export function Button() {
    const element = document.createElement('button')
    element.append('+')
    element.addEventListener('click', incrementData)
    return element
}
function incrementData() {
    increaseClientCount()
}