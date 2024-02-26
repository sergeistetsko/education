let login = prompt('Кто там ?')
let password

if (login === 'Админ') {
    password = prompt('Пароль ?')
    if (password === 'Я главный') {
        alert('Здравствуйте!')
    } else if (password === ('' || null)) {
        alert('Отменено')
    } else {
        alert('Неверный пароль')
    }
} else if (login === ('' || null)) {
    alert('Отменено')
} else {
    alert('Я вас не знаю')
}