let balance = 100;

// ------------

document.write('START', '<br>');

const productPrice1 = prompt('How much does product cost?');

if (balance >= productPrice1) {
    document.write('Product purchased');
} else {
    document.write('Not enough money');
}
document.write('<br>','END');