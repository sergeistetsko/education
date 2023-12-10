function stairsIn20(stairs) {
    let total = 0;
    for(let i = 0; i < stairs.length; i++) {
        for(let j = 0; j < stairs[i].length; j++) {
            total += stairs[i][j];
        }
    }
    return total * 20;
}