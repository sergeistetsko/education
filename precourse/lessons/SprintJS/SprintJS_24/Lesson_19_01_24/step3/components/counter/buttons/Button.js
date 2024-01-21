export function Button(title, function1) {
    function oneClickCallback() {
        function1()
    }
    const buttonElement = document.createElement('button')
    buttonElement.append(title)
    buttonElement.addEventListener('click', oneClickCallback)
    return buttonElement
}

