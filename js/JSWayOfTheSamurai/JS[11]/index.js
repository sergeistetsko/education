let myConsole = {
    name: 'Sergey',
    age: 30
};
window.alert(myConsole.age);
myConsole.age = 31;
window.alert(myConsole.age);

const laptop1 = {
    name: 'zenbook',
    manufacturer: {
        title: 'ASUS',
        factoriesCount: 10,
        factoryAddress: 'China, JohueLee 12'
    },
    price: 1000
}
const laptop2 = {
    name: 'macbook',
    manufacturer: 'APPLE',
    price: 3000
}
const moneyTransfering = {
    from: 'Sergey',
    to: 'Dima',
    amount: 10
}
console.log(laptop1.manufacturer.factoriesCount);