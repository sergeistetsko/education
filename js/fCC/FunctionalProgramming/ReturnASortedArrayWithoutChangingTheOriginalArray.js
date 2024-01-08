const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line
    let newArr = arr.slice();
    return newArr.sort((a, b) => a - b);
    // Only change code above this line
}

console.log(nonMutatingSort(globalArray)); // Output: [2, 3, 5, 6, 9]
console.log(globalArray); // Output: [5, 6, 3, 2, 9]
