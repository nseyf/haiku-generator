var _ = require('lodash');

export const GENERATE_HAIKU = "GENERATE_HAIKU";

export const generateHaiku = (words) => {
  // Use lodash _.sample to grab random elements from
  // the line objects
  const haiku = {
    firstLine: _.sample(words.firstLine),
    secondLine: _.sample(words.secondLine),
    thirdLine: _.sample(words.thirdLine)
  }
  // Return the completed randomised haiku
  return {
    type: GENERATE_HAIKU,
    payload: haiku
  }
}
