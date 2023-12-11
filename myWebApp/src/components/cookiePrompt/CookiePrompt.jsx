import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCookies } from "../../store/cookies/cookies-actions";
import { selectIsPromptOpen } from "../../store/cookies/cookies-selector-";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import CookieIcon from "@mui/icons-material/Cookie";

import "./cookie-prompt.scss";

const CookiePrompt = () => {
  const [playAnim, setPlayAnim] = useState(false);
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsPromptOpen);

  const handlePromptClick = () => {
    dispatch(setCookies());
  };

  useEffect(() => {
    if (isOpen) {
      const timeId = setTimeout(() => {
        setPlayAnim(true);
      }, 2000);

      return () => {
        clearTimeout(timeId);
      };
    }
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="cookie-prompt-container">
      <div
        className={
          playAnim ? "cookie-prompt cookie-prompt-active" : "cookie-prompt"
        }
      >
        <div className="cookie-prompt-text">
          <div className="cookie-prompt-title">
            <CookieIcon className="cookie-prompt-icon" />
            <h3>We use cookie files (Demo Site)</h3>
          </div>
          <p>
            We activate all cookies by default to ensure the proper functioning
            of our website, advertisement, and analytics according to the{" "}
            <span className="cookie-prompt-span">Privacy Policy</span>.
          </p>
        </div>
        <div className="cookie-prompt-buttons">
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.stackBtn}
            onClick={handlePromptClick}
          >
            Settings
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.stackBtn}
            onClick={handlePromptClick}
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookiePrompt;
