import React from "react";
import { useSelector } from "react-redux";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

import { AppState } from "../../types";
import Search from "../Search/Search";
import CartMenu from "../CartMenu/CartMenu";
import "../../styles/appbar.css";

interface AppbarProps {
  onClick: Function;
  drawerState: boolean;
}

const Appbar = (props: AppbarProps) => {
  //cart
  const cart = useSelector((state: AppState) => state.cartReducer.cart);
  //cart menu open related state and functions
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const handleCartMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCartMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="appbar">
      <div className="appbar__content-container">
        <div className="appbar__content-left">
          <img
            src={process.env.PUBLIC_URL + "/images/country-icon.svg"}
            alt="country api text"
          />
        </div>
        <div className="appbar__content-search">
          <Search />
        </div>
        <div className="appbar__content-right">
          <CartMenu
            cart={cart}
            onClick={handleCartMenuClose}
            menuOpen={menuOpen}
            anchorEl={anchorEl}
          />
          <div className="appbar__content-cart" onClick={handleCartMenuClick}>
            <BookmarkAddedIcon className="cursor-pointer" />
            <div
              className={`appbar__content-cart-counter cursor-pointer ${
                cart.length > 0 ? "active" : ""
              }`}
            >
              {cart && cart.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
