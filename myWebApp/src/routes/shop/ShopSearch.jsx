import "./shopSearch.scss";

const ShopSearch = () => {
  return (
    <section className="container">
      <div className="shop-grid">
        <div className="box shop-search-query">Header</div>
        <div className="box shop-dropdown-box">Header</div>
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
