import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Nav({ currentPage, navOpen }) {
  const [isChecked, setIsChecked] = useState(navOpen);
  console.log(isChecked);
  const pages = [
    { page: "About", route: "/" },
    { page: "Portfolio", route: "/portfolio" },
    { page: "Resume", route: "/resume" },
    { page: "Contact", route: "/contact" },
  ];

  function checkHandler() {
    setIsChecked(!isChecked);
  }

  return (
    <>
      <nav className={`nav${isChecked ? " reveal u-overflow-hidden" : ""}`}>
        {pages.map(({ page, route }) => (
          <div className="nav__item" key={page}>
            <Link
              to={route}
              className={route === currentPage ? "active" : ""}
              onClick={checkHandler}
            >
              {page}
            </Link>
          </div>
        ))}
      </nav>
      <div className="hamburger">
        <input
          type="checkbox"
          className="hamburger__checkbox"
          id="nav-toggle"
          checked={isChecked}
          onChange={checkHandler}
        />
        <h4 className="hamburger__title">MENU</h4>
        <label
          htmlFor="nav-toggle"
          className="hamburger__button hamburger__button--corner"
        >
          <span className="hamburger__icon">&nbsp;</span>
        </label>
      </div>
    </>
  );
}
