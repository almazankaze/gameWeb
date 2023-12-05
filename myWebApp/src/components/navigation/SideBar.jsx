import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HardwareOutlinedIcon from "@mui/icons-material/HardwareOutlined";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { selectUser } from "../../store/user/user-selector";
import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";
import { setIsMenuOpen } from "../../store/navbar/navbar-actions";
import { selectCartCount } from "../../store/cart/cart-selector";

import "./sidebar.scss";

const SideBar = ({ signout }) => {
  const dispatch = useDispatch();
  const [showHardware, setShowHardware] = useState(false);
  const [showPeripherals, setShowPeripherals] = useState(false);
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const cartCount = useSelector(selectCartCount);
  const user = useSelector(selectUser);

  const toggleIsMenuOpen = () => dispatch(setIsMenuOpen(!isMenuOpen));

  useEffect(() => {
    const handleScreenSizeChange = () => {
      if (window.innerWidth > 1250) dispatch(setIsMenuOpen(!isMenuOpen));
    };

    window.addEventListener("resize", handleScreenSizeChange);

    return () => {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, []);

  return (
    <div className={isMenuOpen ? "sidebar show" : "sidebar"}>
      <div className="sidebar-logo-container">
        <h2>1UP Games</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link
            className="side-link sidebar-item"
            to="/"
            onClick={toggleIsMenuOpen}
          >
            <HomeOutlinedIcon className="sidebar-icon" /> Home
          </Link>
        </li>

        <li>
          <Link
            className="side-link sidebar-item"
            to={user ? "/" : "/auth"}
            onClick={toggleIsMenuOpen}
          >
            {user?.thumbnail ? (
              <img
                src={user.thumbnail}
                alt={""}
                className="sidebar-profile-img"
              />
            ) : (
              <PermIdentityOutlinedIcon className="sidebar-icon" />
            )}

            <div className="sidebar-profile">
              {user ? user.username : "Sign In"}
            </div>
          </Link>
        </li>

        <li>
          <div className="align-items">
            <Link
              className="side-link sidebar-item"
              to="/"
              onClick={toggleIsMenuOpen}
            >
              <FavoriteBorderOutlinedIcon className="sidebar-icon" /> Wishlist
            </Link>
            <div className="side-badge">0</div>
          </div>
        </li>
        <li>
          <div className="align-items">
            <Link
              className="side-link sidebar-item"
              to="/cart"
              onClick={toggleIsMenuOpen}
            >
              <ShoppingCartOutlinedIcon className="sidebar-icon" /> Shopping
              Cart
            </Link>
            <div className="side-badge">
              {cartCount >= 9 ? "9+" : cartCount}{" "}
            </div>
          </div>
        </li>
        <li
          className="side-dropdown"
          onClick={() => setShowHardware(!showHardware)}
        >
          <div className="align-items">
            <div className="side-link sidebar-item">
              <HardwareOutlinedIcon className="sidebar-icon" /> Consoles
            </div>
            <ArrowDropDownOutlinedIcon className="side-arrow" />
          </div>
          <ul className={showHardware ? "side-submenu open" : "side-submenu"}>
            <li>Nintendo Switch</li>
            <li>Xbox Series X</li>
            <li>Playstation 5</li>
            <li>PC</li>
            <li>Handhelds</li>
            <li>Retro</li>
          </ul>
        </li>
        <li
          className="side-dropdown"
          onClick={() => setShowPeripherals(!showPeripherals)}
        >
          <div className="align-items">
            <div className="side-link sidebar-item">
              <MouseOutlinedIcon className="sidebar-icon" /> Peripherals
            </div>
            <ArrowDropDownOutlinedIcon className="side-arrow" />
          </div>

          <ul
            className={showPeripherals ? "side-submenu open" : "side-submenu"}
          >
            <li>Mice</li>
            <li>Keyboards</li>
            <li>Mics</li>
            <li>Controllers</li>
            <li>Accessories</li>
          </ul>
        </li>
        <li>
          <Link
            className="side-link sidebar-item"
            to="/"
            onClick={toggleIsMenuOpen}
          >
            <PrintOutlinedIcon className="sidebar-icon" /> Games
          </Link>
        </li>
        <li>
          <Link
            className="side-link sidebar-item"
            to="/"
            onClick={toggleIsMenuOpen}
          >
            <MonitorOutlinedIcon className="sidebar-icon" /> Monitors
          </Link>
        </li>
        <li>
          <Link
            className="side-link sidebar-item"
            to="/"
            onClick={toggleIsMenuOpen}
          >
            <SmartphoneOutlinedIcon className="sidebar-icon" /> Top Deals
          </Link>
        </li>
        <li>
          <Link
            className="side-link sidebar-item"
            to="/"
            onClick={toggleIsMenuOpen}
          >
            <HelpOutlineOutlinedIcon className="sidebar-icon" /> FAQ's
          </Link>
        </li>
        <li>
          <Link
            className="side-link sidebar-item"
            to="/"
            onClick={toggleIsMenuOpen}
          >
            <PhoneOutlinedIcon className="sidebar-icon" /> Contact Us
          </Link>
        </li>

        {user && (
          <li>
            <Link className="side-link sidebar-item" to="/" onClick={signout}>
              <LogoutOutlinedIcon className="sidebar-icon" /> Log Out
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
