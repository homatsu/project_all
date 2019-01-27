import { SHOW_CONTEXTMENU, HIDE_CONTEXTMENU } from '../actions/types';

const initialState = {
  contextMenuToggle: false,
  contextMenuContent: [],
  contextMenuLocation: [0, 0]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_CONTEXTMENU:
      return {
        ...state,
        contextMenuToggle: !state.contextMenuToggle,
        contextMenuContent: [
          action.payload.content,
          ...state.contextMenuContent
        ],
        contextMenuLocation: action.payload.location
      };
    case HIDE_CONTEXTMENU:
      return {
        ...state,
        contextMenuToggle: false,
        contextMenuContent: []
      };
    default:
      return state;
  }
}
