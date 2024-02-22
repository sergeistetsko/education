function tripleTrouble(one, two, three){
    function arrayFromString(string) {
        return string.split('')
    }
    let oneArray = arrayFromString(one)
    let twoArray = arrayFromString(two)
    let threeArray = arrayFromString(three)

    let newArray = []

    for (let i = 0; i < oneArray.length; i++) {
        newArray.push(oneArray[i] + twoArray[i] + threeArray[i])
    }

    return newArray.join('')
}