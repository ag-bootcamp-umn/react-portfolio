import { useEffect, useState } from "react";
import PageProvider from "./providers/PageProvider";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { About, Contact, Portfolio, Resume } from "./pages";
import { Footer, Header, Nav } from "./components";

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <BrowserRouter>
      <PageProvider>
        <Header className="header" />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </PageProvider>
    </BrowserRouter>
  );
}
