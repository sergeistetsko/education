function findSpaceship(map) {
    if (typeof map === 'undefined' || map === null) {
        return "Spaceship lost forever.";
    }

    const lines = map.split('\n');
    for (let y = lines.length - 1; y >= 0; y--) {
        let x = lines[y].indexOf('X');
        if (x !== -1) {
            return [x, lines.length - 1 - y];
        }
    }
    return "Spaceship lost forever.";
}