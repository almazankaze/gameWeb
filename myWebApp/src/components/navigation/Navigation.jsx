import { Fragment } from "react";
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
  return (
    <Fragment>
      <div className="navbar">
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
                    <div className="dot"></div>Pc components
                  </Link>
                  <PlayArrowIcon className="nav-arrow-icon" />

                  <div className="menu-right">
                    <h1>Pc Components</h1>
                    <hr></hr>
                    <div className="menu-grid">
                      <div className="menu-grid-item">
                        <p>Motherboards</p>
                      </div>
                      <div className="menu-grid-item">
                        <p>Processors</p>
                      </div>
                      <div className="menu-grid-item">
                        <p>RAM</p>
                      </div>
                      <div className="menu-grid-item">
                        <p>Video Cards</p>
                      </div>
                      <div className="menu-grid-item">
                        <p>Power Supplys</p>
                      </div>
                      <div className="menu-grid-item">
                        <p>Hard Drives</p>
                      </div>
                      <div className="menu-grid-item">
                        <p>SSD</p>
                      </div>
                      <div className="menu-grid-item">
                        <p>Cases</p>
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
                <li>
                  <Link className="sub-link" to="/about">
                    <div className="dot"></div>Printers
                  </Link>
                </li>
                <li className="sidemenu">
                  <Link className="sub-link" to="/about">
                    <div className="dot"></div>Gaming
                  </Link>
                  <PlayArrowIcon className="nav-arrow-icon" />
                </li>
                <li>
                  <Link className="sub-link" to="/about">
                    <div className="dot"></div>Tablets
                  </Link>
                </li>

                <li className="sidemenu">
                  <Link className="sub-link" to="/about">
                    <div className="dot"></div>Software
                  </Link>
                  <PlayArrowIcon className="nav-arrow-icon" />
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/desktops">
                Desktops
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/notebooks">
                Notebooks
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/smartphones">
                Smartphones
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
            <SearchIcon className="navbar-icon" />
          </div>
          <div className="icon-container">
            <ShoppingCartOutlinedIcon className="navbar-icon" />
            <span className="badge"> {cartCount >= 9 ? "9+" : cartCount} </span>
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
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
