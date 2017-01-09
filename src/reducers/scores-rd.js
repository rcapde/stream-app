import { FETCH_SCORES } from '../actions/index';

const INITIAL_STATE = { data: "null" };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_SCORES:
    return  {  ...state, data: action.payload};

  }
  return state;
}
