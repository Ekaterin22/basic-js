const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // calculate turns by 2^N - 1, N - disksNumber
  turns = Math.pow(2, disksNumber) - 1
  seconds = Math.floor(turns / (turnsSpeed / 3600))
  return{
      turns : turns,
      seconds : seconds
  };
};
