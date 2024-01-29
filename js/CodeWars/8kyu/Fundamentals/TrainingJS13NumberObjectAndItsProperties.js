function whatNumberIsIt(n){
    switch (true) {
        case (n === Number.MAX_VALUE):
            return "Input number is Number.MAX_VALUE";
        case (n === Number.MIN_VALUE):
            return "Input number is Number.MIN_VALUE";
        case (isNaN(n)):
            return "Input number is Number.NaN";
        case (n === Number.NEGATIVE_INFINITY):
            return "Input number is Number.NEGATIVE_INFINITY";
        case (n === Number.POSITIVE_INFINITY):
            return "Input number is Number.POSITIVE_INFINITY";
        default:
            return "Input number is " + n;
    }
}
