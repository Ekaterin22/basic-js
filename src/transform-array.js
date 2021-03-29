const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr)) {
    result = arr.slice();
  for(let i = 0; i < result.length; i++){
    if(result[i] == '--discard-next'){
      if(i+1 != result.length){
        if(!Number.isNaN(result[i+1]))
          resuly = result.splice(i+1,1);
      }
    }
    else if(result[i] == '--discard-prev'){
      if(i != 0){
        if(!Number.isNaN(result[i-1]))
        result = result.splice(i-1,1);
      }
    }
    else if(result[i] == '--double-prev'){
      if(i != 0){
        if(!Number.isNaN(result[i-1]))
          result = result.splice(i, 0, result[i-1]);
      }
    }
    else if(result[i] == '--double-next'){
      if(i+1 != result.length){
        if(!Number.isNaN(result[i+1]))
          result = result.splice(i, 0, result[i+1]);
      }
    }
    else continue;
  }
  result.forEach(element => {
    if(typeof element == 'string')
      result = result.splice(result.indexOf(element),1);
  });
  return result;
  }
  throw new CustomError("Error");
  
};
