export function combineReducers(reducers) {

  const reducerKeys = Object.keys(reducers);

  const finalReducers = {};

  reducerKeys.forEach(key => {

    if (reducers[key] === undefined) {
      console.warn(`No reducer provided for key "${key}"`);
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }

  })

  const finalReducerKeys = Object.keys(finalReducers);

  return (state = {}, action) => {
    const nextState = {};
    finalReducerKeys.forEach(key => {
      const reducer = finalReducers[key];
      const stateForKey = state[key];

      nextState[key] = reducer(stateForKey, action);
    })
    return nextState;
  }
}