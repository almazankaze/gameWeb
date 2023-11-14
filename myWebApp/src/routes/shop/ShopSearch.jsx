import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectSearch,
  selectIsLoading,
} from "../../store/products/searchProducts/search-selector";
import { getSearchProducts } from "../../store/products/searchProducts/search-actions";
import SelectBox from "../../components/select-box/SelectBox";
import ProductCardLong from "../../components/product-card/ProductCardLong";
import FilterSidebar from "../../components/filter-sidebar/FilterSidebar";
import Spinner from "../../components/spinner/Spinner";

import SHOP_DATA from "../../shop-data";

import "./shopSearch.scss";
import Pagination from "../../components/pagination/Pagination";

const ShopSearch = () => {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const dispatch = useDispatch();

  let query = useQuery();

  let page = +query.get("page");
  if (page === 0) page = 1;

  const offset = page * 18 - 18;

  let searchQuery = query.get("term");
  if (searchQuery === null) searchQuery = "";

  useEffect(() => {
    dispatch(getSearchProducts(searchQuery, page));
  }, [dispatch, query]);

  const products = useSelector(selectSearch);
  const isLoading = useSelector(selectIsLoading);

  if (!products.result.length && !isLoading)
    return (
      <section className="container text-center">
        <h2>No results found</h2>
      </section>
    );

  if (isLoading) return <Spinner />;
  else
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
          <div className="shop-product">
            <div className="shop-product-results">
              {products.result.map((card) => (
                <ProductCardLong key={card._id} product={card} />
              ))}
            </div>
          </div>
          <div className="box shop-footer">
            <Pagination
              currentPage={products.page}
              pages={products.pages}
              search={searchQuery}
            />
          </div>
        </div>
      </section>
    );
};

export default ShopSearch;
