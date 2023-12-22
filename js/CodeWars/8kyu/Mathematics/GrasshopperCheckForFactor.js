function checkForFactor (base, factor) {
    if (base < 0 || factor <= 0) {
        return "Invalid input. Base must be non-negative and factor must be positive.";
    }
    return base % factor === 0;
}