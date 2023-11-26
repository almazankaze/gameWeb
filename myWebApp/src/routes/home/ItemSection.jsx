import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectProducts,
  selectIsLoading,
  selectProductError,
} from "../../store/home/home-selector";
import SectionHeader from "../../components/section-header/SectionHeader";
import Slider from "../../components/slider/Slider";
import Spinner from "../../components/spinner/Spinner";

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
  const items = ["Special", "Bestseller", "New Arrival"];

  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectProductError);

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
      {isLoading ? (
        <Spinner />
      ) : (
        <Slider slides={4} resSlides={3} data={products} />
      )}
    </section>
  );
};

export default ItemSection;
