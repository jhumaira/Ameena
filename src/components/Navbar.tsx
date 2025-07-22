import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="text-2xl font-serif text-brand-dark">Sakinah Academy</div>

      <ul className="hidden sm:flex gap-6 font-serif items-center text-brand-forest">
        <li><a href="#" className="hover:text-brand-rose">Home</a></li>
        <li><a href="#courses" className="hover:text-brand-rose">Courses</a></li>
        <li><a href="#schedule" className="hover:text-brand-rose">Schedule Now</a></li>
        <li><a href="#teachers" className="hover:text-brand-rose">Teachers</a></li>
        <li><a href="#contact" className="hover:text-brand-rose">Contact</a></li>
    
      </ul>
    </nav>
  );
}
