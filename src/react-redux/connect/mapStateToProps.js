import { wrapMapToPropsFunc } from "./wrapMapToPropsFunc";

export function mapStateToPropsFactory(
  mapStateToProps
) {
  return wrapMapToPropsFunc(mapStateToProps)
}