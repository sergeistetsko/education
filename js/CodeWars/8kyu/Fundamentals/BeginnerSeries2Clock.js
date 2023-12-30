function past(h, m, s) {
    // Check if the input constraints are satisfied
    if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) {
        return "Invalid input. Please ensure 0 <= h <= 23, 0 <= m <= 59, and 0 <= s <= 59.";
    }

    // Calculate the time since midnight in milliseconds
    var milliseconds = ((h * 60 * 60) + (m * 60) + s) * 1000;

    return milliseconds;
}
