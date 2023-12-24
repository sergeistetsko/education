function anyArrows(arrows) {
    for (let i = 0; i < arrows.length; i++) {
        if (arrows[i].damaged !== true) {
            return true;
        }
    }
    return false;
}
