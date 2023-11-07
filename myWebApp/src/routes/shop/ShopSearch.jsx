import SelectBox from "../../components/select-box/SelectBox";
import ProductCardLong from "../../components/product-card/ProductCardLong";
import FilterSidebar from "../../components/filter-sidebar/FilterSidebar";

import SHOP_DATA from "../../shop-data";

import "./shopSearch.scss";
import Pagination from "../../components/pagination/Pagination";

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
        <div className="shop-sidebar">
          <FilterSidebar />
        </div>
        <div className="shop-product">
          <div className="shop-product-results">
            {SHOP_DATA.map((card) => (
              <ProductCardLong key={card.id} product={card} />
            ))}
          </div>
        </div>
        <div className="box shop-footer">
          <Pagination
            currentPage={1}
            pages={100}
            path={"/shop"}
            loading={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ShopSearch;
