function converter(mpg) {
    const milesToKilometers = 1.609344;
    const gallonsToLiters = 4.54609188;
    let kpl = mpg * (milesToKilometers / gallonsToLiters);
    return Math.round(kpl * 100) / 100;
}
