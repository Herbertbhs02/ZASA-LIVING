import React from "react";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    
    <div className="p-0 min-h-screen ">

       {/* Introduction */}
      <section className="grid md:grid-cols-2 gap-8 items-center px-6 py-10  bg-[#0B1F3A] ">
        <div>
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
            Introduction
          </h1>
          <p className="text-white mb-6">
            ZASA Living is on a mission to save you time and reduce stress, so you spend your time doing things you enjoy with people you love.
             Our services focus on the personal, the home and business. Whether you are balancing a busy home and work, juggling multiples-yours
              and your parent’s, or with the passing of time you are no longer able to do those day to day tasks, we are here to make life easier. 
               Services include lifestyle support, household management, administration and property care.<br/>
               Whilst we offer a number of service packages, we understand everyone one will have their own unique needs and set of circumstances and 
            therefore can tailor services to suit. 
            
          </p>

         
        </div>
        <img
          src="images/bg-photo.png"
          alt="hero"
          className="rounded-2xl shadow"
        />
         
         
      </section>



      <div className="text-2xl text-center font-bold mt-10 mb-2 mt-2 ">Services Offered</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
           {/* Lifestyle support card */}
          <section className=" px-4">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-start text-black">
            Lifestyle Support 
          </h3>
           <div class="prose">
               <img
                src="images/lifestyle.png"
                alt="lifestyle photo"
                className="float-left mr-4 mb-2 h-[7rem] rounded-xl"
              />
          <p>
            With busy lives some items can simply fall off the list as there is not enough time in the day to manage all the activities and 
            events which are part of living. We give you back your time, we handle your personal appointments, organise events, book travel
            and support you with your admin.  
          </p>
            </div>

          <button className="bg-yellow-600 px-6 py-3 rounded-xl hidden md:block mt-2">
            <Link to="/services" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-lg mb-2  text-black rounded-xl hidden md:block">Learn More
                <span className="text-sm">→</span>
              </h3>
            </Link>
          </button>
         
        </div>
     
         {/* Mobile button BELOW image */}
          <div className="md:hidden w-full">
            <button className=" bg-yellow-600 px-6 py-3 rounded-xl mt-2">
                <Link to="/services" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-lg mb-2  text-black rounded-xl ">Learn More
                <span className="text-sm">→</span>
              </h3>
            </Link>
            </button>
          </div>
         
      </section>

          {/*household--card */}
        <section className=" px-4">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-start text-black">
            Household Management 
          </h3>
           <div class="prose">
               <img
                src="images/Household.png"
                alt="household photo"
                className="float-left mr-4 mb-2 h-[7rem] rounded-xl"
              />
          <p>
            Running your home becomes that much easier, we focus on ensuring household tasks get done when needed and in a manner in which you prefer.
            Our aim is to first understand your needs and requirements are, then executing them accordingly.
          </p>
            </div>

          <button className="bg-yellow-600 px-6 py-3 rounded-xl hidden md:block mt-2">
            <Link to="/services" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-lg mb-2  text-black rounded-xl hidden md:block">Learn More
                <span className="text-sm">→</span>
              </h3>
            </Link>
          </button>
         
        </div>
     
         {/* Mobile button BELOW image */}
          <div className="md:hidden w-full">
            <button className=" bg-yellow-600 px-6 py-3 rounded-xl mt-2">
                <Link to="/services" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-lg mb-2  text-black rounded-xl ">Learn More
                <span className="text-sm">→</span>
              </h3>
            </Link>
            </button>
          </div>
         
      </section>

       {/*PROPERTY--card */}
       <section className=" px-4">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-start text-black">
            Property Care  
          </h3>
           <div class="prose">
               <img
                src="images/PropertyCare.png"
                alt="PropertyCare photo"
                className="float-left mr-4 mb-2 h-[7rem] w-[12rem] rounded-xl"
              />
          <p>
            ZASA Living is geared towards helping resolve the issues with your property in a hassle free manner. The type of works needed
             and service you required will shape the support we provide. <br/>
            Our services range from Project Managing works on your behalf to a Key Holding service that ensures that your commissioned work is completed.

          </p>
            </div>

          <button className="bg-yellow-600 px-6 py-3 rounded-xl hidden md:block mt-2">
            <Link to="/services" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-lg mb-2  text-black rounded-xl hidden md:block">Learn More
                <span className="text-sm">→</span>
              </h3>
            </Link>
          </button>
         
        </div>
     
         {/* Mobile button BELOW image */}
          <div className="md:hidden w-full">
            <button className=" bg-yellow-600 px-6 py-3 rounded-xl mt-2">
                <Link to="/services" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-lg mb-2  text-black rounded-xl ">Learn More
                <span className="text-sm">→</span>
              </h3>
            </Link>
            </button>
          </div>
         
      </section>
      </div>
    </div>
  );
};

export default Home;

