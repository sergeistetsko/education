function flickSwitch(list) {
    let result = [];
    let flag = true;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 'flick') {
            flag = !flag;
        }
        result.push(flag);
    }
    return result;
}
