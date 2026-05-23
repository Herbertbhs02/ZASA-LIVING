import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
      <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About ZASA Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Supporting busy professionals, caregivers, and individuals who want
            to reclaim their time and reduce daily stress.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-2 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Personal Journey */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              Personal Journey
            </h2>
            <p className="leading-relaxed text-gray-700">
              ZASA Services was born from my personal journey as both a working
              parent and a caregiver for aging parents. I understand firsthand
              the exhaustion of balancing a demanding career with home life and
              the importance of spending truly quality time with family.
            </p>

            <p className="leading-relaxed text-gray-700 mt-4">
              I currently assist my own parents in navigating the complexities
              of aging — from mastering new technology to managing daily living
              tasks such as booking travel, arranging appointments, and
              coordinating household contractors. My goal is to help them
              maintain independence without unnecessary stress.
            </p>
          </div>

          {/* Professional Expertise */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              Professional Expertise
            </h2>

            <p className="leading-relaxed text-gray-700 mb-6">
              Beyond personal experience, I am a skilled Project Manager with
              over 20 years of professional expertise.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-lg">Efficiency</h3>
                <p className="text-gray-600">
                  Executing complex tasks on time and within budget.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg">Communication</h3>
                <p className="text-gray-600">
                  Keeping clients and stakeholders informed at every stage.
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-semibold text-lg">Reliability</h3>
                <p className="text-gray-600">
                  Understanding client needs and delivering high-quality
                  results.
                </p>
              </div>
            </div>

            <p className="leading-relaxed text-gray-700 mt-6">
              My background also includes property management, where I have
              handled tenant relations, annual servicing, and emergency repairs
              with professionalism and ease.
            </p>
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-indigo-50 rounded-2xl p-2 mt-6 shadow-sm">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            Community Commitment
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I am deeply rooted in my community and served as a Trustee of the
            Basingstoke Multicultural Forum. This role reinforced my commitment
            to supporting diverse needs with integrity, compassion, and respect.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-md p-2 mt-6">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
            My Mission
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Whether you are a busy professional, someone finding that age is
            limiting daily tasks, or simply someone who wants to reclaim time
            for what matters most, ZASA Services is here to handle the
            day-to-day responsibilities so you don’t have to.
          </p>

          <div className="flex justify-center mt-8">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-md">
                 <Link
                              to="/contact"
                              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
                            >
                                Contact ZASA Services
                            </Link>
            
            </button>
          </div>
        </div>
      </section>
    </div>      


  );
};

export default About;
