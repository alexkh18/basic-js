module.exports = function createDreamTeam(members) {
  const firstLetters = [];
  const result = true;

  function replaceWhiteSpaces(string) {
    return string.replace(/\s/g, '');
  }

  function getLettersFromString(string) {
    return string.replace(/[^a-zA-Z]+/g, '');
  }

  if (Array.isArray(members) && members.length > 0) {
    for (let name of members) {
      if (typeof name === 'string') {
        name = getLettersFromString(replaceWhiteSpaces(name ));
        firstLetters.push([...name][0].toLowerCase());
      }
    }
  }

  if (result) {
    return firstLetters.sort().join('').toUpperCase();
  }
  return result;
};
