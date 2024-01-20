export function Header(someTitle) {
    const titleElement = document.createElement('h1')
    titleElement.append(someTitle)
    return titleElement
}