function validateHello(message) {
    const greetings = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
    for (let i = 0; i < greetings.length; i++) {
        if (message.toLowerCase().includes(greetings[i])) {
            return true;
        }
    }
    return false;
}