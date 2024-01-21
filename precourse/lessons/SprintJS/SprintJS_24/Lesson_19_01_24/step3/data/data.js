export const data = {
    title: 'Counter',
    count: 0
}

let callback = () => {}

export function increaseDataCount() {
    data.count++
    callback()
}
export function decreaseDataCount() {
    data.count--
    callback()
}

export function setChangeDataCallback(newCallback) {
    callback = newCallback
}