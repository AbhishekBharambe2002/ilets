const Testimonials = () => {
  const reviews = [
    { name: "Aarav Sharma", review: "Thanks to IELTS Academy, I scored Band 8.0! The practice tests were exactly like the real exam." },
    { name: "Sophia Patel", review: "The trainers are super supportive and the AI Band Score helped me track my progress daily." },
    { name: "John", review: "Flexible classes made it easy for me to prepare while working full-time. Highly recommend!" },
  ];

  return (
    <section id="testimonials" className="px-6 md:px-20 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Students Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <p className="text-gray-600 italic mb-4">“{r.review}”</p>
            <h4 className="font-semibold text-gray-800">— {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;