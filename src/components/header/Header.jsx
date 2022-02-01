import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <span
        onClick={() => {
          return window.scroll(0, 0);
        }}
        className="header"
      >
        🎥 نیازمند وی پی ان 🎬
      </span>
    </>
  );
};

export default Header;
