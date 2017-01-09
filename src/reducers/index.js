import { combineReducers } from 'redux';
import Scores from './scores-rd';
import Stream from './stream-rd';

const rootReducer = combineReducers({
  scores: Scores,
  stream: Stream,
});

export default rootReducer;
