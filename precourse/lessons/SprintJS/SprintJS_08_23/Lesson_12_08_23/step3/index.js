const button3 = document.querySelector('#button-3')
const output = document.querySelector('#output')
button3.addEventListener('click', () => {
    const boxForMessage =  document.createElement('p')
    boxForMessage.textContent = 'Кнопка 3 нажата!'
    output.appendChild(boxForMessage)
})
