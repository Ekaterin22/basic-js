const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    // let DEPTH = 0
    // let MAX_DEPTH = 0;
    // if(Array.isArray(arr)){
    //   ++DEPTH;
    //   for (let elem of arr){
    //     DEPTH += this.calculateDepth(elem)
    //     MAX_DEPTH = Math.max(MAX_DEPTH, DEPTH)
    //   }
    //   return  DEPTH;
    // }
    // return MAX_DEPTH;
    //calculateDepth(arr) {
      if(!Array.isArray(arr)) {
        return 1;
      }
  
      let max = 1;
      arr.forEach(element => {
        if(Array.isArray(element)) {
          const depthLevel = this.calculateDepth(element) + 1;
          if(max < depthLevel) {max = depthLevel;}
        }
      });
      
      return max;
  }
};
