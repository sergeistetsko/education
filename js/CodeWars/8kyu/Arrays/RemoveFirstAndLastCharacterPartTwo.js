function array(string) {
    if(string === "" || string.indexOf(",") === -1) {
        return null;
    }
    let arr = string.split(",");
    arr.shift();
    arr.pop();
    return arr.join(" ") || null;
}