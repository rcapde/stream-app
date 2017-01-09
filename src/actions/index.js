import axios from 'axios';

export const FETCH_SCORES = 'FETCH_SCORES';
export const FETCH_STREAM = 'FETCH_STREAM';


export function fetchScores() {
  const initialState = [
    {
      id: 'twitch',
      name: "Channel #0",
    },
    {
      id: 'gamesdonequick',
      name: "Channel #1",
    },
    {
      id: 'stormentv',
      name: "Channel #2",
    },
    {
      id: "imaqtpie",
      name: "Channel #3",
    },
    {
      id: 'evilarthas',
      name: "Channel #4",
    },
    {
      id: 'uccleague',
      name: "Channel #5",
    },
    {
      id: 'gronkh',
      name: "Channel #6",
    },

  ]
  const request = axios.get("http://codepen.io/jobs.json")


  return {
    type: FETCH_SCORES,
    payload: initialState
  };
}

export function fetchStream(selected){
  return {
    type: FETCH_STREAM,
    payload: selected
  };
}
