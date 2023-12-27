function noBoringZeros(n) {
    let str = n.toString()
    while (str.endsWith('0')) {
        str = str.slice(0, -1)
    }
    return Number(str)
}
