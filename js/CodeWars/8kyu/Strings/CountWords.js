function countWords(str) {
    let words = str.trim().split(/\s+|[^a-zA-Z0-9-']/)
    words = words.filter(function(word) {
        return word !== ''
    })
    return words.length
}