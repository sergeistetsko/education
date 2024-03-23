// deposit
const depositAmount = 1000
const yearlyRate = 15
const depositTermInYears = 2

function getDepositIncome(amount, rate, term) {
    let depositIncome = 0
    let count = 0

    while (count < term) {
        depositIncome = depositIncome + amount * (rate / 100)
        count = count + 1
    }
    return depositIncome
}

// total
const depositIncome_1 = getDepositIncome(depositAmount, yearlyRate, depositTermInYears)
const depositIncome_2 = getDepositIncome(1500, 16, 3)
const totalIncome = depositIncome_1 + depositIncome_2

console.log(totalIncome)
