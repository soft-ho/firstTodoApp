import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";

const Header = ({ searchText, handleSearchNote }) => {
  return (
    <div className="main-header">
      <div className="left-header">
        <FaHome className="home-icon" />
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => handleSearchNote(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>
      <div className="right-header">
        <h3 className="logo">
          Watch<span>Man</span>
        </h3>
      </div>
    </div>
  );
};

export default Header;
