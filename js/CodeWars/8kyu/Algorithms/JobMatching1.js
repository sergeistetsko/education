function match(candidate, job) {
    // Проверка наличия минимальной зарплаты кандидата и максимальной зарплаты работы
    if (!candidate.minSalary || !job.maxSalary) {
        throw new Error("Минимальная зарплата кандидата или максимальная зарплата работы не указана.");
    }

    // Вычисление минимальной зарплаты кандидата с учетом 10% "зазора"
    let minSalary = candidate.minSalary * 0.9;

    // Проверка, подходит ли работа кандидату
    return minSalary <= job.maxSalary;
}