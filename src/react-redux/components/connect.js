import React, { useContext, useState, useEffect } from "react";
import ReactReduxContext from "./Context";
import { mapDispatchToPropsFactory } from "../connect/mapDispathToProps";
import { mapStateToPropsFactory } from "../connect/mapStateToProps";

function connect(
  mapStateToProps,
  mapDispatchToProps
) {
  return Component =>
    props => {
      const store = useContext(ReactReduxContext);

      //debugger

      // 统一成函数
      mapStateToProps = mapStateToPropsFactory(mapStateToProps);
      mapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);

      const [stateForProps, setStateForProps] = useState(mapStateToProps(store.getState()));

      const handleUpdate = () => {
        setStateForProps(mapStateToProps(store.getState()));
      }

      useEffect(() => {
        const unsubscribe = store.subscribe(handleUpdate);
        return () => {
          unsubscribe();
        }
      }, [store]);

      const dispatchForProps = mapDispatchToProps(store.dispatch);

      return <Component {...props} {...stateForProps} {...dispatchForProps} />
    }
}

export default connect;