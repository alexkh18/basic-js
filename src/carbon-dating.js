const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleAge;
  const radioactiveDecay = 0.693 / HALF_LIFE_PERIOD;
  const floatedSampleActivity = parseFloat(sampleActivity);

  if (typeof sampleActivity === 'string' && floatedSampleActivity > 0 && floatedSampleActivity < 15) {
    sampleAge = Math.ceil(Math.abs(Math.log(MODERN_ACTIVITY / floatedSampleActivity) / radioactiveDecay));
  } else {
    sampleAge = false;
  }

  return sampleAge;
};
