import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/auth-form/AuthForm";

import "./auth.scss";

const Authentication = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));

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
