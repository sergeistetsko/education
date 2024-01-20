export function Value(someValue) {
    const valueElement = document.createElement('div')
    valueElement.append(someValue)
    return valueElement
}