let balance = 100;

// ------------

document.write('START', '<br>');

const productPriceString1 = prompt('How much does product cost?');
const productPrice1 = window.Number(productPriceString1);

if (balance >= productPriceString1) {
    document.write('Product purchased');
} else {
    document.write('Not enough money');
}
document.write('<br>','END');