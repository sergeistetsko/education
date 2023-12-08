function stringy(size) {
    let str = '';
    for(let i = 0; i < size; i++) {
        // Если i четное, добавляем 1, иначе добавляем 0
        str += i % 2 === 0 ? '1' : '0';
    }
    return str;
}