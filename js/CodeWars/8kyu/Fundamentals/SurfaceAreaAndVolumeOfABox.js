function getSize(length, width, height) {
    let area = 2 * (length * width + width * height + height * length);
    let volume = length * width * height;
    return [area, volume];
}
