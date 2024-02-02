function collinearity(x1, y1, x2, y2) {
    // If one of the vectors has coordinates (0, 0), it is collinear to any other vector
    if ((x1 === 0 && y1 === 0) || (x2 === 0 && y2 === 0)) {
        return true;
    }
    // Vectors are collinear if the cross product is zero
    return x1 * y2 - y1 * x2 === 0;
}

