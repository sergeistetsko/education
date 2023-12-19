// Отложенное выполнение кода и setTimeout
let timeUp = function() {
    console.log('Время вышло!')
}
let timeoutId0 = setTimeout(timeUp, 3000)
clearTimeout(timeoutId0)

// Отмена действия таймера
let doHomeworkAlarm = function() {
    console.log('Эй! Пора делать домашку!')
}
let timeoutId = setTimeout(doHomeworkAlarm, 10000)
clearTimeout(timeoutId)

// Многократный запуск кода и setInterval
let counter =  0

let printMessage = function () {
    console.log('Ты смотришь в консоль уже ' + counter + ' сек')
    counter = counter + 5
}

let intervalId = setInterval(printMessage, 5000)
clearInterval(intervalId)

// Анимация элементов с помощью setInterval
let leftOffset = 0;
let moveHeading = function () {
    $('#heading').offset({ left: leftOffset })
    leftOffset = leftOffset + 1
    if (leftOffset > 200) {
        leftOffset = 0
    }
}
let intervalId0 = setInterval(moveHeading, 30)
clearInterval(intervalId0)

// Реакция на действия пользователя
// Реакция на клики
let clickHandler = function (event) {
    console.log('Клик! ' + event.pageX + ' ' + event.pageY)
}
$('h1').click(clickHandler)

// Событие mousemove
$('html').mousemove(function (event) {
    $('#heading').offset(
        {
            left: event.pageX,
            top: event.pageY
        })
})
