function squareUp(n) {
    let result = [];
    for(let i = 1; i <= n; i++) {
        for(let j = n; j > 0; j--) {
            result.push(j <= i ? j : 0);
        }
    }
    return result;
}
