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
  haikuDisplay: "haiku-line-hide"
}

export const HaikuGenerator = (state = initialState, action) => {
  switch(action.type) {
    case GENERATE_HAIKU:
    return Object.assign({}, state, {
      haiku: action.payload,
      haikuDisplay: "haiku-line-show"
    })
    default: return state;
  }
}