import { UPDATE_CALENDAR_MONTH } from './types';
import { UPDATE_DISPLAYTYPE_SELECT } from './types';

export const updateCalendarMonth = newCalendarDate => dispatch => {
  dispatch({
    type: UPDATE_CALENDAR_MONTH,
    payload: newCalendarDate
  });
};

export const updateDisplayTypeSelect = id => dispatch => {
  dispatch({
    type: UPDATE_DISPLAYTYPE_SELECT,
    payload: id
  });
};
