function bonusTime(salary, bonus) {
    let total = bonus ? salary * 10 : salary;
    return "\u00A3" + total.toString();
}
