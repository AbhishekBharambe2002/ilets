const Footer = () => (
  <footer id="contact" className="bg-blue-600 text-white px-6 md:px-20 py-8 mt-12">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h3 className="text-xl font-bold">IELTS Academy</h3>
        <h4 className="text-l fornt-bold">Phone number-0123456789</h4>
        <h4 className="text-l fornt-bold">Email-iletsclasses@gmail.com</h4>
        <p className="text-sm">© {new Date().getFullYear()} All rights reserved</p>
      </div>
      <div className="space-x-6">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#features" className="hover:underline">Features</a>
        <a href="#testimonials" className="hover:underline">Testimonials</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </div>
  </footer>
);
export default Footer