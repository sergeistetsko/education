function sumPositive(numbers) {
    return numbers.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
}