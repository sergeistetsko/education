function squaresOnly(array) {
    return array.filter(x => Math.sqrt(x) % 1 === 0);
}
