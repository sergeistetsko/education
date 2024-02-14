function numberToPower(number, power){
    let answer = 1;
    while (power > 0) {
        answer *= number;
        power--;
    }
    return answer;
}
