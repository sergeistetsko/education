function dBScale(intensity) {
    // Порог слышимости человека в ваттах на квадратный метр
    const thresholdOfHearing = Math.pow(10, -12);

    // Вычисление громкости звуковой волны в децибелах
    let decibels = 10 * Math.log10(intensity / thresholdOfHearing);

    // Округление до ближайшего целого числа
    decibels = Math.round(decibels);

    return decibels;
}