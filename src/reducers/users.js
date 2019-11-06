import { ALL_USERS } from "../actions";

export default function users(state = {}, action = {}) {
  switch (action.type) {
    case ALL_USERS:
      return action.payload;
    default:
      return state;
  }
}
