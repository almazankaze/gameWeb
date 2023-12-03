import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user-selector";
import { selectNavPath } from "../../store/navbar/navbar-selector";

const NavigateAuth = ({ children }) => {
  const user = useSelector(selectUser);
  const path = useSelector(selectNavPath);

  return user ? <Navigate to="/" /> : children;
};

export default NavigateAuth;
