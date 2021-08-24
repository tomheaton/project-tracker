import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, condition, redirect, ...otherProps}) => {

  return (
    <Route
      {...otherProps}
      render={(props) => condition ? <Component {...props}/>  : <Redirect to={redirect}/>}
    />
  );
}

export default ProtectedRoute;