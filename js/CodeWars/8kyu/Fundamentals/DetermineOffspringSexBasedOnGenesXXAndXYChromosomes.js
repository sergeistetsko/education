function chromosomeCheck(sperm) {
    if (sperm === 'XX') {
        return "Congratulations! You're going to have a daughter.";
    } else if (sperm === 'XY') {
        return "Congratulations! You're going to have a son.";
    } else {
        return "Invalid input. Please enter either 'XX' or 'XY'.";
    }
}

