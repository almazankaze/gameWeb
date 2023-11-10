import { useState } from "react";

import { ZoomImage } from "./image-zoom.style.jsx";

const ImageZoom = ({ zoomImg, width = 450, border = true }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");

  const backgroundImg = {
    backgroundImage: ``,
    backgroundPosition: backgroundPosition,
  };

  const handleMouseOver = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <ZoomImage
      style={backgroundImg}
      width={width}
      border={border}
      background={zoomImg}
      role="img"
      aria-label="product"
      onMouseMove={handleMouseOver}
    >
      <img src={zoomImg} alt="product" />
    </ZoomImage>
  );
};

export default ImageZoom;
