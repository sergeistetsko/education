function squareSum(numbers) {
    return numbers.reduce((sum, n) => sum + Math.pow(n, 2), 0);
}