// Урок 1 - Оператор разделения на свойства-----------------------------------------------------------------------------

// ...

const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(redButton)
    
// если свойство с таким именем существует, то его значение будет перезаписано

// также можно объединить два объекта

const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button2 = {
    ...buttonInfo,
    ...buttonStyle
}

console.table(button2)