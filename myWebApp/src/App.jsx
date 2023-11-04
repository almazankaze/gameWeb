import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsMenuOpen } from "./store/navbar/navbar-selector";
import Home from "./routes/home/Home";
import About from "./routes/about/About";

import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Navigation from "./components/navigation/Navigation";

import "./index.scss";

function App() {
  const isMenuOpen = useSelector(selectIsMenuOpen);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <div className={isMenuOpen ? "nav-open-background" : ""}></div>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
