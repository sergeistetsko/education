export const data = {
    clientsCount: 0,
}
let callback = function () {}
setInterval(function () {
    data.clientsCount = data.clientsCount += 2;
    callback()
}, 1000)
export function setCallback(newCallback) {
    callback = newCallback
}
export function increaseClientCount() {
    data.clientsCount++
    callback()
}