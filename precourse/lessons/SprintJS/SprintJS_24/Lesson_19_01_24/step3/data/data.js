export const data = {
    title: 'Counter',
    count: 0
}

let callback = () => {}

function changeData() {
    data.count++
    // renderCounter(data)
    callback()
}
setInterval(changeData, 1000)

export function setCallback(newCallback) {
    callback = newCallback
}