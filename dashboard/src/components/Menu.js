import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const MenuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo (1).png" style={{ width: "50px" }}></img>
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onclick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu == 0 ? activeMenuClass : MenuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onclick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu == 1 ? activeMenuClass : MenuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onclick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu == 2 ? activeMenuClass : MenuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onclick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu == 3 ? activeMenuClass : MenuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onclick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu == 4 ? activeMenuClass : MenuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onclick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu == 5 ? activeMenuClass : MenuClass}>
                apps
              </p>
            </Link>
          </li>
        </ul>
      <hr/>
      <div className="profile" onclick={handleProfileClick}>
        <div className="avatar">us</div>
        <p className="username">satya</p>
      </div>
    </div>
    </div>
  );
};

export default Menu;

