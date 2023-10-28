import classNames from "classnames";
import { useState, useEffect, Fragment } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectIsMenuOpen,
  selectIsSearchOpen,
} from "../../store/navbar/navbar-selector";
import {
  setIsMenuOpen,
  setIsSearchOpen,
} from "../../store/navbar/navbar-actions";

import SideBar from "./SideBar";
import SearchForm from "../search-form/SearchForm";

import MenuIcon from "@mui/icons-material/Menu";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const isSearchOpen = useSelector(selectIsSearchOpen);
  const [isTopPage, setIsTopPage] = useState(true);

  const searchClassNames = classNames({
    "navsearch-show": isSearchOpen,
    navsearch: !isSearchOpen,
  });

  const cartCount = 8;

  const navigate = useNavigate();

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
                          <p>Nintendo Switch</p>
                        </div>
                        <div className="menu-grid-item">
                          <p>Xbox Series X</p>
                        </div>
                        <div className="menu-grid-item">
                          <p>Playstation 5</p>
                        </div>
                        <div className="menu-grid-item">
                          <p>Handhelds</p>
                        </div>
                        <div className="menu-grid-item">
                          <p>PC</p>
                        </div>
                        <div className="menu-grid-item">
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
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
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
            <div className="icon-container">
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
            <div className="nav-profile-link">
              <Link className="nav-link" to="/auth">
                Sign In
              </Link>
            </div>
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

      <SideBar />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
