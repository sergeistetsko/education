function testEven(n) {
    if (n % 1 !== 0) {
        return false; // n is a float with a non-zero decimal part
    } else {
        return n % 2 === 0; // n is an integer, check if it's even
    }
}
