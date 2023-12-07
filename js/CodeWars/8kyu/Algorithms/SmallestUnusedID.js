function nextId(ids) {
    // Проверка, является ли входное значение массивом
    if (!Array.isArray(ids)) {
        return "Ошибка: введенное значение не является массивом.";
    }
    // Проверка, содержит ли массив только числа
    for (let i = 0; i < ids.length; i++) {
        if (typeof ids[i] !== 'number') {
            return "Ошибка: массив содержит нечисловые значения.";
        }
    }
    let idSet = new Set(ids);
    let count = 0;
    while (idSet.has(count)) {
        count++;
    }
    return count;
}