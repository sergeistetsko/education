const flip = (t, columns) => {
    if (t === 'R') {
        return columns.sort((a, b) => a - b);
    } else if (t === 'L') {
        return columns.sort((a, b) => b - a);
    }
}