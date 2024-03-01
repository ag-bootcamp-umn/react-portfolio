import { Link } from "react-router-dom";

export default function Nav({ currentPage }) {
  const pages = [
    { page: "About", route: "/" },
    { page: "Portfolio", route: "/portfolio" },
    { page: "Resume", route: "/resume" },
    { page: "Contact", route: "/contact" },
  ];

  return (
    <nav>
      {pages.map(({ page, route }) => (
        <Link
          key={page}
          to={route}
          className={route === currentPage ? "active" : "somethingElse"}
        >
          {page}
        </Link>
      ))}
    </nav>
  );
}
