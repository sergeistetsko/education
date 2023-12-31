function shortenToDate(dateString) {
    // Split the dateString by comma
    let parts = dateString.split(',');

    // Return the first part which is "Weekday Month Day"
    return parts[0].trim();
}
