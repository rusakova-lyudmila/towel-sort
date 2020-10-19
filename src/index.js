
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix && matrix.length > 0) {
    return matrix.map((elem, key) => 
      (key % 2 === 0) ? elem : elem.reverse()
    ).flat();
  }
  return [];
}
