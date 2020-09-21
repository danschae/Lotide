const takeUntil = function(array, callback) {
  let slicedArray = [];
  let index = 0
  for (const char of array) {
    if (!callback(char)) {
      slicedArray = array.slice(0, index += 1)
    } else{
      return slicedArray
    }
  }
}

module.exports = takeUntil;