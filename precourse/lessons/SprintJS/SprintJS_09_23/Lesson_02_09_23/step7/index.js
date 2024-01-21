const numbers = [
    [1, 2, 3, 4, 5],
    [10, 20, 30, 40, 50],
    [100, 200, 300, 400, 500],
];

numbers.map(row => console.log(row))

numbers.map(row => {
    row.map(number => console.log(number));
});

