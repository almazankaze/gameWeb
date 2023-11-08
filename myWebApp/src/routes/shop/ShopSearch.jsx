import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SelectBox from "../../components/select-box/SelectBox";
import ProductCardLong from "../../components/product-card/ProductCardLong";
import FilterSidebar from "../../components/filter-sidebar/FilterSidebar";

import SHOP_DATA from "../../shop-data";

import "./shopSearch.scss";
import Pagination from "../../components/pagination/Pagination";

const ShopSearch = () => {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  let page = +query.get("page");
  if (page === 0) page = 1;

  const offset = page * 18 - 18;

  let searchQuery = query.get("searchQuery");
  if (searchQuery === null) searchQuery = "";

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
            currentPage={page}
            pages={100}
            path={`/shop?searchQuery=${""}&`}
            loading={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ShopSearch;
