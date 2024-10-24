import "./cart-dropdown.scss";
import Button from "../button/Button";

import React from "react";

const Cartdropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default Cartdropdown;
