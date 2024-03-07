import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PageContext = createContext();

export const usePageContext = () => useContext(PageContext);

export default function PageProvider({ children }) {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <PageContext.Provider
      value={{ currentPage, setCurrentPage, menuOpen, setMenuOpen }}
    >
      {children}
    </PageContext.Provider>
  );
}
