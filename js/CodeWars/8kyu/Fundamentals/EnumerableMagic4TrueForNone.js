function none(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i])) {
            return false;
        }
    }
    return true;
}
