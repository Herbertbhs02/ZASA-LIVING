import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xwvjywwo", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      setSubmitted(true);
      e.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Reclaim Your Time- Contact Us
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We aim to get back to you within 24 hours of submitting your
            enquiry. Alternatively, give us a call on 07841598371
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-8 text-center">
            Send an Enquiry
          </h2>

          {/*message after submit */}
          {submitted && (
            <div className="mb-6 rounded-lg bg-green-100 border border-green-300 p-4 text-green-800">
              Thank you for your enquiry. We will get back to you within 24
              hours.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-700"
              >
                Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label
                htmlFor="contactNumber"
                className="block mb-2 font-medium text-gray-700"
              >
                Contact Number *
              </label>
              <input
                id="contactNumber"
                type="tel"
                name="contactNumber"
                required
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-700"
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Services Required */}
            <div>
              <label className="block mb-3 font-medium text-gray-700">
                Services Required
              </label>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="services[]"
                    value="Lifestyle Support"
                    className="h-4 w-4 text-indigo-600"
                  />
                  <span>Lifestyle Support</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="services[]"
                    value="Household Management"
                    className="h-4 w-4 text-indigo-600"
                  />
                  <span>Household Management</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="services[]"
                    value="Property Care"
                    className="h-4 w-4 text-indigo-600"
                  />
                  <span>Property Care</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="services[]"
                    value="Other"
                    className="h-4 w-4 text-indigo-600"
                  />
                  <span>Bespoke Solutions</span>
                </label>
              </div>
            </div>

            {/* Additional Comments */}
            <div>
              <label
                htmlFor="comments"
                className="block mb-2 font-medium text-gray-700"
              >
                Additional Comments
              </label>

              <textarea
                id="comments"
                name="comments"
                rows="3"
                placeholder="Please provide a brief description of how we can help..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Hidden Subject Field */}
            <input type="hidden" name="_subject" value="New Website Enquiry" />

            {/* Hidden Subject Field  for formspree to detect bots*/}
            <div style={{ display: "none" }}>
              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0B1F3A] hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          <div className="mt-8 text-center text-gray-600">
            <p>
              We aim to get back to you within 24 hours of submitting your
              enquiry.
            </p>
            <p className="mt-2">Alternatively, give us a call.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
