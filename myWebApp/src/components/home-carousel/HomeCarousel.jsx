import { useState, useEffect } from "react";
import Slide from "./Slide";
import FogAnim from "../fog-anim/FogAnim";

import banner1 from "../../assets/home-images/nier-automata-bg.jpg";
import banner1_mobile from "../../assets/home-images/nier-mobile-bg.jpg";
import banner2 from "../../assets/home-images/devil-bg.jpg";
import banner2_mobile from "../../assets/home-images/devil-mobile-bg.jpg";
import banner3 from "../../assets/home-images/last-bg.jpg";
import banner3_mobile from "../../assets/home-images/last-mobile-bg.jpg";

import "./home-carousel.scss";

const HomeCarousel = () => {
  const [activeImg, setActiveImg] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeImg !== 3) {
        setActiveImg(activeImg + 1);
      } else setActiveImg(1);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeImg]);

  const nextSlide = () => {
    if (activeImg !== 3) {
      setActiveImg(activeImg + 1);
    } else setActiveImg(1);
  };

  const prevSlide = () => {
    if (activeImg !== 1) {
      setActiveImg(activeImg - 1);
    } else setActiveImg(3);
  };

  const moveDot = (img) => {
    setActiveImg(img);
  };

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div
      className="home-carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Slide
        id={1}
        title="NieR:Automata"
        backgrounds={[banner1, banner1_mobile]}
        stickerMess="Out Now"
        active={activeImg}
        path="6563bbcbb78b966b18fcb57e"
      />
      <Slide
        id={2}
        title="Devil May Cry 5"
        backgrounds={[banner2, banner2_mobile]}
        stickerMess="Now On PS5"
        active={activeImg}
        path="6563bbcbb78b966b18fcb582"
      />
      <Slide
        id={3}
        title="The Last Of Us Part 2"
        backgrounds={[banner3, banner3_mobile]}
        stickerMess="Top Rated"
        active={activeImg}
        path="6563bbcbb78b966b18fcb580"
      />

      <button type="button" className="btn-slide next" onClick={nextSlide}>
        &#10095;
      </button>
      <button type="button" className="btn-slide prev" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            className={
              activeImg === index + 1 ? "sliderDot active-dot" : "sliderDot"
            }
            onClick={() => moveDot(index + 1)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
