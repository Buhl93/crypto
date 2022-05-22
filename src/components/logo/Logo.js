import React from "react";
import { Link } from "react-router-dom";

import { images } from "../../constants";

import "./Logo.css";

const Logo = () => {
  return (
    <div className="container">
      <Link className="logo" to="/">
        <div className="logoHolder">
          <img src={images.logo} alt="logo_img" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
