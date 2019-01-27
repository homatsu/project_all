import { combineReducers } from 'redux';

import calendarReducer from './calendarReducer';
import eventReducer from './eventReducer';
import appReducer from './appReducer';

export default combineReducers({
  calendar: calendarReducer,
  event: eventReducer,
  app: appReducer
});
