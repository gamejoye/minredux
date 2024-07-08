import { createStore } from "../redux/createStore.js";
import allReducers from "./reducers/index.js";
import { applyMiddleware } from "../redux/applyMiddleware.js";

const thunkMiddleware = ({ dispatch, getState }) =>
  next =>
    action => {
      if (typeof action === 'function') return action(dispatch, getState);
      return next(action);
    }

const logMiddleware = ({ dispatch, getState }) =>
  next =>
    action => {
      console.log('logging...');
      const t = next(action);
      console.log(getState());
      return t;
    }

export const store = applyMiddleware(logMiddleware, thunkMiddleware)(createStore)(allReducers);
