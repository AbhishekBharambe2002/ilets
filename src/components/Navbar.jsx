

const Navbar = () => (
  <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed w-full z-10">
    <div className="text-2xl font-bold text-blue-600">IELTS Academy</div>
    <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
      <li><a href="#home" className="hover:text-blue-600">Home</a></li>
      <li><a href="#features" className="hover:text-blue-600">Features</a></li>
      <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
      <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar
