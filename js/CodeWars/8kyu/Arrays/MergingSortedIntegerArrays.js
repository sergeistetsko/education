function mergeArrays(array1, array2) {
    let merged = [...array1, ...array2];
    let uniqueSorted = Array.from(new Set(merged)).sort((a, b) => a - b);
    return uniqueSorted;
}