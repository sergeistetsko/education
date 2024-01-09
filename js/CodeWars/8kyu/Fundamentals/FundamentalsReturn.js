function add(a, b) {
    return a + b;
}

function subt(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Error: Division by zero is not allowed.';
    }
}

function mod(a, b) {
    if (b !== 0) {
        return a % b;
    } else {
        return 'Error: Division by zero is not allowed.';
    }
}

function exponent(a, b) {
    return Math.pow(a, b);
}
