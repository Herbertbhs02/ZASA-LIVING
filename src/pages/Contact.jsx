import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    serviceRequired: "",
    postcode: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect to Formspree, EmailJS, or your backend API here
    console.log(formData);

    alert("Thank you for your enquiry. We will get back to you shortly.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We aim to get back to you within 24 hours of submitting your
            enquiry. Alternatively, give us a call.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
          <h2 className="text-2xl font-bold text-indigo-600 mb-8 text-center">
            Send an Enquiry
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium">
                Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block mb-2 font-medium">
                Contact Number *
              </label>
              <input
                type="tel"
                name="contactNumber"
                required
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email address"
              />
            </div>

            {/* Service Required */}
            <div>
              <label className="block mb-2 font-medium">
                Service Required *
              </label>
              <select
                name="serviceRequired"
                required
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select a service</option>
                <option value="Lifestyle Support">
                  Lifestyle Support
                </option>
                <option value="Household Management">
                  Household Management
                </option>
                <option value="Property Care">
                  Property Care
                </option>
                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* Postcode */}
            <div>
              <label className="block mb-2 font-medium">
                Postcode *
              </label>
              <input
                type="text"
                name="postcode"
                required
                value={formData.postcode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your postcode"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Submit Enquiry
            </button>
          </form>

          <div className="mt-8 text-center text-gray-600">
            <p>
              We aim to get back to you within 24 hours of submitting your
              enquiry.
            </p>
            <p className="mt-2">
              Alternatively, give us a call.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
