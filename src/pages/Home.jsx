import React from "react";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    
    <div className="p-6 min-h-screen bg-[url('/images/Household.png')] bg-cover bg-center bg-no-repeat">
      <div className=" text-black  rounded-lg"  >
        <h1 className="text-3xl font-bold mb-4 text-center ">Introduction</h1>
        <p className=" mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <h2 className="text-2xl text-center font-bold mt-10 mb-6">Services Offered</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
           {/* Lifestyle support card */}
         <div>
            <Link to="/services" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition ">
            <h3 className="font-bold text-lg mb-2 text-start ">LIFESTYLE SUPPORT</h3>
            </Link>
              <div className="p-0">
                  <ul className="list-disc pl-1">
                    <li>consectetur adipiscing elit.</li>
                    <li>consectetur adipiscing elit.</li>
                    <li>consectetur adipiscing elit.</li>
                  </ul>
              </div>
          </div>
          {/*household--card */}
        <div>
          <Link to="/services" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <h3 className="font-bold text-lg mb-2 text-start">HOUSEHOLD</h3>
          </Link>   
              <div className="p-1">
                  <ul className="list-disc pl-1">
                    <li>consectetur adipiscing elit.</li>
                    <li>consectetur adipiscing elit.</li>
                    <li>consectetur adipiscing elit.</li>
                  </ul>
              </div>
            
        </div>
       {/*PROPERTY--card */}
          <div>
            <Link to="/services" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <h3 className="font-bold text-lg mb-2 text-start">PROPERTY</h3>
            </Link>
                  <div className="p-1">
                      <ul className="list-disc pl-1">
                        <li>consectetur adipiscing elit.</li>
                        <li>consectetur adipiscing elit.</li>
                        <li>consectetur adipiscing elit.</li>
                      </ul>
                  </div>
          </div>
      </div>
    </div>
  );
};

export default Home;

