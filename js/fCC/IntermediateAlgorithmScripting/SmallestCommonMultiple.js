function smallestCommons(arr) {
    // Sort the array in ascending order
    arr.sort(function(a, b) {
        return a - b;
    });

    // Create an array with all numbers between the two numbers
    var range = [];
    for (var i = arr[0]; i <= arr[1]; i++) {
        range.push(i);
    }

    // Function to find the least common multiple of two numbers
    var gcd = function(a, b) {
        return !b ? a : gcd(b, a % b);
    };

    var lcm = function(a, b) {
        return (a * b) / gcd(a, b);
    };

    // Apply the lcm function to all numbers in the range
    return range.reduce(function(previousValue, currentValue) {
        return lcm(previousValue, currentValue);
    });
}

smallestCommons([1,5]);