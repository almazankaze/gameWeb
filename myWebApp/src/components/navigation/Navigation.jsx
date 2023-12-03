import classNames from "classnames";
import { useState, useEffect, Fragment } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../store/user/user-selector";
import {
  selectIsMenuOpen,
  selectIsSearchOpen,
  selectNavPath,
} from "../../store/navbar/navbar-selector";
import {
  setIsMenuOpen,
  setIsSearchOpen,
  setNavPath,
} from "../../store/navbar/navbar-actions";
import { setIsModalOpen } from "../../store/modal/modal-actions";
import { logout } from "../../store/user/user-actions";

import { selectCartCount } from "../../store/cart/cart-selector";

import SideBar from "./SideBar";
import SearchForm from "../search-form/SearchForm";
import DropDownContainer from "../drop-down/DropDownContainer";
import DropDown, { DROPDOWN_TYPE_CLASSES } from "../drop-down/DropDown";

import MenuIcon from "@mui/icons-material/Menu";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import ps5Pic from "../../assets/home-images/temp.png";
import "./navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const isSearchOpen = useSelector(selectIsSearchOpen);
  const cartCount = useSelector(selectCartCount);
  const [isTopPage, setIsTopPage] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const prevPath = useSelector(selectNavPath);
  const user = useSelector(selectUser);

  useEffect(() => {
    const currentPath = location.pathname + location.search;

    if (currentPath === "/auth" && prevPath.current === "/auth") {
      dispatch(setNavPath(currentPath, "/"));
    } else dispatch(setNavPath(currentPath, prevPath.current));

    dispatch(setIsSearchOpen(false));
    dispatch(setIsModalOpen(false));
  }, [location]);

  const signMeOut = async () => {
    dispatch(setIsSearchOpen(false));
    dispatch(setIsMenuOpen(false));
    dispatch(logout()).then(() => {
      navigate("/auth");
    });
  };

  const searchClassNames = classNames({
    "navsearch-show": isSearchOpen,
    navsearch: !isSearchOpen,
  });

  const goToCartHandler = () => {
    navigate("/cart");
  };

  const toggleIsMenuOpen = () => {
    dispatch(setIsSearchOpen(false));
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  const toggleIsSearchOpen = () => {
    dispatch(setIsMenuOpen(false));
    dispatch(setIsSearchOpen(!isSearchOpen));
  };

  useEffect(() => {
    const handleNavIsTop = () => {
      window.pageYOffset > 10 ? setIsTopPage(false) : setIsTopPage(true);
    };

    window.addEventListener("scroll", handleNavIsTop);

    return () => {
      window.removeEventListener("scroll", handleNavIsTop);
    };
  }, []);
  return (
    <Fragment>
      <div className="navbar-container">
        <div className={isTopPage ? "navbar" : "navbar navbar-scrolling"}>
          <div className="navbar-left">
            <Link to="/" className="navbar-logo-container">
              <SportsEsportsIcon className="navbar-logo" />
              <h2>1UP Games</h2>
            </Link>
          </div>

          <div className="navbar-middle pull-left">
            <ul className="navbar-links">
              <li className="submenu">
                <div className="nav-link">Products</div>
                <ul className="dropdown-menu">
                  <li className="sidemenu">
                    <Link className="sub-link" to="/components">
                      <div className="dot"></div>Consoles
                    </Link>
                    <PlayArrowIcon className="nav-arrow-icon" />

                    <div className="menu-right">
                      <h1>Consoles</h1>
                      <hr></hr>
                      <div className="menu-grid">
                        <div className="menu-grid-item">
                          <img src={ps5Pic} alt="ps5" />
                          <p>Nintendo Switch</p>
                        </div>
                        <div className="menu-grid-item">
                          <img src={ps5Pic} alt="ps5" />
                          <p>Xbox Series X</p>
                        </div>
                        <div className="menu-grid-item">
                          <img src={ps5Pic} alt="ps5" />
                          <p>Playstation 5</p>
                        </div>
                        <div className="menu-grid-item">
                          <img src={ps5Pic} alt="ps5" />
                          <p>Handhelds</p>
                        </div>
                        <div className="menu-grid-item">
                          <img src={ps5Pic} alt="ps5" />
                          <p>PC</p>
                        </div>
                        <div className="menu-grid-item">
                          <img src={ps5Pic} alt="ps5" />
                          <p>Retro</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="sidemenu">
                    <Link className="sub-link" to="/about">
                      <div className="dot"></div>Peripherals
                    </Link>
                    <PlayArrowIcon className="nav-arrow-icon" />
                  </li>
                  <li>
                    <Link className="sub-link" to="/about">
                      <div className="dot"></div>Monitors
                    </Link>
                  </li>

                  <li className="sidemenu">
                    <Link className="sub-link" to="/about">
                      <div className="dot"></div>Games
                    </Link>
                    <PlayArrowIcon className="nav-arrow-icon" />
                  </li>
                  <li>
                    <Link className="sub-link" to="/about">
                      <div className="dot"></div>Digital Codes
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <DropDownContainer>
                  <div className="nav-link">Categories</div>
                  <DropDown
                    className="drop-down"
                    dropdownType={DROPDOWN_TYPE_CLASSES.multicol}
                    itemList={[
                      "Action",
                      "Arcade",
                      "First-Person Shooter",
                      "JRPG",
                      "Strategy",
                      "Hack and Slash",
                      "Platformer",
                      "Racing",
                      "Sports",
                      "Puzzle",
                      "Dating",
                      "Third-Person Shooter",
                    ]}
                    numCols={4}
                  />
                </DropDownContainer>
              </li>
              <li>
                <Link className="nav-link" to="/top-deals">
                  Top Deals
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-right">
            <div className="icon-container">
              <SearchIcon
                className="navbar-icon"
                onClick={toggleIsSearchOpen}
              />
            </div>
            <div className="icon-container" onClick={goToCartHandler}>
              <ShoppingCartOutlinedIcon className="navbar-icon" />
              <span className="badge">
                {" "}
                {cartCount >= 9 ? "9+" : cartCount}{" "}
              </span>
            </div>
            <div className="icon-container">
              <FavoriteBorderIcon className="navbar-icon" />
              <span className="badge"> 0 </span>
            </div>
            {user ? (
              <div className="nav-profile-link">
                <div className="nav-profile-name nav-link">{user.username}</div>
                <ul className="nav-profile-menu">
                  <li className="nav-link">Settings</li>
                  <li className="nav-link" onClick={signMeOut}>
                    Logout
                  </li>
                </ul>
              </div>
            ) : (
              <div className="right-link">
                <Link className="nav-link" to="/auth">
                  Sign In
                </Link>
              </div>
            )}
          </div>
          <div className="mobile-nav-right">
            <SearchIcon className="navbar-icon" onClick={toggleIsSearchOpen} />
            <MenuIcon className="navbar-icon" onClick={toggleIsMenuOpen} />
          </div>
        </div>
        <div className={searchClassNames}>
          <SearchForm />
        </div>
      </div>

      <SideBar signout={signMeOut} />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
