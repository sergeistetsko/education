const input = document.getElementById('myInput')
const button = document.getElementById('myButton')
const container = document.getElementById('container')

button.addEventListener('click', function () {
    const text = input.value
    const newElement = document.createElement('p')
    newElement.textContent = text
    container.appendChild(newElement)
    input.value = ''
})
