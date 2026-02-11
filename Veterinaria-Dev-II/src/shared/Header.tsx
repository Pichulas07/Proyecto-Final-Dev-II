import { Link } from "react-router-dom";
import NovaPet from "../assets/NovaPet.png";

export default function Header() {
  return (
    <header className="bg-[#081A41] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="group flex items-center gap-3">
          <img
            src={NovaPet}
            alt="NovaPet logo"
            className="h-20 w-20 object-contain transition group-hover:scale-[1.03]"
          />
          <h1 className="text-2xl font-bold text-white">
            Nova<span className="text-cyan-400">Pet</span>
          </h1>
        </Link>

        <nav className="flex gap-6 text-white font-medium">
          <Link to="/pets" className="hover:text-cyan-400 transition-colors">
            Pets
          </Link>
          <Link to="/profile" className="hover:text-cyan-400 transition-colors">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}