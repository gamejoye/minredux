import { ADD_BLOG, REMOVE_BLOG } from "../constants.js";

const initialState = [{
  title: "gamejoye",
  content: "hello, i'm gamejoye",
}, {
  title: "mayi",
  content: "mayi's blog content"
}];

export const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BLOG:
      return [...state, payload]
    case REMOVE_BLOG:
      return state.filter(blog => blog.title !== payload.title)
    default:
      return state
  }
}