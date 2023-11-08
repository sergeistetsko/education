console.log('hello, it-incubator');
document.write('<h1>', 'Hello, world!', '</h1>');

// data

let name = 'it-incubator';
let graduatesCount = 2000;
let areYouChampion = true;

// render

document.write('<h1>', name, '</h1>');
document.write('<input type="number" value="' + graduatesCount + '">');
document.write('<input type="checkbox"', areYouChampion ? ' checked ': '', '>');