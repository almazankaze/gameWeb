import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user-selector";
import AuthForm from "../../components/auth-form/AuthForm";

import "./auth.scss";

const Authentication = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <section className="container auth-page">
      <AuthForm />
    </section>
  );
};

export default Authentication;
