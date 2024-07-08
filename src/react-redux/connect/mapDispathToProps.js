import bindCreatorsDispatch from "../utils/bindCreatorsDispatch";
import { wrapMapToPropsFunc } from "./wrapMapToPropsFunc";

export function mapDispatchToPropsFactory(
  mapDispatchToProps
) {
  if (typeof mapDispatchToProps === 'object') {
    return (dispatch) => bindCreatorsDispatch(mapDispatchToProps, dispatch);
  }
  return wrapMapToPropsFunc(mapDispatchToProps);
}