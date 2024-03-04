import { Nav } from "../components";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

export default function Header(props) {
  const [isChecked, setIsChecked] = useState(false);
  // console.log('state', isChecked)

  function checkHandler() {
    setIsChecked(!isChecked);
  }

  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="header__branding">
            <a href="" className="header__home-link">
              <img className="header__logo" src="" alt="" />
            </a>
          </div>
          <div className="header__container">
            <Nav currentPage={props.currentPage} isChecked={isChecked} />
            <input
              type="checkbox"
              className="hamburger__checkbox"
              id="nav-toggle"
              checked={isChecked}
              onChange={checkHandler}
            />
            <label
              htmlFor="nav-toggle"
              className="hamburger__button hamburger__button--corner"
            >
              <span className="hamburger__icon">&nbsp;</span>
            </label>
          </div>
        </div>
      </header>
    </>
  );
}
