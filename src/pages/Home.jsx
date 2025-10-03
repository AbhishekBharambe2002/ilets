import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

const Home = () => (
  <div className="font-sans">
    <Navbar />
    <Hero />
    <Features />
    <Testimonials />
  </div>
);

export default Home;
