import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchProducts } from "../../store/products/searchProducts/search-actions";
import SelectBox from "../../components/select-box/SelectBox";
import FilterSidebar from "../../components/filter-sidebar/FilterSidebar";
import ShopReseults from "./ShopReseults";

import "./shopSearch.scss";

const ShopSearch = () => {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const dispatch = useDispatch();

  let query = useQuery();

  let page = +query.get("page");
  if (page === 0) page = 1;

  let searchQuery = query.get("term");
  if (searchQuery === null) searchQuery = "";

  useEffect(() => {
    dispatch(getSearchProducts(searchQuery, page));
  }, [dispatch, query]);

  return (
    <section className="container">
      <div className="shop-grid">
        <div className=" shop-search-query">
          <h3>
            Results for <span>{searchQuery}</span>
          </h3>
        </div>
        <div className="shop-dropdown-box">
          <SelectBox />
        </div>
        <div className="shop-sidebar">
          <FilterSidebar />
        </div>
        <ShopReseults searchQuery={searchQuery} />
      </div>
    </section>
  );
};

export default ShopSearch;
