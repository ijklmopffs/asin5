import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";

export default function Navbar() {
  return (
    <main className="bg-[#f9f9f9]">
      <nav className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center justify-between gap-8">
          <Link to="/">
            <img src={logo} alt="company brand" className="h-16" />
          </Link>
          <div className="md:flex gap-4 color-[#212121] text-lg font-bold hidden">
            <Link to="/">About</Link>
            <Link to="/">SIP</Link>
            <Link to="/">Studio</Link>
            <Link to="/">SEEQ</Link>
            <Link to="/">Platforms</Link>
            <Link to="/">Initiatives</Link>
            <Link to="/">More</Link>
          </div>
        </div>

        <div className="hidden md:flex gap-2">
          <button className="text-white bg-[#20888F] rounded-full px-6 py-3">
            SINC with us
          </button>
          <button className="text-white bg-[#303030] rounded-full px-6 py-3">
            Apply to SIP 1.0
          </button>
        </div>
        <div className="md:hidden">
          <img src={hamburger} alt="" />
        </div>
      </nav>
    </main>
  );
}
