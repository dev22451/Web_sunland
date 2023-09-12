import { useEffect } from "react";
import { About, Contact, Home, RentingService } from "./pages";
import "./scss/includes.scss";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const route = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/renting-services" element={<RentingService />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
