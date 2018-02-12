import {
  GENERATE_HAIKU
} from '../actions/actions';
import data from '../data/HaikuData';

const initialState = {
  haiku: {
    firstLine: "",
    secondLine: "",
    thirdLine: ""
  },
  words: data,
  tweetDisplay: "tweet-button-hide",
  haikuDisplay: "haiku-line-hide"
}

export const HaikuGenerator = (state = initialState, action) => {
  switch(action.type) {
    case GENERATE_HAIKU:
    return Object.assign({}, state, {
      haiku: action.payload,
      haikuDisplay: "haiku-line-show",
      tweetDisplay: "tweet-button-show"
    })
    default: return state;
  }
}
