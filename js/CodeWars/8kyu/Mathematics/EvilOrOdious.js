function evil(n) {
    // Convert the number to binary and count the number of 1's
    var count = n.toString(2).split('1').length - 1;

    // If the count is even, the number is Evil
    if (count % 2 === 0) {
        return "It's Evil!";
    }

    // If the count is odd, the number is Odious
    else {
        return "It's Odious!";
    }
}
