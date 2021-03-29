const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  letters = []
  // если неправильные входные данные (не массив)
  if(!Array.isArray(members)) return false;
  members.forEach( elem => {
    // работаем, только если текущий элемент массива - строка
    if(typeof elem == 'string'){
      for(i = 0; i < elem.length; i++){
        // игнорируем пробелы
          if(elem[i] == ' ') continue;
          else{
            //если не "пробел" (значит начало имени) - добавить первую букву в массив
            letters.push(elem[i])
            break;
          }
        }
    }
  })
  //полученный массив объединим в строку, переведем в "капс", разобьем для сортировки и снова соединим в строку
  return letters.join('').toUpperCase().split('').sort().join('')
};

