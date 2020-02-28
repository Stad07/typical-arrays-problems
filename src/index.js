
exports.min = function min (array) {
  let result = 0;
  if(array && array.length != 0) {
    result = Math.min(...array);
  }
  return result;
}

exports.max = function max (array) {
  let result = 0;
  if(array && array.length != 0) {
    result = Math.max(...array);
  }
  return result;
}

exports.avg = function avg (array) {
  let result = 0;
  if(array && array.length != 0) {
    let avg = array.reduce((sum, current) => sum + current) / array.length;
    result = +avg.toFixed(2);
  }
  return result;
}
