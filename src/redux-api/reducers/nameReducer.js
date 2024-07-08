import { SET_NAME } from "../constants.js";

export const nameReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_NAME:
      return {
        ...state,
        payload
      }
    default:
      return state
  }
}