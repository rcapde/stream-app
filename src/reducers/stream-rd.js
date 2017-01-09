import { FETCH_STREAM } from '../actions/index';

const INITIAL_STATE = { data: "null" };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_STREAM:
    return  {  ...state, data: action.payload};

  }
  return state;
}
