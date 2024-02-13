function sc(floor){
    if (floor <= 1) {
        let voice = ''
        return voice
    }
    if (floor > 1 && floor <= 6) {
        let voice = ''
        while (floor > 1) {
            voice += 'Aa~ '
            floor--
        }
        return voice + 'Pa! Aa!'
    } else {
        let voice = ''
        while (floor > 1) {
            voice += 'Aa~ '
            floor--
        }
        return voice + 'Pa!'
    }
}
