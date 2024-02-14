import {data, restart} from '../../../data.js'

export function Win() {
    const element = document.createElement('div')

    element.append(`You WIN, points: ${data.catchPoints} miss: ${data.missPoints}`)

    const restartButton = RestartButton()
    element.append(restartButton)

    return element
}

export function RestartButton() {
    const element = document.createElement('button')
    element.innerHTML = 'Restart'
    element.addEventListener('click', () => {
        restart()
    })
    return element
}