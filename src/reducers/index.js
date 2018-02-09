import { 
  GENERATE_HAIKU
} from '../actions/actions';
import data from '../data/HaikuData';

const initialState = {
  haiku: {
    firstLine: "0",
    secondLine: "0",
    thirdLine: "0"
  },
  words: data
}

export const HaikuGenerator = (state = initialState, action) => {
  switch(action.type) {
    case GENERATE_HAIKU:
    return Object.assign({}, state, {
      haiku: action.payload
    })
    default: return state;
  }
}