function dropElements(arr, func) {
    // While the function returns false, remove elements from the array
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }

    // Return the remaining array
    return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });