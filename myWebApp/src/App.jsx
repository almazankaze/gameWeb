import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen } from "./store/navbar/navbar-selector";
import { selectUserIsLoading } from "./store/user/user-selector";
import { getUser } from "./store/user/user-actions";
import Home from "./routes/home/Home";
import ShopSearch from "./routes/shop/ShopSearch";
import About from "./routes/about/About";
import Cart from "./routes/cart/Cart";
import Product from "./routes/product/Product";
import Account from "./routes/settings/Account";
import Authentication from "./routes/auth/Authentication";
import NotFound from "./routes/errors/NotFound";

import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Navigation from "./components/navigation/Navigation";
import ScrollToTop from "./components/scrollup/ScrollToTop";
import ToastMessage from "./components/toast/ToastMessage";
import Modal from "./components/modal/Modal";
import CookiePrompt from "./components/cookiePrompt/CookiePrompt";

import "./index.scss";
import NavigateAuth from "./routes/auth/NavigateAuth";
import Spinner from "./components/spinner/Spinner";

function App() {
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const isLoading = useSelector(selectUserIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      dispatch(getUser());
    };

    checkIsLoggedIn();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <ScrollToTop>
        <Modal />
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<ShopSearch />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products/:id" element={<Product />} />
            <Route
              path="account"
              element={
                <NavigateAuth>
                  <Account />
                </NavigateAuth>
              }
            />
            <Route path="auth" element={<Authentication />} />
            <Route path="notfound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
        <div className={isMenuOpen ? "nav-open-background" : ""}></div>
        <Footer />
        <ScrollUp />
        <CookiePrompt />
        <ToastMessage />
      </ScrollToTop>
    </>
  );
}

export default App;
