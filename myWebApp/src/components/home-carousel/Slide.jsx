import { SlideContainer, SlideContent } from "./slide.style.jsx";

import Sticker from "../sticker/Sticker";
import Button from "../button/Button";

import "./slide.style.jsx";

const Slide = ({ id, title, backgrounds, stickerMess, active }) => {
  return (
    <SlideContainer
      backgrounds={backgrounds}
      className={id === active ? "active" : ""}
    >
      <div className="container">
        <SlideContent>
          <Sticker title={stickerMess} />
          <h1 className="text-shadow">{title}</h1>
          <Button type="button">Get Now</Button>
        </SlideContent>
      </div>
    </SlideContainer>
  );
};

export default Slide;
