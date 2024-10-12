import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/#">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN-UP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
