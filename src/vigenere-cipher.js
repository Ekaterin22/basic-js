const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  TYPE = true
  constructor(type=true){
    this.TYPE = type
  }
  encrypt(message, key) {
    if(message == null || key == null) throw new CustomError('Error');
    if(typeof message === "string" && typeof key === "string"){
      let res = ""
      let key_s = key.padEnd(message.length, key)
      for(let i = 0, j = 0; i < message.length; i++){
        if(/[a-z]/i.test(message[i])){
          res += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(j) % 26)+65)
          ++j;
        }
        else
          res += message[i]
      }
      return this.TYPE ? res.toUpperCase() : res.split('').reverse().join('').toUpperCase()
    }
    

  }    
  decrypt(encryptedMessage, key) {
    if(encryptedMessage == null|| key == null) throw new CustomError('Error');
    if(typeof encryptedMessage === "string" && typeof key === "string"){
      let res = ""
      let key_s = key.padEnd(encryptedMessage.length, key)
      for(let i = 0, j = 0; i < encryptedMessage.length; i++){
        if(/[a-z]/i.test(encryptedMessage[i])){
          res += String.fromCharCode(((encryptedMessage.charCodeAt(i) - key.charCodeAt(j) + 26)%26)+65)
          ++j;
        }
        else
          res += encryptedMessage[i]
      }
      return this.TYPE ? res.toUpperCase() : res.split('').reverse().join('').toUpperCase()
    }
  }
}

module.exports = VigenereCipheringMachine;
