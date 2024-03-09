function partlist(arr) {
    let result = [];
    for(let i = 1; i < arr.length; i++) {
        let firstPart = arr.slice(0, i).join(' ');
        let secondPart = arr.slice(i).join(' ');
        result.push([firstPart, secondPart]);
    }
    return result;
}
