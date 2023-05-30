import { Navigate } from "react-router-dom";
import { FC, ReactElement } from "react";
interface IProtected {
  component: string;
  children?: ReactElement | ReactElement[];
}
const Protected: FC<IProtected> = ({ component, children }) => {
  let user;
  if (localStorage.getItem("ST_Atoken") !== null) {
    user = localStorage.getItem("ST_Atoken");
  }
  const isLoggedIn = user !== undefined ? true : false;
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  if (isLoggedIn && component === "Login") {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default Protected;
