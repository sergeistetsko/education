function isPythagoreanTriple([n1, n2, n3]) {
    let arr = [n1, n2, n3].sort((a, b) => a - b);
    return arr[0]*arr[0] + arr[1]*arr[1] === arr[2]*arr[2];
}