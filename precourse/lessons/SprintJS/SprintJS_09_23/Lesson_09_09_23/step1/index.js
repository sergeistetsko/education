let elementBySelectorAllStar = document.querySelectorAll('div')

function myMove() {
    let id = null
    const element = document.getElementById('animate')
    let pos = 0
    clearInterval(id)
    id = setInterval(frame, 5)

    function frame() {
        console.log('hello')
        if (pos == 350) {
            clearInterval(id)
        } else {
            pos++
            element.style.top = pos + 'px'
            element.style.left = pos + 'px'
        }
    }
}
