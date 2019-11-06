import { ALL_MESSAGES } from "../actions";
import { ADD_MESSAGE } from "../actions";

export default function messages(state = [], action = {}) {
  switch (action.type) {
    case ALL_MESSAGES:
      return action.payload;
    case ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
