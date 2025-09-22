import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import Production from "./pages/Production.jsx";
import Distribution from "./pages/Distribution.jsx";
import Auction from "./pages/Auction.jsx";
import Brands from "./pages/Brands.jsx";
import Job from "./pages/Job.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Ethics from "./pages/Ethics.jsx";
import Contact from "./pages/Contact.jsx";
import Support from "./pages/Support.jsx";
import Empresa from "./pages/Empresa";
import Produtos from "./pages/Produtos.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Home from "./pages/Home.jsx";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/production" element={<Production />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/distribution" element={<Distribution />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/code-of-ethics" element={<Ethics />} />
        <Route path="/support" element={<Support />} />
         <Route path="/job" element={<Job />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
