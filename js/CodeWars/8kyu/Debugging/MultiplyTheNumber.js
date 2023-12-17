function multiply(number) {
    let numDigits = number.toString().length
    if (number < 0) numDigits--
    return number * Math.pow(5, numDigits)
}
