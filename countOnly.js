
const countOnly = function(allItems, itemsToCount) {
  const countedItems = {}; //returned object containing the items counted
  // loop through the two arrays
  for (const person of allItems) {
    if (itemsToCount[person] === true) {
      if (!countedItems[person]) {
        countedItems[person] = 1;
      } else {
        countedItems[person] += 1;
      }
    }
  }
  return countedItems;
};


// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// console.log(result1);

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;