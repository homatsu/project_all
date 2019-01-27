import { SHOW_CONTEXTMENU, HIDE_CONTEXTMENU } from './types';

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
