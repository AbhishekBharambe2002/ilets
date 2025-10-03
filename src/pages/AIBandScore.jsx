import React from "react";

const AIBandScore = () => (
  <div className="pt-24 px-6 md:px-20">
    <div className="bg-gradient-to-r from-purple-50 to-white p-10 rounded-2xl shadow-md text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800">AI Band Score</h1>
      <p className="text-gray-600 mt-4">
        Leverage AI-powered technology for instant band score predictions.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
        <p className="text-gray-600">Submit practice answers and get scores in seconds.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Detailed Insights</h3>
        <p className="text-gray-600">Understand errors in grammar, vocabulary, and fluency instantly.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
        <p className="text-gray-600">Monitor improvement across multiple attempts with analytics.</p>
      </div>
    </div>
  </div>
);

export default AIBandScore;
