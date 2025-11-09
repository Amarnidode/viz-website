
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Products from "./pages/Products";
// import Services from "./pages/Services";
import Contact from "./components/contact";
import About from "./components/About";
import "./App.css";
import Footer from "./components/Footer";

function App() {
 

  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        

      </Routes> 
      <Footer/>
      </Router>
      
  );
}

export default App;
