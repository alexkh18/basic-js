module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const calculatedTurns = Math.pow(2, disksNumber) + 1;
  const calculatedSeconds = calculatedTurns / (turnsSpeed / 3600);
  return { turns: calculatedTurns, seconds: calculatedSeconds };
};