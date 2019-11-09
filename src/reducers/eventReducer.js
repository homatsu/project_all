import { ADD_EVENTS } from "../actions/types";

const initialState = {
  events: [
    {
      id: 1,
      date: new Date(2018, 7, 15, 15, 30),
      duration: "50",
      name: "Events",
      description: "Na lapopie",
      status: 0,
      type: 0
    },
    {
      id: 2,
      date: new Date(2018, 7, 15, 14, 30),
      duration: "50",
      name: "Granie w lol-a 2",
      description: "Na rubinie",
      status: 0,
      type: 1
    },
    {
      id: 3,
      date: new Date(2018, 7, 15, 20, 0),
      duration: "50",
      name: "Granie w lol-a 3",
      description: "Na krakowskim kom",
      status: 0,
      type: 0
    },
    {
      id: 4,
      date: new Date(2018, 7, 15, 8, 30),
      duration: "50",
      name: "Granie w lol-a 4",
      description: "Na leśnym",
      status: 0,
      type: 1
    }
  ],
  timeEvents: [
    {
      id: 1,
      date: new Date(2018, 7, 15, 15, 30),
      duration: "50",
      name: "Time Events",
      description: "Na lapopie",
      status: 0,
      type: 2
    },
    {
      id: 2,
      date: new Date(2018, 7, 15, 14, 30),
      duration: "50",
      name: "Granie w wow-a 2",
      description: "Na rubinie",
      status: 0,
      type: 3
    },
    {
      id: 3,
      date: new Date(2018, 7, 15, 20, 0),
      duration: "50",
      name: "Granie w wow-a 3",
      description: "Na krakowskim kom",
      status: 0,
      type: 3
    },
    {
      id: 4,
      date: new Date(2018, 7, 15, 8, 30),
      duration: "50",
      name: "Granie w wow-a 4",
      description: "Na leśnym",
      status: 0,
      type: 3
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENTS:
      return {
        ...state,
        events: [...action.payload, ...state.events]
      };
    default:
      return state;
  }
}
