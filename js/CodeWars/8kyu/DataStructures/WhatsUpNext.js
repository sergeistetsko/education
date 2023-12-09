function nextItem(seq, item) {
    let found = false;
    for (let i of seq) {
        if (found) return i;
        if (i === item) found = true;
    }
    return undefined;
}