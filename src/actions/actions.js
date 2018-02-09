var _ = require('lodash');

export const GENERATE_HAIKU = "GENERATE_HAIKU";

export const generateHaiku = (words) => {
  
  const haiku = {
    firstLine: _.sample(words.firstLine),
    secondLine: _.sample(words.secondLine),
    thirdLine: _.sample(words.thirdLine)
  }
  
  return {
    type: GENERATE_HAIKU,
    payload: haiku
  }
}