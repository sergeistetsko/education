const button4 = document.querySelector('#button4')
const output = document.querySelector('#output')

button4.addEventListener('click', () => {
    const message = document.createElement('p')
    message.textContent = 'Случайное число: ' + Math.floor(Math.random() * 11)
    output.appendChild(message)
})
