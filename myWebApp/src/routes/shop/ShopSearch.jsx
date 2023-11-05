import SelectBox from "../../components/select-box/SelectBox";
import "./shopSearch.scss";

const ShopSearch = () => {
  return (
    <section className="container">
      <div className="shop-grid">
        <div className=" shop-search-query">
          <h3>
            Results for <span>Fire Emblem</span>
          </h3>
        </div>
        <div className="shop-dropdown-box">
          <SelectBox />
        </div>
        <div className="box shop-sidebar">Sidebar</div>
        <div className="box shop-product">
          Content
          <br /> More content than we had before so this column is now quite
          tall.
        </div>
        <div className="box shop-footer">Footer</div>
      </div>
    </section>
  );
};

export default ShopSearch;
