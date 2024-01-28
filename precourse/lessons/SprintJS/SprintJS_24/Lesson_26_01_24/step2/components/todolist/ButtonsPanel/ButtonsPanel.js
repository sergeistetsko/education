export function ButtonsPanel() {
    const container = document.createElement('div')

    const addButtonElement = document.createElement('button')
    addButtonElement.append('+')
    container.append(addButtonElement)

    return container
}