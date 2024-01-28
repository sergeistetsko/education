function colorOf(r,g,b) {
    function color(colorElement) {
        let colorHex = colorElement.toString(16)
        if (colorHex.length === 1 && colorHex[0] < 10) {
            colorHex = '0' + colorHex
        } else if (colorHex.length === 1 && (colorHex === 'a' || colorHex === 'b' || colorHex === 'c' || colorHex === 'd' || colorHex === 'f')) {
            colorHex = '0' + colorHex
        } else {
            colorHex = colorHex
        }
        return colorHex
    }
    return  '#' + color(r) + color(g) + color(b)
}

