import React from "react";

const FlexibleClasses = () => (
  <div className="pt-24 px-6 md:px-20">
    <div className="bg-gradient-to-r from-green-50 to-white p-10 rounded-2xl shadow-md text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800">Flexible Classes</h1>
      <p className="text-gray-600 mt-4">
        Study at your convenience with both online and offline learning modes.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Online Classes</h3>
        <p className="text-gray-600">Join live interactive sessions from anywhere in the world.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Offline Batches</h3>
        <p className="text-gray-600">Attend in-person classes at our professional learning centers.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Custom Schedule</h3>
        <p className="text-gray-600">Morning, evening, or weekend batches to fit your lifestyle.</p>
      </div>
    </div>
  </div>
);

export default FlexibleClasses;
