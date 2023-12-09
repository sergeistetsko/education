function slope([a, b, c, d]) {
    if (a === c) {
        return 'undefined';
    } else {
        return String((d - b) / (c - a));
    }
}