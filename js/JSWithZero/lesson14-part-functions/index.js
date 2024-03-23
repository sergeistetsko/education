function makeTea(cups, tea) {
    console.log('Brewing ' + cups + ' cups of ' + tea)
}

// правильный вызов функции
makeTea(3, 'Earl Grey')

// недостающие аргументы функции
makeTea(3)

// 'лишние' аргументы функции
makeTea(3, 'Earl Grey', 42)

// аргументы переданы в неверном порядке
makeTea('Earl Grey', 42)

// функция без параметров
function barkAtTheMoon() {
    console.log('Woooooooo!')
}
barkAtTheMoon()