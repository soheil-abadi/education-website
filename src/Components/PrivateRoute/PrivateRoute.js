import { Navigate } from "react-router-dom";
import { isLogin } from "../../Utiles";

const PrivateRoute = ({ children }) => {
  return <>{isLogin() ? children : <Navigate to="/Login" />}</>;
};

export default PrivateRoute;
