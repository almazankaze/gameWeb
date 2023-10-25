import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./scrollUp.scss";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScrollButtunVisibility = () => {
      window.pageYOffset > 300 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handleScrollButtunVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtunVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={visible ? "scroll-up show" : "scroll-up hide"}
      onClick={scrollToTop}
    >
      <div className="arrow">
        <ArrowUpwardIcon sx={{ width: "28px" }} />
      </div>
    </div>
  );
};

export default ScrollUp;
