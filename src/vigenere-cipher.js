class VigenereCipheringMachine {
  constructor(typeOfMachine = true) {
    this.directMachine = typeOfMachine;
    this.dblAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  createFullKeyword(message, key) {
    const repeaterCfc = Math.ceil(message.length / key.length);
    // Created keyword string larger than we need, but it exec his own task
    const keywordStr = key.toUpperCase().repeat(repeaterCfc);

    return Array.from(keywordStr)
  }

  checkMachineDirection(message) {
    if (!this.directMachine) {
      // const keywordCharsArr = Array.from(message.toUpperCase().reverse());
      return Array.from(message.toUpperCase()).reverse();
    }
    // const keywordCharsArr = Array.from(message.toUpperCase());
    return Array.from(message.toUpperCase());
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Both params (message, key) should be mandatory');
    }

    const keywordCharsArr = this.createFullKeyword(message, key);
    const messageCharsArr = this.checkMachineDirection(message);
    let encryptedMsg = [];

    messageCharsArr.forEach((char, i) => {
      const keywordCharIndex = this.dblAlphabet.indexOf(keywordCharsArr[i]);
      const msgCharIndex = this.dblAlphabet.indexOf(char);

      if (msgCharIndex !== -1) {
        encryptedMsg.push(this.dblAlphabet[keywordCharIndex + msgCharIndex]);
      } else {
        encryptedMsg.push(char);
        keywordCharsArr.unshift(keywordCharsArr[i]);
      }
    });
    return encryptedMsg.join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Both params (message, key) should be mandatory');
    }

    const keywordCharsArr = this.createFullKeyword(message, key);
    const messageCharsArr = this.checkMachineDirection(message);
    let encryptedMsg = [];

    messageCharsArr.forEach((char, i) => {
      const keywordCharIndex = this.dblAlphabet.indexOf(keywordCharsArr[i]);
      const msgCharIndex = this.dblAlphabet.indexOf(char);

      if (msgCharIndex !== -1) {
        if (msgCharIndex < keywordCharIndex) {
          encryptedMsg.push(this.dblAlphabet[26 - (keywordCharIndex - msgCharIndex)]);
        } else {
          encryptedMsg.push(this.dblAlphabet[msgCharIndex - keywordCharIndex]);
        }
      } else {
        encryptedMsg.push(char);
        keywordCharsArr.unshift(keywordCharsArr[i]);
      }
    });
    return encryptedMsg.join('');
  }
}

module.exports = VigenereCipheringMachine