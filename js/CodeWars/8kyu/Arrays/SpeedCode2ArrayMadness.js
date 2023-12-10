function arrayMadness(a, b) {
    let sumOfSquares = a.reduce((sum, val) => sum + val ** 2, 0);
    let sumOfCubes = b.reduce((sum, val) => sum + val ** 3, 0);
    return sumOfSquares > sumOfCubes;
}