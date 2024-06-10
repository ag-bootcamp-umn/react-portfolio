import { useEffect, useState } from "react";
import PageProvider from "./providers/PageProvider";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Footer, Header, Nav } from "./components";

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <BrowserRouter>
      <PageProvider>
        <div className="page-container">
          <Header className="header" />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </PageProvider>
    </BrowserRouter>
  );
}
