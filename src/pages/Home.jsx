import React from "react";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-0 min-h-screen ">
      {/* Introduction */}
      <section className="grid md:grid-cols-2 gap-8 place-items-start px-6 py-6  bg-[#0B1F3A] ">
        <div>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-0 ">
            ZASA Living is dedicated to reclaiming your time, and reducing the
            complexities of modern life. Reducing stress and supporting you to
            do the things you enjoy with people you love. We provide high-level
            support for your personal, home, and business needs, allowing you to
            focus on what truly matters. Whether you are balancing a demanding
            career with family life, managing the affairs of aging parents, or
            seeking assistance with day to day tasks, our mission is to provide
            seamless and expert solutions tailored to your unique circumstances.
            Services offered include lifestyle support, household management,
            property care and bespoke services.
            <br />
            Whilst we offer a number of service packages, we understand everyone
            one will have their own unique needs and set of circumstances and
            therefore can tailor services to suit.
          </p>
        </div>
        <img
          src="images/Introduction-photo.png"
          alt="hero"
          className="rounded-2xl shadow"
        />
      </section>

      <div className="text-2xl text-center font-bold mt-10 mb-2 mt-2 ">
        Our Services
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Lifestyle support card */}
        <section className=" px-4">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-start text-black">
              Lifestyle Support
            </h3>
            <div class="">
              <img
                src="images/lifestyle.png"
                alt="lifestyle photo"
                className="float-left mr-4 mb-2 h-[7rem] rounded-xl"
              />
              <p>
                In a fast-paced world, essential tasks can often be overlooked.
                We act as your personal lifestyle advocates, managing the fine
                details of your schedule so you don't have to. We expertly
                handle your personal appointments, organise events, book travel
                and the admin.
              </p>
            </div>

            <button className="bg-yellow-600 px-6 py-3 rounded-xl hidden md:block mt-2 h-[3rem]">
              <Link
                to="/services"
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg mb-2  text-black rounded-xl hidden md:block">
                  Learn More
                  <span className="text-sm">→</span>
                </h3>
              </Link>
            </button>
          </div>

          {/* Mobile button BELOW image */}
          <div className="md:hidden w-full">
            <button className=" bg-yellow-600 px-6 py-3 rounded-xl mt-2 h-[3rem]">
              <Link
                to="/services"
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg mb-2  text-black rounded-xl ">
                  Learn More
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
                Running your home becomes that much easier with structured
                supported tailored to your lifestyle. We ensure your home
                operates at peak efficiency and is maintained exactly to your
                standards. By first understanding your specific needs and
                preferences, we execute household tasks with precision and care.
              </p>
            </div>

            <button className="bg-yellow-600 px-6 py-3 rounded-xl hidden md:block mt-2 h-[3rem]">
              <Link
                to="/services"
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg mb-2  text-black rounded-xl hidden md:block">
                  Learn More
                  <span className="text-sm">→</span>
                </h3>
              </Link>
            </button>
          </div>

          {/* Mobile button BELOW image */}
          <div className="md:hidden w-full">
            <button className=" bg-yellow-600 px-6 py-3 rounded-xl mt-2 h-[3rem]">
              <Link
                to="/services"
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg mb-2  text-black rounded-xl ">
                  Learn More
                  <span className="text-sm">→</span>
                </h3>
              </Link>
            </button>
          </div>
        </section>

        {/*PROPERTY--card */}
        <section className=" px-4">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-start  text-black ">
              Property Care
            </h3>
            <div class="prose">
              <img
                src="images/PropertyCare.png"
                alt="PropertyCare photo"
                className="float-left mr-4 mb-2 h-[7rem] w-[12rem] rounded-xl"
              />
              <p className="mt-0">
                ZASA Living provides professional oversight for your primary
                residence, investment properties, or the homes of family
                members. We minimize the stress of property ownership through
                proactive management.
              </p>
            </div>

            <button className="bg-yellow-600 px-6 py-3 rounded-xl hidden md:block m-2 h-[3rem]">
              <Link
                to="/services"
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <h2 className="font-semibold text-lg mb-2  text-black rounded-xl hidden md:block">
                  Learn More
                  <span className="text-sm">→</span>
                </h2>
              </Link>
            </button>
          </div>

          {/* Mobile button BELOW image */}
          <div className="md:hidden w-full">
            <button className=" bg-yellow-600 px-6 py-3 rounded-xl m-2 h-[3rem]">
              <Link
                to="/services"
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg mb-2  text-black rounded-xl ">
                  Learn More
                  <span className="text-sm">→</span>
                </h3>
              </Link>
            </button>
          </div>
        </section>

        {/*Bespoke--card */}
        <section className=" px-4">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-start  text-black ">
              Bespoke Solutions
            </h3>
            <div class="prose">
              <img
                src="images/Received_a_package.jpg"
                alt="PropertyCare photo"
                className="float-left mr-4 mb-2 h-[7rem] w-[12rem] rounded-xl"
              />
              <p className="mt-0">
                While we offer structured service packages, we recognize that
                every client’s requirements are distinct.
              </p>
            </div>

            <button className="bg-yellow-600 px-6 py-3 rounded-xl hidden md:block m-2 h-[3rem]">
              <Link
                to="/services"
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <h2 className="font-semibold text-lg mb-2  text-black rounded-xl hidden md:block">
                  Learn More
                  <span className="text-sm">→</span>
                </h2>
              </Link>
            </button>
          </div>

          {/* Mobile button BELOW image */}
          <div className="md:hidden w-full">
            <button className=" bg-yellow-600 px-6 py-3 rounded-xl m-2 h-[3rem]">
              <Link
                to="/services"
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg mb-2  text-black rounded-xl ">
                  Learn More
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
