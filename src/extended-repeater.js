module.exports = function repeater(str, opts = {}) {
  const keysArr = ['repeatTimes', 'separator', 'addition', 'additionRepeatTimes', 'additionSeparator'];
  const tempOpts = {};
  keysArr.forEach((element) => {
    if (element in opts === false) {
      switch (true) {
        case (element === 'separator'):
          tempOpts[element] = '+';
          break;
        case (element === 'additionSeparator'):
          tempOpts[element] = '|';
          break;
        default:
          tempOpts[element] = '';
      }
    } else {
      tempOpts[element] = opts[element];
    }
  });

  function createString(string, separator, repeatTimes, additionStr = false) {
    if (string === null) {
      string = 'null';
    }
    const arr = [];
    if (additionStr) {
      string = string + additionStr;
    }
    arr.push(string);

    if (typeof repeatTimes === 'number') {
      for (let i = 2; i <= repeatTimes; i++) {
        arr.push(string);
      }
    }
    return arr.join(`${separator}`);
  }

  const additionalStr = createString(tempOpts.addition, tempOpts.additionSeparator, tempOpts.additionRepeatTimes);
  return createString(str, tempOpts.separator, tempOpts.repeatTimes, additionalStr);
};
