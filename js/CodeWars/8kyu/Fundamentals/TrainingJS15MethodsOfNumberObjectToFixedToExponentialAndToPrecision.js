function howManySmaller(arr, n) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        let num = parseFloat(arr[i].toFixed(2));
        if(num < n) {
            count++;
        }
    }
    return count;
}

