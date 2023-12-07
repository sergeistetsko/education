function formatMoney(amount) {
    // Проверка, является ли входное значение числом
    if (typeof amount !== 'number') {
        return "Ошибка: введенное значение не является числом.";
    }

    return "$" + amount.toFixed(2);
}