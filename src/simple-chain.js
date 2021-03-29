const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (String(value)) {
      this.chain.push('( ' + String(value) + ' )');
      return this;
    }
    this.chain.push('( )');
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] !== undefined) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    this.chain = [];
    throw Error('Error');
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const anwer = this.chain.join('~~');
    this.chain = [];
    return anwer;
  }
};

module.exports = chainMaker;
