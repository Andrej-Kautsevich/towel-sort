module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    matrix.map((array, index) => {
        if (index % 2 !== 0) array.reverse()
    });

    return matrix.flat(1);
}
