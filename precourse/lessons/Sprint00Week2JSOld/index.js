function showMe() {
    console.log("Hellow!");
}
showMe()
function showMeNew(value) {
    console.log(value);
}
showMeNew("Hellow!")
function showMessage2(val = "Hellow!") {
    console.log(val)
}
showMessage2()
function showMessage3(val = "Hellow!") {
    console.log(val)
}
showMessage3('By!')

// Стрелочная функция
const newSum = (a, b) => {
    console.log(a + b)
}
newSum(3, 4)
const newSum2 = (a, b) => console.log(a + b)

// Задание 1
const isPositive = (num) => {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
};
isPositive(2);

// Задание 2
function giveMeResult(dayOfWeek) {
    if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        dayOfWeek = "dayOff";
    } else {
        dayOfWeek = "weekday";
    }

    switch (dayOfWeek) {
        case "weekday":
            console.log("Будний день");
            break;
        case "dayOff":
            console.log("Выходной день");
            break;
        default:
            console.log("Некорректное значение дня недели");
    }
}



