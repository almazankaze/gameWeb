import { useState, useEffect } from "react";

import banner1 from "../../assets/home-images/nier-automata-bg.jpg";
import banner2 from "../../assets/home-images/devil-bg.jpg";
import banner3 from "../../assets/home-images/last-bg.jpg";
import FogAnim from "../fog-anim/FogAnim";

import "./home-carousel.scss";

const HomeCarousel = () => {
  const [activeImg, setActiveImg] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeImg !== 3) {
        setActiveImg(activeImg + 1);
      } else setActiveImg(1);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeImg]);

  return (
    <div className="home-carousel">
      <div
        className={activeImg === 1 ? "slide active" : "slide"}
        style={{ backgroundImage: `url(${banner1})` }}
        role="img"
        aria-label="Nier:Automata"
      ></div>
      <div
        className={activeImg === 2 ? "slide active" : "slide"}
        style={{ backgroundImage: `url(${banner2})` }}
        role="img"
        aria-label="Devil May Cry 5"
      ></div>
      <div
        className={activeImg === 3 ? "slide active" : "slide"}
        style={{ backgroundImage: `url(${banner3})` }}
        role="img"
        aria-label="The Last Of Us Part 2"
      ></div>

      <FogAnim />
    </div>
  );
};

export default HomeCarousel;
