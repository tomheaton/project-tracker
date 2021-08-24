import { Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, user, ...otherProps}) => {

  return (
    <Route
      {...otherProps}
      render={(props) => user ? <Component {...props}/>  : <Redirect to={"/login"}/>}
    />
  );
}

export default ProtectedRoute;