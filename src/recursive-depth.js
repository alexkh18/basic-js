module.exports = class DepthCalculator {

  calculateDepth(arr, deepCounter = 1) {
    if (arr.some(elem => {return Array.isArray(elem) === true})) {
      deepCounter += 1;
      return this.calculateDepth(arr.flat(), deepCounter);
    }
    return deepCounter;
  }
};
