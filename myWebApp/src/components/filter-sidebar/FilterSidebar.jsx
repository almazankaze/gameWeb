import Checkbox from "../checkbox/Checkbox";
import "./filter-sidebar.scss";

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <div className="filter-title">
        <h3>Filter Search</h3>
      </div>
      <div className="filter-section">
        <h4>Service and Promotion</h4>
        <Checkbox label="With discount" />
        <Checkbox label="Free shipping" />
        <Checkbox label="Available stock" />
      </div>
      <div className="filter-section">
        <h4>Categories</h4>
      </div>
      <div className="filter-section">
        <h4>Platform</h4>
      </div>
      <div className="filter-section">
        <h4>Price Range</h4>
      </div>
    </div>
  );
};

export default FilterSidebar;
