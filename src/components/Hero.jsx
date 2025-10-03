import React, { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && time) {
      setIsOpen(false);
      setSuccess(true);
      setDate("");
      setTime("");
      setTimeout(() => setSuccess(false), 3000); // auto-hide after 3s
    }
  };

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-28 md:pt-32 bg-gradient-to-r from-blue-50 to-white"
    >
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Achieve Your Dream IELTS Band Score
        </h1>
        <p className="text-gray-600 text-lg">
          Join our expert-led IELTS training program with personalized coaching, AI-powered practice, and guaranteed improvement.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          Get Started
        </button>

        {/* Success Alert */}
        {success && (
          <div className="mt-4 px-6 py-3 rounded-md bg-green-100 text-green-800 font-medium shadow-md">
            ✅ Class booked successfully!
          </div>
        )}
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/ieltsbanner.jpeg"
          alt="IELTS Banner"
          className="w-96 md:w-[28rem]"
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-96">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Book a Class
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Select Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
