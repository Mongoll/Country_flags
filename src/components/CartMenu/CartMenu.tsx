import React from "react";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeCountryFromCart } from "../../redux/actions";
import "../../styles/cartmenu.css";

type CartMenuProps = {
  cart: {}[];
  onClick: Function;
  menuOpen: boolean;
  anchorEl: null | HTMLElement;
};

const CartMenu = ({ cart, onClick, menuOpen, anchorEl }: CartMenuProps) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    onClick();
  };

  return (
    <div className="cart-menu">
      <Menu
        className="cart-menu__menu"
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={menuOpen}
        onClose={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <h2>Favorit countries</h2>
        {/* items */}
        <div className="cart-menu__menu-items">
          {/* each item/country */}
          {cart.length === 0 && (
            <div className="cart-menu__empty">
              <h2>No items in the cart</h2>
            </div>
          )}
          {cart &&
            cart.map((country: any) => (
              <div className="cart-menu__menu-item">
                <img src={country.flags.png} alt={country.name} />

                <Link to={`/${country.name}`}>
                  <h2>{country.name}</h2>
                </Link>
                <DeleteIcon
                  className="cart-menu__delete-icon"
                  onClick={() => dispatch(removeCountryFromCart(country))}
                />
              </div>
            ))}
        </div>
      </Menu>
    </div>
  );
};

export default CartMenu;
