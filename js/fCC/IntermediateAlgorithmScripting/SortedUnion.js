function uniteUnique() {
    let arrays = Array.prototype.slice.call(arguments);
    let result = [];

    arrays.forEach(function(array) {
        array.forEach(function(item) {
            if (result.indexOf(item) === -1) {
                result.push(item);
            }
        });
    });

    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);