String.prototype.toAlternatingCase = function () {
    let newStr = '';
    for (let i = 0; i < this.length; i++) {
        let char = this[i];
        if (char === char.toUpperCase()) {
            newStr += char.toLowerCase();
        } else {
            newStr += char.toUpperCase();
        }
    }
    return newStr;
}
