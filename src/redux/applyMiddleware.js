import { compose } from "./compose.js";

export function applyMiddleware(...middlewares) {
  return (createStore) =>
    (reducer) => {

      const store = createStore(reducer);

      let dispatch = () => {
        throw new Error(
          'redux may get something wrong'
        )
      }

      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action)
      }

      const chain = middlewares.map(middleware => middleware(middlewareAPI));

      dispatch = compose(...chain)(store.dispatch);

      return {
        ...store,
        dispatch
      }

    }
}