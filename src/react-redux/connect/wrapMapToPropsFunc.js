export function wrapMapToPropsFunc(
  mapTopropsFunc
) {
  if (typeof mapTopropsFunc == 'object') {
    return (stateOrDispatch) => mapTopropsFunc;
  }

  if (typeof mapTopropsFunc !== 'function') {
    throw new Error('mapToPropsFunc必须是一个函数或者纯净对象！');
  }

  return function mapToProps(stateOrDispatch, ownProps) {
    const mappedObject = mapTopropsFunc(stateOrDispatch, ownProps);

    if (mappedObject !== null && typeof mappedObject !== 'object') {
      throw new Error('mapToPropsFunc必须返回一个纯净对象！');
    }

    return mappedObject;
  }
}

