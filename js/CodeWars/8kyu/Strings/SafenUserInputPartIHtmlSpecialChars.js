function htmlspecialchars(formData) {
    let map0 = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
    };

    let result = '';
    for (let i = 0; i < formData.length; i++) {
        if (map0[formData[i]]) {
            result += map0[formData[i]];
        } else {
            result += formData[i];
        }
    }

    return result;
}