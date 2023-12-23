// example1
/*let headingElement = document.getElementById('main-heading')
console.log(headingElement.innerHTML)*/

/*let newHeadingText = prompt('Введите новый заголовок: ')*/
/*headingElement.innerHTML = newHeadingText*/

// example2
let findBodyElement = $('body')
let findH1Element = $('h1')

let greetings = prompt('Как вас зовут?')
findH1Element.text('Привет, ' + greetings + '!')

for (let i = 0; i < 3; i++) {
    let hobby = prompt('Назови одно из своих хобби!')
    findBodyElement.append('<p>' + hobby + '</p>')
}

let findPElement = $('p')
findPElement.fadeOut(3000).fadeIn(2000)

findBodyElement.append('<h2></h2>')
let findH2Element = $('h2')
findH2Element.text('Это заголовок второго уровня')
findH2Element.fadeOut(1000).fadeIn(1000)


findBodyElement.append('<h3></h3>')
let findH3Element = $('h3')
findH3Element.text('Это заголовок третьего уровня')
findH3Element.fadeOut(1000)
findH3Element.fadeIn(1000)

for (let i = 0; i < 5; i++) {
    findH3Element.fadeOut(1000)
    findH3Element.fadeIn(1000)
}
for (let i = 0; i < 5; i++) {
    findH3Element.slideUp(3000)
    findH3Element.slideDown(3000)
}

// exercises
// 1
let namesMyBestFriends = ['Саша', 'Петя', 'Ваня', 'Даша']
findBodyElement.append('<h4>Мои друзья: </h4>')

for (let i = 0; i < namesMyBestFriends.length; i++) {
    findBodyElement.append('<p id="friends-list">' + namesMyBestFriends[i] + ' лучший!' + '</p>').fadeOut(3000).fadeIn(3000)
}
// 2
findH1Element.fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000)
for (let i = 0; i < 5; i++) {
    findH1Element.fadeOut(1000).fadeIn(1000)
}
for (let i = 0; i <= 3; i++) {
    findH1Element.fadeOut(i * 1000).fadeIn(i * 1000)
}
// 3
findH1Element.fadeOut(5000).delay(5000).fadeIn(5000)
// 4
findH1Element.fadeTo(2000, 0.5) // прозрачность уменьшается до 50% в течение 2с ?
