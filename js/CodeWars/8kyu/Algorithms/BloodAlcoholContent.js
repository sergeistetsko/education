function bloodAlcoholContent(drinks, weight, sex, time) {
    // Константы для распределения алкоголя
    const r = (sex === "male") ? 0.73 : 0.66;
    // Общее количество употребленного алкоголя в унциях (oz)
    const A = drinks.ounces * drinks.abv;
    // Вычисляем и возвращаем BAC до 4 десятичных знаков
    return Number(Math.max(((A * 5.14 / weight * r) - 0.015 * time), 0).toFixed(4));
}