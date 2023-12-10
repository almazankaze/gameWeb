import { useState } from "react";

import LockIcon from "@mui/icons-material/Lock";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Button from "../../components/button/Button";

import "./settings.scss";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  other: "",
  email: "",
};

const MyAccount = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, phoneNumber, other, email } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    resetFormFields();
  };

  return (
    <div className="my-account">
      <h3>My Account</h3>
      <div className="my-account-form-container">
        <form className="my-account-form" onSubmit={handleSubmit}>
          <div className="my-account-inputs-container">
            <div className="my-account-input-container">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                value={firstName}
                required
                className="my-account-input"
              />
            </div>
            <div className="my-account-input-container">
              <label>Last Name </label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                value={lastName}
                required
                className="my-account-input"
              />
            </div>
          </div>

          <div className="my-account-inputs-container">
            <div className="my-account-input-container">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                onChange={handleChange}
                value={phoneNumber}
                required
                className="my-account-input"
              />
            </div>
            <div className="my-account-input-container">
              <label>Other</label>
              <input
                type="text"
                name="other"
                onChange={handleChange}
                value={other}
                required
                className="my-account-input"
              />
            </div>
          </div>
          <div className="my-account-input-container">
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={email}
              required
              className="my-account-input"
            />
          </div>

          <Button type="submit" className="full-btn">
            Save Changes
          </Button>
        </form>
      </div>
      <div className="my-account-button">
        <div className="my-account-button-info">
          <LockIcon className="my-account-button-icon" /> Change Password
        </div>

        <ArrowForwardIcon className="my-account-button-icon" />
      </div>
      <div className="my-account-button my-account-button-danger">
        <div className="my-account-button-info">
          <PersonRemoveIcon className="my-account-button-icon" /> Delete Account
        </div>
        <ArrowForwardIcon className="my-account-button-icon" />
      </div>
    </div>
  );
};

export default MyAccount;
