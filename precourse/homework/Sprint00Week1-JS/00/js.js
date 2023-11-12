// console.log('hello, it-incubator');
// document.write('<h1>', 'hello, it-incubator', '</h1>');
/*
//data

let name = 'it-incubator';
let graduatesCount = 2000;
let areYouChampion = true;

//ui program, render

document.write('<h1>', name, '</h1>');
document.write(`<input type="number" value="${graduatesCount}">`);
document.write('<input type="checkbox"', areYouChampion ? ' checked ': '', '>');*/

let student = {
    info: {
        firstName: 'Ivan',
        lastName: 'Ivanov'
    },
    address: {
        country: 'France',
        city: 'Paris',
    }
}

document.write(student.info.firstName);
document.write(student.info.lastName);
document.write(student.address.country);
document.write(student.address.city);

