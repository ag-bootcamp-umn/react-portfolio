// import { useEffect, useState } from "react";
import {  Routes, Route, useLocation } from "react-router-dom";
import { About, Contact, Portfolio, Resume } from "./pages";
import { Footer, Header, Nav } from "./components";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <Header currentPage={currentPage}>
        {/* <Nav currentPage={currentPage} /> */}
      </Header >
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </main>
      <Footer />
    </>
  );
}
