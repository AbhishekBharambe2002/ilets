import React from "react";

const SpeakingPractice = () => (
  <div className="pt-24 px-6 md:px-20">
    <div className="bg-gradient-to-r from-blue-50 to-white p-10 rounded-2xl shadow-md text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800">Speaking Practice</h1>
      <p className="text-gray-600 mt-4">
        Daily 1:1 speaking sessions with certified trainers. Improve fluency, pronunciation, and confidence.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">1:1 Coaching</h3>
        <p className="text-gray-600">Personalized feedback to eliminate hesitation and boost confidence.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Group Discussions</h3>
        <p className="text-gray-600">Interactive sessions to enhance quick thinking and idea generation.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Accent Training</h3>
        <p className="text-gray-600">Learn to maintain a natural, neutral accent for clarity in exams.</p>
      </div>
    </div>
  </div>
);

export default SpeakingPractice;
