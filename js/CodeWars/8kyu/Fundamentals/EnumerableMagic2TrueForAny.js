function any(array, func) {
    for(let i = 0; i < array.length; i++) {
        if(func(array[i])) {
            return true;
        }
    }
    return false;
}
