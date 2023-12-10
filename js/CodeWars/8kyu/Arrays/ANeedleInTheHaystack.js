function findNeedle(haystack) {
    let index = haystack.indexOf("needle");
    if (index === -1) {
        return "No needle found in the haystack.";
    } else {
        return "found the needle at position " + index;
    }
}