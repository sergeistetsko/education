function pisano(n){
    let a = 0, b = 1, c = a + b;
    for (let i = 0; i < n * n; i++) {
        c = (a + b) % n;
        a = b;
        b = c;
        if (a === 0 && b === 1) return i + 1;
    }
}