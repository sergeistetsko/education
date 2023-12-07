function getAverage(marks){
    let sum = marks.reduce((a, b) => a + b, 0);
    return Math.floor(sum / marks.length);
}