

import React from "react";

const servicesData = [
  {
    title: "Lifestyle Support",
    image: "images/PersonalLifestyleSupport.png",
    description:
      "In a fast-paced world, essential tasks can often be overlooked. We act as your personal lifestyle advocates, managing the fine details of your schedule so you don't have to. We expertly handle your personal appointments, organise events, book travel and the admin.",
    items: [
      {
        heading: "Diary Management",
        text: " Coordination of all personal appointments, including medical, dental, membership/service cancellation and wellness engagements.",
      },
         {
        heading: "Event Planning",
        text: "Full-scale coordination for private functions, from initial concept and budgeting to venue sourcing and execution. Whether you prefer your event at home or at a venue.",
      },
      {
        heading: "Travel & Concierge",
        text: "Comprehensive booking services for rail, air, and accommodation at home or abroad.",
      },
      {
        heading: "Bespoke Administration",
        text: "Handling time-consuming tasks such as visa applications, passport renewals, and membership management.",
      },
    ],
  },
  {
    title: "Household Management",
    image: "images/HouseholdManagement.png",
    description:
      "Running your home becomes that much easier with structured supported tailored to your lifestyle.  We ensure your home operates at peak efficiency and is maintained exactly to your standards. By first understanding your specific needs and preferences, we execute household tasks with precision and care. ",
    items: [
      {
        heading: "The ''House MOT''",
        text: "A comprehensive property assessment to understand maintenance requirements and establish a customized monthly or annual service schedule (e.g., boiler servicing, gas& electrical certification, gutter cleaning).",
      },
      {
        heading: "Trades and Service Coordination",
        text: "Sourcing and overseeing vetted tradespeople—from plumbers, electricians to window cleaners—to ensure work is completed without disrupting your work or home life.",
      },
      {
        heading: "Errand Services",
        text: "Reliable support for daily necessities, including personal shopping, parcel management, and pet care logistics (including veterinary visits and feeding), we handle the day to day tasks that save you valuable time. ",
      },
    ],
  },
  
  {
    title: "Bespoke Solutions",
    image: "images/Received_a_package.jpg",
    description:
      "While we offer structured service packages, we recognize that every client’s requirements are distinct. At ZASA Living, we pride ourselves on our ability to curate and scale our services to fit your specific lifestyle.",
    items: [
 
    ],
  },

];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            ZASA Living provides time-saving support services for busy
            households, helping you remove the hassle from everyday life and
            reclaim valuable hours in your week.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="max-w-6xl mx-auto px-6 py-14 space-y-14">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-indigo-600 mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-5">
                  {service.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-indigo-500 pl-4"
                    >
                      <h3 className="font-semibold text-lg mb-1">
                        {item.heading}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto bg-indigo-50 rounded-2xl p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">
            Reclaim Your Time
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Whether you need help managing your household, organising your
            lifestyle, or caring for your property, ZASA Living is here to make
            life simpler and less stressful.
          </p>

          <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-md">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;