Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    var arr = this; // this refers to the array

    for(var i = 0; i < arr.length; i++) {
        if(callback.call(this, arr[i], i, arr)) {
            newArray.push(arr[i]);
        }
    }

    // Only change code above this line
    return newArray;
};
