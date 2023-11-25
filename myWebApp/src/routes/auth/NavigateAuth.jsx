import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNavPath } from "../../store/navbar/navbar-selector";

const NavigateAuth = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const path = useSelector(selectNavPath);

  return user ? <Navigate to="/" replace /> : children;
};

export default NavigateAuth;
