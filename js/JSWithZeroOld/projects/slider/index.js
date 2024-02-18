const showPrevBtn = document.getElementById('show-prev')
const showNextBtn = document.getElementById('show-next')
const slideImg = document.getElementById('slide-img')

showPrevBtn.addEventListener('click', onShowPrevBtnClick)
showNextBtn.addEventListener('click', onShowNextBtnClick)

const imagesUrls = ['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/5.jpg']

let currentImageIndex = 0
slideImg.src = imagesUrls[currentImageIndex]
showPrevBtn.disabled = true

function onShowPrevBtnClick() {
    currentImageIndex--
    slideImg.src = imagesUrls[currentImageIndex]
    showNextBtn.disabled = false
    
    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true
    }
}
function onShowNextBtnClick() {
    currentImageIndex++
    slideImg.src = imagesUrls[currentImageIndex]
    showPrevBtn.disabled = false
    
    if (currentImageIndex === imagesUrls.length - 1) {
        showNextBtn.disabled = true
    }
}