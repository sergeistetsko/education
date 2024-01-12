function calculateTip(amount, rating) {
    let rate = {
        'terrible': 0.0,
        'poor': 0.05,
        'good': 0.1,
        'great': 0.15,
        'excellent': 0.2
    }[rating.toLowerCase()];

    return rate !== undefined ? Math.ceil(amount * rate) : "Rating not recognised";
}
