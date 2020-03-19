const chainMaker = {
  values: [],

  getLength() {
    return this.values.length;
  },
  addLink(value) {
    this.chain = '';
    this.values.push(value);
    return this;
  },
  removeLink(position) {
    switch (true) {
      case (typeof position !== 'number'):
      case position < 1:
      case position > this.values.length:
        this.chain = '';
        this.values = [];
        throw new Error('Wrong position');
      default:
        this.values.splice(position - 1, 1);
        return this;
    }
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    const chain = this.values.map((elem) => `( ${elem} )`).join('~~');
    this.values = [];
    return chain;
  },
};

module.exports = chainMaker;




// const chai = require('chai');
// const { expect, assert } = chai;

// describe.only('Tests in "simple-chain.js" file', () => {
//   it('test addLink() method', () => {
//     assert.deepEqual(chainMaker.addLink(1).addLink(2).addLink(3).finishChain(), '( 1 )~~( 2 )~~( 3 )');
//     assert.deepEqual(chainMaker.getLength(), 3);
//   });
//   it('test reverseChain() method', () => {
//     assert.deepEqual(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain(), '( 2 )~~( 1 )~~( 3 )');
//     assert.deepEqual(chainMaker.getLength(), 3);
//   });
//   it('test removeLink() method', () => {
//     assert.deepEqual(chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(),'( 3rd )~~( function() {} )');
//     assert.deepEqual(chainMaker.getLength(), 2);
//   });
//   it('throws an Error MY test', () => {
//     expect(() => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0)).to.throw();
//     expect(() => chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd')).to.throw();
//     expect(() => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2)).to.throw();
//     expect(() => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)).to.throw();
//   });
//   it.only('function returns correct values', () => {
//     assert.deepEqual(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
//     assert.deepEqual(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain(), '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )');
//     assert.deepEqual(chainMaker.addLink(false).reverseChain().reverseChain().reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).addLink(1.233).addLink(false).addLink(1).reverseChain().addLink(1).finishChain(), '( 1 )~~( false )~~( 1.233 )~~( [object Object] )~~( false )~~( 1 )');
//   });
// });
