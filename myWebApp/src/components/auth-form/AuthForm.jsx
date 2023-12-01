import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserError } from "../../store/user/user-selector";
import { selectNavPath } from "../../store/navbar/navbar-selector";
import { signIn, signUp } from "../../store/user/user-actions";
import Joi from "joi-browser";
import { Link, useNavigate } from "react-router-dom";

import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import Checkbox from "../checkbox/Checkbox";
import Spinner from "../spinner/Spinner";

import { getEmailFragments } from "../../utils/functions/getEmailFragments";

import "./auth-form.scss";

const AuthForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    confirmPassword: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [isSignup, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [otherError, setOtherError] = useState("");

  const path = useSelector(selectNavPath);

  const schema = {
    email: Joi.string().email().required(),
    username: Joi.string().optional().allow(""),
    confirmPassword: Joi.string()
      .valid(Joi.ref("password"))
      .label("confirm password")
      .required(),
    password: Joi.string()
      .regex(
        /[ -~]*[a-z][ -~]*/,
        "1 lower case, 1 upper case, 1 number, 1 special character"
      ) // at least 1 lower-case
      .regex(
        /[ -~]*[A-Z][ -~]*/,
        "1 lower case, 1 upper case, 1 number, 1 special character"
      ) // at least 1 upper-case
      .regex(
        /[ -~]*(?=[ -~])[^0-9a-zA-Z][ -~]*/,
        "1 lower case, 1 upper case, 1 number, 1 special character"
      ) // at least 1 special character
      .regex(
        /[ -~]*[0-9][ -~]*/,
        "1 lower case, 1 upper case, 1 number, 1 special character"
      ) // at least 1 number
      .min(8)
      .label("password")
      .required(),
  };

  const loginSchema = {
    loginEmail: Joi.string().email().required(),
    loginPassword: Joi.string().required(),
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    delete errorData[name];
    let data = { ...formData };
    data[name] = value;
    setFormData(data);
    setErrors(errorData);
  };

  const handleLoginSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    delete errorData[name];
    let data = { ...loginData };
    data[name] = value;
    setLoginData(data);
    setErrors(errorData);
  };

  const clearState = () => {
    setFormData({
      email: "",
      username: "",
      confirmPassword: "",
      password: "",
    });

    setLoginData({
      loginEmail: "",
      loginPassword: "",
    });

    setErrors({});
    setOtherError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // handle signup
    if (isSignup) {
      const result = Joi.validate(formData, schema, {
        abortEarly: false,
      });

      const { error } = result;

      if (!error) {
        setLoading(true);
        const [displayName, domain] = getEmailFragments(formData.email);

        dispatch(signUp({ ...formData, username: displayName })).then(
          (resp) => {
            if (resp === 409) {
              setOtherError("user already exists");
            } else if (resp >= 500)
              setOtherError("something went wrong. Try again.");
            else {
              navigate(path.prev, { replace: true });
              clearState();
            }
            setLoading(false);
          }
        );
      } else {
        const errorData = {};
        for (let item of error.details) {
          const name = item.path[0];
          const message = item.message;
          errorData[name] = message;
        }
        setErrors(errorData);
        return errorData;
      }
    }

    // handle login
    else {
      const result = Joi.validate(loginData, loginSchema, {
        abortEarly: false,
      });

      const { error } = result;

      if (!error) {
        setLoading(true);
        const [displayName, domain] = getEmailFragments(loginData.loginEmail);

        const loginInfo = {
          username: displayName,
          password: loginData.loginPassword,
        };

        dispatch(signIn(loginInfo)).then((resp) => {
          if (resp >= 500) {
            setOtherError("Something went wrong. Try again.");
          } else if (resp >= 400) {
            setOtherError("Incorrect email or password");
          } else {
            navigate(path.prev, { replace: true });
            clearState();
          }
          setLoading(false);
        });
      } else {
        const errorData = {};
        for (let item of error.details) {
          const name = item.path[0];
          const message = item.message;
          errorData[name] = message;
        }
        setErrors(errorData);
        return errorData;
      }
    }
  };

  const switchMode = () => {
    clearState();
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const error = useSelector(selectUserError);

  return loading ? (
    <Spinner />
  ) : (
    <div className="form-container">
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        id="auth-form"
      >
        {!isSignup && (
          <>
            <div className="form-input">
              <input
                type="text"
                name="loginEmail"
                onChange={handleLoginSave}
                value={loginData.loginEmail}
                required
              />
              <span></span>
              <label>Email</label>
            </div>

            {errors.loginEmail && (
              <div className="input-error">"must enter valid email format"</div>
            )}

            <div className="form-input">
              <input
                type="password"
                name="loginPassword"
                onChange={handleLoginSave}
                value={loginData.loginPassword}
                required
              />
              <span></span>
              <label>Password</label>
            </div>

            {errors.loginPassword && (
              <div className="input-error">please enter password</div>
            )}
          </>
        )}

        {isSignup && (
          <>
            <div className="form-input">
              <input
                type="text"
                name="email"
                onChange={handleSave}
                value={formData.email}
                required
              />
              <span></span>
              <label>Email</label>
            </div>

            {errors.email && (
              <div className="input-error">must enter valid email format</div>
            )}

            <div className="form-input">
              <input
                type="password"
                name="password"
                onChange={handleSave}
                value={formData.password}
                required
              />
              <span></span>
              <label>Password</label>
            </div>

            {errors.password && (
              <div className="input-error">{errors.password}</div>
            )}
            <div className="form-input">
              <input
                type="password"
                name="confirmPassword"
                onChange={handleSave}
                value={formData.confirmPassword}
                required
              />
              <span></span>
              <label>Confirm Password</label>
            </div>

            {errors.confirmPassword && (
              <div className="input-error">passwords should match</div>
            )}
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
            <Button
              type="button"
              buttonType={BUTTON_TYPE_CLASSES.google}
              className="full-btn"
            >
              <span>Google</span>
            </Button>
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
