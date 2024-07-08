import { SET_NAME } from "../constants.js"

export const nameCreator = (payload) => {
  return {
    type: SET_NAME,
    payload
  }
}