import { Nav } from "../components";
import { Routes, Route, useLocation } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <header className="header">
        <div className="container">
          <Nav currentPage={props.currentPage} />
        </div>
      </header>
    </>
  );
}
