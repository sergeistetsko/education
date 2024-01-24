const button3 = document.querySelector('#button2')
const output = document.querySelector('#output')

button3.addEventListener('click', () => {
    const message = document.createElement('p')
    message.textContent = 'Кнопка 2 нажата!'
    output.appendChild(message)
})
