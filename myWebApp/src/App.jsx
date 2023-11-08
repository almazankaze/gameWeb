import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsMenuOpen } from "./store/navbar/navbar-selector";
import Home from "./routes/home/Home";
import ShopSearch from "./routes/shop/ShopSearch";
import About from "./routes/about/About";
import Cart from "./routes/cart/Cart";
import Product from "./routes/product/Product";

import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Navigation from "./components/navigation/Navigation";
import ScrollToTop from "./components/scrollup/ScrollToTop";

import "./index.scss";

function App() {
  const isMenuOpen = useSelector(selectIsMenuOpen);

  return (
    <>
      <ScrollToTop>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<ShopSearch />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
        <div className={isMenuOpen ? "nav-open-background" : ""}></div>
        <Footer />
        <ScrollUp />
      </ScrollToTop>
    </>
  );
}

export default App;
