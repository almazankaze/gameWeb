import { useState, useEffect } from "react";
import Button from "../button/Button";
import Sticker from "../sticker/Sticker";
import FogAnim from "../fog-anim/FogAnim";

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
    if (isLeftSwipe || isRightSwipe)
      console.log("swipe", isLeftSwipe ? "left" : "right");

    if (isLeftSwipe) {
      nextSlide();
    } else {
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
      <div
        className={activeImg === 1 ? "slide slide-1 active" : "slide slide-1"}
        role="img"
        aria-label="Nier:Automata"
      >
        <div className="container">
          <div className="slide-content">
            <Sticker title={"Available Now"} />
            <h1 className="text-shadow">NieR:Automata</h1>
            <Button type="button">Get Now</Button>
          </div>
        </div>
      </div>
      <div
        className={activeImg === 2 ? "slide slide-2 active" : "slide slide-2"}
        role="img"
        aria-label="Devil May Cry 5"
      >
        <div className="container">
          <div className="slide-content">
            <Sticker title={"Available On PS5"} />
            <h1 className="text-shadow">Devil May Cry 5</h1>
            <Button type="button">Get Now</Button>
          </div>
        </div>
      </div>
      <div
        className={activeImg === 3 ? "slide slide-3 active" : "slide slide-3"}
        role="img"
        aria-label="The Last Of Us Part 2"
      >
        <div className="container">
          <div className="slide-content">
            <Sticker title={"Top Rated"} />
            <h1 className="text-shadow">The Last Of Us Part 2</h1>
            <Button type="button">Get Now</Button>
          </div>
        </div>
      </div>

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

      <FogAnim />
    </div>
  );
};

export default HomeCarousel;
