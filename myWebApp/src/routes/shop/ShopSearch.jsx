import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchProducts } from "../../store/products/searchProducts/search-actions";
import SelectBox from "../../components/select-box/SelectBox";
import FilterSidebar from "../../components/filter-sidebar/FilterSidebar";
import ShopReseults from "./ShopResults";

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

  const onSale = query.get("onSale") || false;
  const freeShip = query.get("freeShip") || false;
  const inStock = query.get("inStock") || false;
  const productType = query.get("productType") || "All";
  const categories = query.getAll("categories") || "";
  const minPrice = query.get("minPrice") || 0;
  const maxPrice = query.get("maxPrice") || 10000;

  useEffect(() => {
    dispatch(
      getSearchProducts(
        searchQuery,
        onSale,
        freeShip,
        inStock,
        productType,
        categories,
        minPrice,
        maxPrice,
        page
      )
    );
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
          <FilterSidebar searchQuery={searchQuery} />
        </div>
        <ShopReseults searchQuery={searchQuery} />
      </div>
    </section>
  );
};

export default ShopSearch;
