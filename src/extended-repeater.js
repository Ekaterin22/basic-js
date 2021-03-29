const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
   str = String(str);
    let res = '';
    let add = '';
    if('addition' in options)
    {
        add = String(options.addition);
    }
    if(!('separator' in options)) options.separator = '+';
    if(!('repeatTimes' in options)) options.repeatTimes=1;
    if(!('additionSeparator' in options)) options.additionSeparator = '|';
    for(let i = 0; i < options.repeatTimes; i++)
    {
        res = `${res}${str}${add}`;
        for(let j=0; j < options.additionRepeatTimes-1; j++)
        {
            res = `${res}${String(options.additionSeparator)}${add}`;
        }
        if(i<options.repeatTimes-1)
        res = `${res}${String(options.separator)}`;
    }
    return res;
};
