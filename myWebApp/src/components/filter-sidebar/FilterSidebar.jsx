import React, { useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";
import RadioButtons from "../radio/RadioButtons";
import "./filter-sidebar.scss";

const initPlatforms = [
  "Playstation",
  "Xbox",
  "Nintendo Switch",
  "PC",
  "Handheld",
  "Retro",
];

const productTypes = ["All", "Accessories", "Consoles", "Games"];

const FilterSidebar = ({ searchQuery }) => {
  const [params, setParams] = useSearchParams();
  const [showFilter, setShowFilter] = useState(false);
  const [onSaleChecked, setOnSaleChecked] = useState(
    params.get("onSale") ? true : false
  );
  const [freeShipChecked, setFreeShipChecked] = useState(
    params.get("freeShip") ? true : false
  );
  const [inStockChecked, setInStockChecked] = useState(
    params.get("inStock") ? true : false
  );
  const [minPrice, setMinPrice] = useState(
    params.has("minPrice")
      ? Math.round(Number(params.get("minPrice")) * 100) / 100
      : 0
  );
  const [maxPrice, setMaxPrice] = useState(
    params.has("maxPrice")
      ? Math.round(Number(params.get("maxPrice")) * 100) / 100
      : 10000
  );

  const deafultCheck = params.has("productType")
    ? params.get("productType")
    : "All";
  const productType = useRef(null);

  // plarform
  const checkedPlatforms = params.getAll("categories");
  const checkedPlatObject = {};
  checkedPlatforms.forEach((plat) => (checkedPlatObject[plat] = plat));
  const initCheckedPlat = initPlatforms.map((plat) => {
    if (plat in checkedPlatObject) return true;
    else return false;
  });
  const [platforms, setPlatforms] = useState(initCheckedPlat);

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

    if (minPrice > 0) path += "&minPrice=" + Math.round(minPrice * 100) / 100;
    if (maxPrice < 10000)
      path += "&maxPrice=" + Math.round(maxPrice * 100) / 100;

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
          <Checkbox
            label="With discount"
            ischecked={onSaleChecked}
            onChange={handleOnSaleChecked}
          />
          <Checkbox
            label="Free shipping"
            ischecked={freeShipChecked}
            onChange={handleFreeShipChecked}
          />
          <Checkbox
            label="Available stock"
            ischecked={inStockChecked}
            onChange={handleInStockChecked}
          />
        </div>
        <div className="filter-section">
          <h4>Product Type</h4>
          <RadioButtons
            name={"productType"}
            defaultCheck={deafultCheck}
            buttons={productTypes}
            forwardedRef={productType}
          />
        </div>
        <div className="filter-section">
          <h4>Platform</h4>
          {initPlatforms.map((platform, index) => (
            <Checkbox
              key={index}
              ischecked={platforms[index]}
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
              value={minPrice}
              onChange={handleMinChange}
            />
            <div className="filter-range-line"></div>
            <input
              className="filter-input"
              type="number"
              placeholder="$ Max"
              value={maxPrice}
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
