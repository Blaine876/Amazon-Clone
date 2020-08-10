import React from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <MenuIcon className="navbar__menuIcon" />

      <Link to="/">
        <img
          className="navbar__logo"
          src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
        />
      </Link>

      <div className="navbar__search">
        <input type="text" className="navbar__searchInput" />
        <SearchIcon className="navbar__searchIcon" />
      </div>

      <div className="navbar__links">
        <Link className="navbar__link" to="/login">
          <div className="navbar__linkOption">
            <span className="navbar__linkLineOne">Hello, Blaine</span>
            <span className="navbar__linkLineTwo">Account & Lists </span>
          </div>
        </Link>

        <Link className="navbar__link" to="/login">
          <div className="navbar__linkOption">
            <span className="navbar__linkLineOne">Returns</span>
            <span className="navbar__linkLineTwo">& Orders </span>
          </div>
        </Link>

        <Link className="navbar__link" to="/checkout">
          <div className="navbar__linkOption">
            <span></span>
            <span className="navbar__linkLineTwo">Try Prime</span>
          </div>
        </Link>

        <div className="navbar__checkout">
          <Link className="navbar__linkOption" to="/checkout">
            <ShoppingBasketIcon className="navbar__shoppingBasketIcon" />
          </Link>
          <span>0</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
