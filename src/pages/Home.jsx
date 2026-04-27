import React from "react";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    
    <div className="p-6 min-h-screen bg-[url('/images/Household.png')] bg-cover bg-center bg-no-repeat">
      <div className=" text-black  rounded-lg"  >
        <h1 className="text-3xl font-bold mb-4 text-center ">Introduction</h1>
        <p className=" mx-auto">
          ZASA Living is on a mission to save you time and reduce stress, so you spend your time doing things you enjoy with people you love. Our services focus on the personal, the home and business. Whether you are balancing a busy home and work, juggling multiples-yours and your parent’s, or with the passing of time you are no longer able to do those day to day tasks, we are here to make life easier.  Services include lifestyle support, household management, administration and property care. 
Whilst we offer a number of service packages, we understand everyone one will have their own unique needs and set of circumstances and therefore can tailor services to suit. 

        </p>
      </div>

      <h2 className="text-2xl text-center font-bold mt-10 mb-6">Services Offered</h2>

      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
           {/* Lifestyle support card */}
         <div>
            <Link to="/services" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition ">
              <h3 className="font-semibold text-lg mb-2 text-start text-blue-600 ">LIFESTYLE SUPPORT
                <span className="text-sm">→</span>
              </h3>
            </Link>
              <div className="p-0">
                  <ul className="list-disc pl-1">
                    <li>Personal Appointment</li>
                    <li>Organise Events</li>
                    <li>Admin</li>
                  </ul>
              </div>
          </div>
          {/*household--card */}
        <div>
          <Link to="/services" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2 text-start text-blue-600">HOUSEHOLD MANAGEMENT
              <span className="text-sm">→</span>
            </h3>
          </Link>   
              <div className="p-1">
                  <ul className="list-disc pl-1">
                    <li>Household MOT</li>
                    <li>Tradesmen and Services</li>
                     <li>Pets to Vets</li>
                    <li>Organise Annual Services</li>
                  </ul>
              </div>
            
        </div>
       {/*PROPERTY--card */}
          <div>
            <Link to="/services" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-lg mb-2 text-start text-blue-600">CORDINATION AND PROPERTY CARE
                <span className="text-sm">→</span>
              </h3>
            </Link>
                  <div className="p-1">
                      <ul className="list-disc pl-1">
                        <li>Project Manage Works</li>
                        <li>Key Holding Services</li>
                        <li>House Check whilst away</li>
                      </ul>
                  </div>
          </div>
      </div>
    </div>
  );
};

export default Home;

