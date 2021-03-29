
module.exports = function getSeason(date) {
  if(date == null) return 'Unable to determine the time of year!'
  else if(Object.prototype.toString.call(date) === "[object Date]"){
    month = date.getMonth()
    if(month == 11 || month == 0 || month == 1) return 'winter'
    if(month >= 2 && month <= 4) return 'spring'
    if(month >= 5 && month <= 7) return 'summer'
    if(month >= 8 && month <= 10) return 'autumn'
  }
  // check tricky and VERY tricky moments
  else if(Object.prototype.toString.call(date) != "[object Date]"){
    if(isNaN(date.getTime())) throw new CustomError('Some tricky (or very tricky) moment');
  }    
  else
    throw new CustomError('Error');

  // remove line with error and write your code here
};
