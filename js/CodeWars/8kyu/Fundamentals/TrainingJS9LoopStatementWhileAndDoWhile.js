function padIt(str,n){
    //coding here
    var newStr = "";
    var padding = "*";
    var i = 0;
    var left = Math.ceil(n/2), right = (n - left)
    while(i<=n){
        if (i%2===0){
            newStr = padding.repeat(left) + str + padding.repeat(right)
        }
        i++;
    }
    return newStr;
}