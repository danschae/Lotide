const findKeyByValue = function(object, value){
  let result = "";
  for (const key in object) {
    if (object[key] === value){
      result = key
    }
  }
  return result;
}


// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports= findKeyByValue;
                                                                                                