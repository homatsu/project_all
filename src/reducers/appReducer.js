import {
  SHOW_CONTEXTMENU,
  HIDE_CONTEXTMENU,
  ADD_FRAME,
  ADD_MEMORY,
  REMOVE_FRAME,
  UPDATE_MEMORY
} from "../actions/types";

const initialState = {
  contextMenuToggle: false,
  contextMenuContent: [],
  contextMenuLocation: [0, 0],
  frames: [],
  framesMemory: [],
  frameCurrent: {}
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
    case ADD_FRAME:
      return {
        ...state,
        frames: [...state.frames, action.payload]
      };
    case ADD_MEMORY:
      return {
        ...state,
        framesMemory: [...state.framesMemory, action.payload]
      };
    case REMOVE_FRAME:
      return {
        ...state,
        frames: state.frames.filter(frame => frame.id !== action.payload),
        framesMemory: state.framesMemory.filter(
          memory => memory.frameId !== action.payload
        )
      };
    case UPDATE_MEMORY:
      return {
        ...state,
        framesMemory: state.framesMemory.map(element => {
          if (element.frameId === action.payload.frameId) return action.payload;
          return element;
        })
      };
    default:
      return state;
  }
}
