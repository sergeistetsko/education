const button4 = document.querySelector('#button-4')
const output = document.querySelector('#output')
button4.addEventListener('click', () => {
    const boxForMessage =  document.createElement('p')
    boxForMessage.textContent = 'Случайное число: ' + Math.floor(Math.random() * 11)
    output.appendChild(boxForMessage)
})
