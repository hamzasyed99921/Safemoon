import './App.css';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./components/Layouts/Base";
import Contact from "./Pages/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({duration: 5000});
  }, []);
  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route  path="/contact" element={<Contact />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
}

export default App;
