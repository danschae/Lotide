const tail = function(arg) {
  let newArr = arg;
  newArr = newArr.slice(1);
  console.log(newArr);
  return newArr;
}; 


module.exports = tail;