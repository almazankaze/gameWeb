import { useNavigate } from "react-router-dom";
import { SlideContainer, SlideContent } from "./slide.style.jsx";

import Sticker from "../sticker/Sticker";
import Button from "../button/Button";

import "./slide.style.jsx";

const Slide = ({ id, title, backgrounds, stickerMess, active, path }) => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`products/${path}`);
  };

  return (
    <SlideContainer
      backgrounds={backgrounds}
      className={id === active ? "active" : ""}
    >
      <div className="container">
        <SlideContent>
          <Sticker title={stickerMess} />
          <h1 className="text-shadow">{title}</h1>
          <Button type="button" onClick={goToProduct}>
            Get Now
          </Button>
        </SlideContent>
      </div>
    </SlideContainer>
  );
};

export default Slide;
