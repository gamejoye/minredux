export default function bindCreatorsDispatch(
  mapDispatchToProps,
  dispatch
) {
  const actionKeys = Object.keys(mapDispatchToProps);
  const dispatchForProps = {};

  actionKeys.forEach(actionKey => {
    dispatchForProps[actionKey] = (...args) => dispatch(mapDispatchToProps[actionKey](...args))
  })

  return dispatchForProps;
}