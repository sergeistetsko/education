function amIWilson(p) {
    function factorial(n) {
        var result = 1;
        for (var i = 2; i <= n; i++) {
            result = (result * i) % (p * p);  // Take modulus to avoid large numbers
        }
        return result;
    }

    return (factorial(p - 1) + 1) % (p * p) === 0;
}
