import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "../../Sass/cart-dropdown.styles.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Check-Out</CustomButton>
    </div>
  );
};

export default CartDropDown;
