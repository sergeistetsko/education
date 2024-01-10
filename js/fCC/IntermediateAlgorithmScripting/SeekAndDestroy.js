function destroyer(arr, ...args) {
    return arr.filter(element => !args.includes(element));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);