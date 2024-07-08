import { ADD_BLOG, REMOVE_BLOG } from "../constants.js"

export const addBlogCreator = (payload) => {
  return {
    type: ADD_BLOG,
    payload
  }
}

export const removeBlogCreator = (payload) => {
  return {
    type: REMOVE_BLOG,
    payload
  }
}
