import React from "react";

const MockTests = () => (
  <div className="pt-24 px-6 md:px-20">
    <div className="bg-gradient-to-r from-yellow-50 to-white p-10 rounded-2xl shadow-md text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800">Mock Tests</h1>
      <p className="text-gray-600 mt-4">
        Simulated IELTS exams with detailed scoring to track your readiness.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Real Exam Pattern</h3>
        <p className="text-gray-600">Practice with the same structure and timing as the official IELTS exam.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Performance Reports</h3>
        <p className="text-gray-600">Get detailed analytics on strengths and areas needing improvement.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Band Score Estimation</h3>
        <p className="text-gray-600">Predict your expected band score before the actual test.</p>
      </div>
    </div>
  </div>
);

export default MockTests;
