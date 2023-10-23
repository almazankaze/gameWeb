import { useState, useEffect } from "react";

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
      ></div>
      <div
        className={activeImg === 2 ? "slide slide-2 active" : "slide slide-2"}
        role="img"
        aria-label="Devil May Cry 5"
      ></div>
      <div
        className={activeImg === 3 ? "slide slide-3 active" : "slide slide-3"}
        role="img"
        aria-label="The Last Of Us Part 2"
      ></div>

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
