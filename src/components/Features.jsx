
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    { title: "Speaking Practice", desc: "Daily 1:1 speaking sessions with certified trainers.", icon: "🎤", path: "/speaking" },
    { title: "Mock Tests", desc: "Full-length practice exams with detailed feedback.", icon: "📄", path: "/mock-tests" },
    { title: "AI Band Score", desc: "Get instant band predictions with our AI system.", icon: "🤖", path: "/ai-band-score" },
    { title: "Flexible Classes", desc: "Online & offline options tailored to your schedule.", icon: "📚", path: "/flexible-classes" },
  ];

  return (
    <section id="features" className="px-6 md:px-20 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Features</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {features.map((f, idx) => (
          <Link
            key={idx}
            to={f.path}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 transition transform"
          >
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Features;
