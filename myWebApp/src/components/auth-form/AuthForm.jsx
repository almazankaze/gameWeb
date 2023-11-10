import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import Checkbox from "../checkbox/Checkbox";
import Spinner from "../spinner/Spinner";

import { getEmailFragments } from "../../utils/functions/getEmailFragments";
import { isEmail } from "../../utils/functions/isEmail";

import "./auth-form.scss";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthForm = () => {
  const [isSignup, setIsSignUp] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword } = formFields;
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [otherError, setOtherError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {};

  const resetFormErrors = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmError("");
    setOtherError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    resetFormErrors();

    if (isSignup) {
      if (!isEmail(email)) {
        setEmailError("Invalid email");
        return;
      }

      let strongPassword = new RegExp(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
      );

      if (!strongPassword.test(password)) {
        setPasswordError(
          "Password should have at least one lowercase letter, one uppercase letter, one digit, one special character, and is at least eight characters long."
        );
      }

      if (password !== confirmPassword) {
        setConfirmError("Passwords should match");
        return;
      }

      setLoading(true);

      try {
        resetFormFields();
        setLoading(false);
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          setOtherError("User with email already exists");
        } else {
          setOtherError("Something went wrong. Please try again");
        }

        setLoading(false);
      }
    } else {
      setLoading(true);
      try {
        resetFormFields();
        setLoading(false);
      } catch (err) {
        switch (err.code) {
          case "auth/wrong-password":
            setOtherError("Incorrect email or password");
            break;
          case "auth/user-not-found":
            setOtherError("Incorrect email or password");
            break;
          default:
            setOtherError("Something went wrong. Please try again");
        }
        setLoading(false);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const switchMode = () => {
    resetFormErrors();
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };
  return loading ? (
    <Spinner />
  ) : (
    <div className="form-container">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <span></span>
          <label>Email</label>
        </div>

        <span className="input-error">{emailError}</span>

        <div className="form-input">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <span></span>
          <label>Password</label>
        </div>

        <span className="input-error">{passwordError}</span>

        {isSignup && (
          <>
            <div className="form-input">
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={confirmPassword}
                required
              />
              <span></span>
              <label>Confirm Password</label>
            </div>
            <span className="input-error">{confirmError}</span>
          </>
        )}

        <div className="input-error last-error">{otherError}</div>

        {!isSignup && (
          <div className="form-options">
            <Checkbox label="Remember me" />

            <Link to="/" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
        )}

        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.form}>
          {isSignup ? "Sign Up" : "Sign In"}
        </Button>

        {!isSignup && (
          <>
            <hr className="form-divider" />
            <p className="or">OR</p>
            <button
              type="button"
              className="form-btn google-btn"
              onClick={signInWithGoogle}
            >
              Login with Google
            </button>
          </>
        )}

        <p className="form-question">
          {isSignup ? "Already have an account? " : "Don't have an account? "}

          <button type="button" onClick={switchMode} className="form-link">
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
