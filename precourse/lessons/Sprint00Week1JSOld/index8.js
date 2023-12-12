const dayOfWeek = 'Thursday'

switch (dayOfWeek) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('Будний день')
        break
    case 'Saturday':
    case 'Sunday':
        console.log('Выходной день')
        break
    default:
        console.log('Некоректное значение дня недели')
}