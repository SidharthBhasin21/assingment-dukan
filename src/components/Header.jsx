import { QuestionCircleOutlined } from "@ant-design/icons";
import React from "react";
import search from "../assets/icons/search.png";
import group from "../assets/icons/Group.png";
import menu from "../assets/icons/Menu.png";
const Header = () => {
  return (
    <div className="header-container">
      <div className="payments-container">
        <h3>Payments</h3>
        <p>
          <QuestionCircleOutlined /> How it works
        </p>
      </div>

      <div className="search-container">
        <img src={search} alt="search" />
        <input type="text" placeholder="Search features, tutorials, etc." />
      </div>

      <div className="icons-container">
        <div className="group">
          <img src={group} alt="group" />
        </div>
        <div className="menu">
          <img src={menu} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Header;
