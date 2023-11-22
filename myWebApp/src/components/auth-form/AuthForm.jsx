import { useState } from "react";
import Joi from "joi-browser";
import { Link, useNavigate } from "react-router-dom";

import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import Checkbox from "../checkbox/Checkbox";
import Spinner from "../spinner/Spinner";

import "./auth-form.scss";

const AuthForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    confirmPassword: "",
    password: "",
  });

  const [isSignup, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [otherError, setOtherError] = useState("");

  const schema = {
    email: Joi.string().email().required(),
    confirmPassword: Joi.string().required(),
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
      .required(),
  };

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

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  const clearState = () => {
    setFormData({
      email: "",
      confirmPassword: "",
      password: "",
    });

    setErrors({});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = Joi.validate(formData, schema, {
      abortEarly: false,
    });

    const { error } = result;

    if (!error) {
      clearState();
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
  };

  const switchMode = () => {
    clearState();
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
            onChange={handleSave}
            value={formData.email}
            required
          />
          <span></span>
          <label>Email</label>
        </div>

        {errors.email && (
          <div className="input-error">
            {isSignup
              ? "must enter valid email format"
              : "please enter your email"}
          </div>
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
          <div className="input-error">
            {isSignup ? errors.password : "please enter password"}
          </div>
        )}

        {isSignup && (
          <>
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
            <button type="button" className="form-btn google-btn">
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
