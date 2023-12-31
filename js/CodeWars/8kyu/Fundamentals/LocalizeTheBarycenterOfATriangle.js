function barTriang(A, B, C) {
    let xO = (A[0] + B[0] + C[0]) / 3;
    let yO = (A[1] + B[1] + C[1]) / 3;

    // Round the result to four decimal places
    xO = Math.round(xO * 10000) / 10000;
    yO = Math.round(yO * 10000) / 10000;

    return [xO, yO];
}
