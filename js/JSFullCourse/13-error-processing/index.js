// Урок 1 - Обработка ошибок в JS---------------------------------------------------------------------------------------

// Решение проблемы try/catch

try {
    // выполнение блока кода
} catch (error) {
    // этот блок кода выполнится в случае возникновения ошибок в блоке try
}

const fnWithError = () => {
    throw new Error('Some error')
}

try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('Continue...') // Выполнение кода продолжается, даже после ошибок, так как ошибка поймана
