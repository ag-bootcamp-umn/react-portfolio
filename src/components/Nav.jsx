import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Nav({currentPage, isChecked}) {
  console.log(isChecked)
  const pages = [
    { page: "About", route: "/" },
    { page: "Portfolio", route: "/portfolio" },
    { page: "Resume", route: "/resume" },
    { page: "Contact", route: "/contact" },
  ];

  return (
    <nav className={`nav${isChecked? ' reveal u-overflow-hidden': ''}`}>
      {pages.map(({ page, route }) => (
        <div className="nav__item" key={page}>
        <Link
          
          to={route}
          className={route === currentPage ? "active" : ""}
        >
          {page}
        </Link>
        </div>
      ))}
    </nav>
  );
}
