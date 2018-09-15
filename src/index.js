module.exports = function getZerosCount(number) {
  // your implementation
    var zero = 0;
    while (number) {
        number = (number / 5) | 0;
        zero += number;
    }
    return zero;
}
