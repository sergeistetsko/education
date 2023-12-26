function twoHighest(arr) {
    let uniqueValues = [...new Set(arr)]; // Remove duplicates
    uniqueValues.sort((a, b) => b - a); // Sort in descending order
    return uniqueValues.slice(0, 2); // Return the first two elements
}
