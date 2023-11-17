import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";
import RadioButtons from "../radio/RadioButtons";
import "./filter-sidebar.scss";

const initPlatforms = [
  "Playstation 5",
  "Xbox",
  "Nintendo Switch",
  "PC",
  "Handheld",
  "Retro",
];

const productTypes = ["All", "Accessories", "Consoles", "Games"];

const FilterSidebar = ({ searchQuery }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [onSaleChecked, setOnSaleChecked] = useState(false);
  const [freeShipChecked, setFreeShipChecked] = useState(false);
  const [inStockChecked, setInStockChecked] = useState(false);
  const [platforms, setPlatforms] = useState(new Array(6).fill(false));
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const productType = useRef(null);

  let navigate = useNavigate();

  const handleApplyFilters = () => {
    let path = "";
    if (onSaleChecked) path += "&onSale=true";
    if (freeShipChecked) path += "&freeShip=true";
    if (inStockChecked) path += "&inStock=true";

    if (productType.current.checked !== "All")
      path += "&productType=" + productType.current.checked;

    platforms.forEach((platform, i) => {
      if (platform) path += `&categories=${initPlatforms[i]}`;
    });

    if (minPrice > 0) path += "&minPrice=" + minPrice;
    if (maxPrice < 10000) path += "&maxPrice=" + maxPrice;

    navigate(`/shop?term=${searchQuery}${path}&page=${1}`);
  };

  const handleOnSaleChecked = () => {
    setOnSaleChecked((prev) => !prev);
  };

  const handleFreeShipChecked = () => {
    setFreeShipChecked((prev) => !prev);
  };

  const handleInStockChecked = () => {
    setInStockChecked((prev) => !prev);
  };

  const handlePlatformChecked = (id) => {
    const updatedPlatforms = platforms.map((platform, i) => {
      if (i === id) return !platform;
      else return platform;
    });

    setPlatforms(updatedPlatforms);
  };

  const handleMinChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxChange = (event) => {
    setMaxPrice(event.target.value);
  };

  return (
    <div className="filter-sidebar">
      <div
        className="filter-title"
        onClick={() => setShowFilter((prev) => !prev)}
      >
        <h3>Filter Search</h3>
      </div>
      <div
        className={
          showFilter
            ? "filter-sidebar-content filter-show"
            : "filter-sidebar-content"
        }
      >
        <div className="filter-section">
          <h4>Service and Promotion</h4>
          <Checkbox label="With discount" onChange={handleOnSaleChecked} />
          <Checkbox label="Free shipping" onChange={handleFreeShipChecked} />
          <Checkbox label="Available stock" onChange={handleInStockChecked} />
        </div>
        <div className="filter-section">
          <h4>Product Type</h4>
          <RadioButtons
            name={"productType"}
            buttons={productTypes}
            forwardedRef={productType}
          />
        </div>
        <div className="filter-section">
          <h4>Platform</h4>
          {initPlatforms.map((platform, index) => (
            <Checkbox
              key={index}
              label={platform}
              onChange={() => handlePlatformChecked(index)}
            />
          ))}
        </div>
        <div className="filter-section">
          <h4>Price Range</h4>
          <div className="filter-price-range">
            <input
              className="filter-input"
              type="number"
              placeholder="$ Min"
              onChange={handleMinChange}
            />
            <div className="filter-range-line"></div>
            <input
              className="filter-input"
              type="number"
              placeholder="$ Max"
              onChange={handleMaxChange}
            />
          </div>
        </div>

        <Button type="button" className="full-btn" onClick={handleApplyFilters}>
          Apply
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
