const tail = function(arg) {
  let newArr = arg;
  newArr = newArr.slice(1);
  return newArr;
}; 


module.exports = tail;