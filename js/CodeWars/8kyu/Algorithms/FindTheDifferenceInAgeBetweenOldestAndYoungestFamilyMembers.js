function differenceInAges(ages) {
    // Проверка на пустой массив
    if (ages.length === 0) {
        return "Массив пуст. Пожалуйста, предоставьте массив с возрастами.";
    }

    let youngest = Math.min(...ages);
    let oldest = Math.max(...ages);
    let difference = oldest - youngest;
    return [youngest, oldest, difference];
}