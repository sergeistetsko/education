function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0)
        return [];

    let countPositives = 0, sumNegatives = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0)
            countPositives++;
        else if (input[i] < 0)
            sumNegatives += input[i];
    }

    return [countPositives, sumNegatives];
}