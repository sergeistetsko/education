function validateCode (code) {
    var str = code.toString();
    var regex = /^[123]/;
    return regex.test(str);
}