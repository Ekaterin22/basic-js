const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //check input
  if(typeof sampleActivity !== 'string' || isNaN(sampleActivity) || sampleActivity == null) 
    return false
  else 
    // string to number
    SAMPLE_ACTIVITY = Number(sampleActivity)
    //check inadequate values
    if (SAMPLE_ACTIVITY >= MODERN_ACTIVITY || SAMPLE_ACTIVITY <= 0) 
      return false
    else
      //find age of sample [t]
      k = Math.log(2)/HALF_LIFE_PERIOD
      t = Math.log(MODERN_ACTIVITY / SAMPLE_ACTIVITY) / k
      return Math.ceil(t)
};
