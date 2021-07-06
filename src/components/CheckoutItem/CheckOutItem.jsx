import React from "react";
import "../../Sass/checkout-item.styles.scss";

const CheckOutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="itemImage" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>

      <div className="remove-button">&#10008;</div>
    </div>
  );
};

export default CheckOutItem;
