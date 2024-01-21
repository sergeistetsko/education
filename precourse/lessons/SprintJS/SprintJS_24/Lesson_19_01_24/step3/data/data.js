export const data = {
    title: 'Counter',
    count: 0
}

let callback = () => {}

function changeData() {
    data.count++
    callback()
}
setInterval(changeData, 1000)

export function setCallback(newCallback) {
    callback = newCallback
}