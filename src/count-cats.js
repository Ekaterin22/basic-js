const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0
  //checks all items of matrix and finds cats
  for(let i = 0; i < backyard.length; i++){
    for(let j = 0; j < backyard[0].length; j++){
      // if it cat, then increase count
      if(backyard[i][j]=='^^') count++
    }
  }
  return count
};
