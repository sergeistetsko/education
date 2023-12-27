function pipeFix(pipes) {
    let minVal = Math.min(...pipes);
    let maxVal = Math.max(...pipes);
    let fixedPipes = [];
    for (let i = minVal; i <= maxVal; i++) {
        fixedPipes.push(i);
    }
    return fixedPipes;
}
