
exports.min = function min(array) {
  if (typeof array != 'undefined' && Array.isArray(array) && array.length > 0) {
    return Math.min(...array);
  } else return 0;
};

exports.max = function max(array) {
  if (typeof array != 'undefined' && Array.isArray(array) && array.length > 0) {
    return Math.max(...array);
  } else return 0;
};

exports.avg = function avg(array) {
  if (typeof array != 'undefined' && Array.isArray(array) && array.length > 0) {
    const average = array.reduce((sum, element) => sum + element);
    return (average / array.length);
  } else return 0;
};