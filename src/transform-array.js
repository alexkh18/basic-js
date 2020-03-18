module.exports = function transform(arr) {
  let result = [];

  if (Array.isArray(arr)) {
    arr.forEach((elem, i) => {
      switch (true) {
        case arr[i - 1] === '--discard-next':
        case elem === '--discard-next':
          break;
        case elem === '--double-next':
          if (typeof arr[i + 1] === 'undefined') {
            break;
          }
          result.push(arr[i + 1]);
          break;
        case elem === '--double-prev':
          if (arr[i - 2] === '--discard-next') {
            result.push(arr[i - 1]);
            break;
          }
          if (typeof arr[i - 1] === 'undefined') {
            break;
          }
          result.push(result[result.length - 1]);
          break;
        case elem === '--discard-prev':
          if (typeof arr[i - 1] === 'undefined') {
            break;
          }
          result.pop();
          break;
        default:
          result.push(elem);
      }
    });
    return result;
  }
  throw Error;
};
