import * as request from "superagent";
import { url } from "./constants";
export const ALL_USERS = "ALL_USERS";
export const ALL_MESSAGES = "ALL_MESSAGES";

export function allUsers(payload) {
  return {
    type: ALL_USERS,
    payload
  };
}

export const loadUsers = () => (dispatch, getState) => {
  request(`${url}/users`)
    .then(response => {
      dispatch(allUsers(response.body));
    })
    .catch(console.error);
};

export function allMessages(payload) {
  return {
    type: ALL_MESSAGES,
    payload
  };
}

export const loadMessages = () => (dispatch, getState) => {
  request(`${url}/conversation/51/message/limited?limit=5&offset=1`)
    .then(response => {
      dispatch(allMessages(response.body));
    })
    .catch(console.error);
};

export const ADD_MESSAGE = "ADD_MESSAGE";
function newMessage(payload) {
  return {
    type: ADD_MESSAGE,
    payload
  };
}

export function addMessage(message, senderId) {
  return function(dispatch) {
    request
      .post(`${url}/conversation/51/message/send`)
      .send({ message, senderId })
      .then(response => {
        const action = newMessage({ senderId, message });

        dispatch(action);
      })
      .catch(error => {
        console.log("Something went wrong adding a message");
        console.log(error);
      });
  };
}
