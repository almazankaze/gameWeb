import { useState } from "react";

import SectionHeader from "../../components/section-header/SectionHeader";
import Slider from "../../components/slider/Slider";
import SHOP_DATA from "../../shop-data";

import "./home.scss";

const ItemComponent = ({ item, isActive, onClick }) => {
  return isActive ? (
    <li onClick={onClick} className="swiper-selector-item active-selector">
      {item}
    </li>
  ) : (
    <li onClick={onClick} className="swiper-selector-item">
      {item}
    </li>
  );
};

const ItemSection = () => {
  const [selected, setSelected] = useState(0);
  const items = ["New Arrival", "Bestseller", "Special"];

  return (
    <section className="container">
      <SectionHeader title="Our Products" />
      <div className="swiper-selector">
        <ul className="swiper-selector-list">
          {items.map((item, index) => {
            return (
              <ItemComponent
                item={item}
                key={index}
                isActive={selected === index}
                onClick={() => setSelected(index)}
              />
            );
          })}
        </ul>
      </div>
      <Slider slides={4} resSlides={3} data={SHOP_DATA} />
    </section>
  );
};

export default ItemSection;
