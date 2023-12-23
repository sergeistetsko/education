// 2 - Создайте собственную анимацию
let leftOffset = 0;
let topOffset = 0;
let moveDirection = 'right';

let moveHeading = function () {
    if (moveDirection === 'right') {
        $('#heading').offset({left: leftOffset});
        leftOffset++;
        if (leftOffset > 200) {
            leftOffset = 200;
            moveDirection = 'down';
        }
    } else if (moveDirection === 'down') {
        $('#heading').offset({top: topOffset});
        topOffset++;
        if (topOffset > 200) {
            topOffset = 200;
            moveDirection = 'left';
        }
    } else if (moveDirection === 'left') {
        $('#heading').offset({left: leftOffset});
        leftOffset--;
        if (leftOffset <= 0) {
            leftOffset = 0;
            moveDirection = 'up';
        }
    } else if (moveDirection === 'up') {
        $('#heading').offset({top: topOffset});
        topOffset--;
        if (topOffset <= 0) {
            topOffset = 0;
            moveDirection = 'right';
        }
    }
};

setInterval(moveHeading, 30);
