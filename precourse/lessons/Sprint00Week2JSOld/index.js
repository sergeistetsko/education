// examples
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
// examples
let prof = 'proger';
let age = 18


if (prof === 'proger' || age !== 18) {
    console.log('Success!');
}
if (prof === 'proger' && age !== 18) {
    console.log('Success!');
}

// Задание 3
const isInRange = (num) => {
    if ((num >= 10 && num <= 20) || num === 0 || num === 100) {
        return true;
    } else {
        return false;
    }
};

// examples
const user = {
    name: "Igor",
    age: 30
};

console.log(user.name);
user.name = 'Nastya'
console.log(user.name);

// const защищает от изменений только саму переменную user, а не её содержимое.
// const выдаст ошибку только если мы присвоим переменной другое значение: user=....

user.prof = 'proger'
console.log(user);

delete user.prof;
console.log(user);
console.log(user['name']); //обратиться можно через [но нужны ""]

//копирование Объектов
let user = { name: 'Igor' };
//let user2 = user;
let user2 = { ...user };
user.name = 'Nastya';
console.log(user);
console.log(user2);

let prep = {
    name: "Igor",
    sizes: {
        height: 177,
        weight: 80
    }
};

//let prep2 = { ...prep };
let prep2 = { ...prep, sizes: { ...prep.sizes } };
prep.name = 'Nastya';
prep.sizes.weight = 50;
console.log(prep);
console.log(prep2);

//Сборка мусора - удаление ссылки-приводит к удалению объекта

// Задание на проверку знаний
let prep = {
    name: "Igor",
    sizes: {
        height: 177,
        weight: 80
    }
};
function copyPrep(prep) {
    return {
        ...prep,
        sizes: { ...prep.sizes },
        IsMarried: true
    };
}





