import { useState } from "react";
import Checkbox from "../checkbox/Checkbox";
import "./filter-sidebar.scss";

const FilterSidebar = () => {
  const [showFilter, setShowFilter] = useState(false);

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
          <Checkbox label="With discount" />
          <Checkbox label="Free shipping" />
          <Checkbox label="Available stock" />
        </div>
        <div className="filter-section">
          <h4>Product Type</h4>
          <Checkbox label="Accessories" />
          <Checkbox label="Consoles" />
          <Checkbox label="Games" />
          <Checkbox label="Online Currency" />
        </div>
        <div className="filter-section">
          <h4>Platform</h4>
          <Checkbox label="Playstation 5" />
          <Checkbox label="Xbox" />
          <Checkbox label="Nintendo Switch" />
          <Checkbox label="PC" />
          <Checkbox label="Handheld" />
          <Checkbox label="Retro" />
        </div>
        <div className="filter-section">
          <h4>Price Range</h4>
          <div className="filter-price-range">
            <input className="filter-input" type="number" placeholder="$ Min" />
            <div className="filter-range-line"></div>
            <input className="filter-input" type="number" placeholder="$ Max" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
