import {
  SHOW_CONTEXTMENU,
  HIDE_CONTEXTMENU,
  ADD_FRAME,
  ADD_MEMORY,
  REMOVE_FRAME,
  UPDATE_MEMORY
} from "./types";
import uuid from "uuid";

export const showContextMenu = object => dispatch => {
  dispatch({
    type: SHOW_CONTEXTMENU,
    payload: object
  });
};

export const hideContextMenu = () => dispatch => {
  dispatch({
    type: HIDE_CONTEXTMENU
  });
};

export const addFrame = newFrame => dispatch => {
  //alert("addFrame");
  dispatch({
    type: ADD_FRAME,
    payload: {
      ...newFrame,
      id: uuid()
    }
  });
};

export const addMemory = newMemory => dispatch => {
  //alert("addMemory");
  dispatch({
    type: ADD_MEMORY,
    payload: newMemory
  });
};

export const removeFrame = id => dispatch => {
  dispatch({
    type: REMOVE_FRAME,
    payload: id
  });
};

export const updateMemory = newData => dispatch => {
  dispatch({
    type: UPDATE_MEMORY,
    payload: newData
  });
};
