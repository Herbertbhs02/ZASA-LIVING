
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-500 shadow-md py-2 px-2 rounded ">
      <div className="flex justify-between items-center">
        <div className="mb-0 ">
          {/* <div className="w-8 h-8 bg-blue-500 rounded-full" /> */}
          <img src='images/ZASA-LIVING-logo2.png' alt='Log' className=" h-[5rem] object-contain" />
        </div>
       <div className=" items-center text-x1 font-extrabold">ZASA-LIVING</div>
        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col mt-4 gap-2 md:hidden">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

