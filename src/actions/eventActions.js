import { ADD_EVENTS } from "./types";

export const addEvents = events => dispatch => {
  dispatch({
    type: ADD_EVENTS,
    payload: events
  });
};
