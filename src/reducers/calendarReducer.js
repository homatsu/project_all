import { UPDATE_CALENDAR_MONTH } from '../actions/types';
import { UPDATE_DISPLAYTYPE_SELECT } from '../actions/types';

const initialState = {
  date: new Date(),
  calendarDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  displayTypeList: [
    {
      id: 0,
      title: 'Wszystko',
      selected: true,
      key: 'location',
      values: [0, 1]
    },
    {
      id: 1,
      title: 'Nic',
      selected: false,
      key: 'location',
      values: []
    },
    {
      id: 2,
      title: 'Zwykłe',
      selected: false,
      key: 'location',
      values: [0]
    },
    {
      id: 3,
      title: 'Dzienne',
      selected: false,
      values: [1]
    }
  ],
  displayType: [0, 1]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CALENDAR_MONTH:
      return {
        ...state,
        calendarDate: new Date(action.payload)
      };

    case UPDATE_DISPLAYTYPE_SELECT: {
      let newDisplayType = state.displayType;
      return {
        ...state,
        displayTypeList: state.displayTypeList.map(item => {
          if (item.id === action.payload) {
            newDisplayType = item.values;
            return { ...item, selected: true };
          } else return { ...item, selected: false };
        }),
        displayType: newDisplayType
      };
    }

    default:
      return state;
  }
}
