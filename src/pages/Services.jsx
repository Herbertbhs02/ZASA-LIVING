

import React from "react";

const servicesData = [
  {
    title: "Lifestyle Support",
    image: "images/PersonalLifestyleSupport.png",
    description:
      "With busy lives, some important tasks can simply fall off the list. ZASA Living helps you reclaim your time by managing appointments, organising events, booking travel, and supporting your personal admin needs.",
    items: [
      {
        heading: "Organise Events",
        text: "Whether you're planning a home gathering or an event at a venue, we manage the details based on your criteria and budget.",
      },
      {
        heading: "Travel Booking",
        text: "We arrange rail and airline tickets, accommodation, and travel plans both within the UK and abroad.",
      },
      {
        heading: "Admin Support",
        text: "From visa applications and passport renewals to membership cancellations, we remove the hassle from your admin tasks.",
      },
    ],
  },
  {
    title: "Household Management",
    image: "images/HouseholdManagement.png",
    description:
      "Running your home becomes easier with structured support tailored to your lifestyle. We coordinate household services, organise tradespeople, and ensure everything runs smoothly.",
    items: [
      {
        heading: "House MOT",
        text: "We assess your household needs and create schedules for services such as boiler servicing, maintenance, and cleaning.",
      },
      {
        heading: "Trades & Service Coordination",
        text: "We organise plumbers, cleaners, electricians, and other service providers to ensure your home stays well maintained.",
      },
      {
        heading: "Errands",
        text: "From shopping and parcel collection to pet care and vet visits, we handle the day-to-day tasks that save you valuable time.",
      },
    ],
  },
  {
    title: "Property Care",
    image: "images/Property.png",
    description:
      "ZASA Living provides hassle-free property support services, whether you need project management for home improvements or regular property checks while away.",
    items: [
      {
        heading: "Project Management",
        text: "We oversee home improvement projects and repairs to ensure work is completed efficiently and to a high standard.",
      },
      {
        heading: "Key Holding Service",
        text: "We check on your property while you're away and coordinate contractors or maintenance work on your behalf.",
      },
      {
        heading: "Landlord Support",
        text: "Property inspections and support services designed to help landlords maintain their properties with ease.",
      },
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6">
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