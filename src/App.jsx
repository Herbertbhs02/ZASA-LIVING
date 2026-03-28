import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}





// import React from "react";
// import './index.css';
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  import Navbar from './components/Navbar';
// // import Footer from "./components/Footer";
// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Services from "./pages/Services";
// // import Contact from "./pages/Contact";

// export default function App() {
//   return (
//      <div>
    
//     <div className="p-6 bg-blue-600 text-white text-2x1 font-bold rounded-lg">
//       tailwind + Vite works !
//     </div>

//      </div>
//   );
// }