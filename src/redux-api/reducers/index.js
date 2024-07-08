import { combineReducers } from "../../redux/combineReducers.js";
import { nameReducer } from "./nameReducer.js";
import { blogReducer } from "./blogReducer.js";

const reducers = combineReducers({
  name: nameReducer,
  blog: blogReducer,
})

export default reducers;