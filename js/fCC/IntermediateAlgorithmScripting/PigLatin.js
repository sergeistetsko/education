function translatePigLatin(str) {
    return str
        .split(' ')
        .map(word => {
            let vowelIndex = word.search(/[aeiou]/); // Find the index of the first vowel in the word
            if (vowelIndex === 0) {
                // If the word begins with a vowel, add 'way' at the end
                return word + 'way';
            } else {
                // If the word begins with a consonant, move the first consonant or consonant cluster to the end and add 'ay'
                return word.substring(vowelIndex) + word.substring(0, vowelIndex) + 'ay';
            }
        })
        .join(' ');
}


translatePigLatin("consonant");