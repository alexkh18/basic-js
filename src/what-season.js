module.exports = function getSeason(date) {
  let season;

  if ((date instanceof Date) && !isNaN(date)) {
    switch (true) {
      case date.getMonth() === 11:
      case date.getMonth() === 0:
      case date.getMonth() === 1:
        season = 'winter';
        break;
      case date.getMonth() === 2:
      case date.getMonth() === 3:
      case date.getMonth() === 4:
        season = 'spring';
        break;
      case date.getMonth() === 5:
      case date.getMonth() === 6:
      case date.getMonth() === 7:
        season = 'summer';
        break;
      case date.getMonth() === 8:
      case date.getMonth() === 9:
      case date.getMonth() === 10:
        season = 'autumn';
        break;
      default:
        season = 'Unable to determine the time of year!';
    }
  } else if (date === undefined) {
    season = 'Unable to determine the time of year!';
  } else {
    throw new Error('Invalid input value', 'what-season.js');
  }

  return season;
};
