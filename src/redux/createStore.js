export function createStore(
  reducer,
  initialState
) {
  let state = initialState;
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener())
  }

  function subscribe(listener) {
    listeners.push(listener);

    return () => {
      listeners.filter(l => l !== listener);
    }
  }

  dispatch({
    type: '@@redux/INIT'
  })

  return {
    getState,
    dispatch,
    subscribe
  }
}
