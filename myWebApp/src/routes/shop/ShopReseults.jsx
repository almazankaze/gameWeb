import { useSelector } from "react-redux";
import {
  selectSearch,
  selectIsLoading,
} from "../../store/products/searchProducts/search-selector";
import Spinner from "../../components/spinner/Spinner";
import ProductCardLong from "../../components/product-card/ProductCardLong";
import Pagination from "../../components/pagination/Pagination";

const ShopReseults = ({ searchQuery }) => {
  const products = useSelector(selectSearch);
  const isLoading = useSelector(selectIsLoading);
  if (!products.result.length && !isLoading)
    return (
      <div className="shop-product text-center">
        <h2>No Results Found</h2>
      </div>
    );

  if (isLoading) return <Spinner />;
  return (
    <>
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
    </>
  );
};

export default ShopReseults;
