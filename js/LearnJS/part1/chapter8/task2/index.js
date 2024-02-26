let a = "" + 1 + 0
let b = "" - 1 + 0
let c = true + false
let d = 6 / "3"
let e = "2" * "3"
let f = 4 + 5 + "px"
let g = "$" + 4 + 5
let i = "4" - 2
let h = "4px" - 2
let k = "  -9  " + 5
let l = "  -9  " - 5
let n = null + 1
let o = undefined + 1
let p = " \t \n" - 2


let array = [a, b, c, d, e, f, g, i, h, k, l, n, o, p]

for (let i = 0; i < array.length; i++) {
    let arrayElement = array[i]
    console.log(arrayElement)
}