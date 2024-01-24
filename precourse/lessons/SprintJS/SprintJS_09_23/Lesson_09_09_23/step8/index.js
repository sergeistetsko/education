const input = document.getElementById('myInput')
const button = document.getElementById('myButton')
const container = document.getElementById('container')

button.addEventListener('click', function () {
    const text = input.value
    const newWrapper = document.createElement('div')
    const newText = document.createElement('span')
    const newButton = document.createElement('button')
    newButton.innerHTML = 'Удалить запись'
    newText.textContent = text
    container.appendChild(newWrapper)
    newWrapper.appendChild(newText)
    newWrapper.appendChild(newButton)
    input.value = ''
})

function deleteButton () {
    container.lastChild.remove()
}

container.addEventListener('click', function (e) {
    e.target.parentElement.remove()
})