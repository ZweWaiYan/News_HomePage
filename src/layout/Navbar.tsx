import { useState } from "react";
import logo from "../assets/images/logo.svg";
import "boxicons";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-full">
      <header
        className="flex justify-between items-center text-black py-6 px-8
      md:px-32 bg-white"
      >
        <a href="#">
          <img
            src={logo}
            alt="logo"
            className="w-10 hover:scale-105 transition-all"
          />
        </a>

        <ul className="hidden lg:flex xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-[#F15D51] hover:text-white rounded-md transition-all cursor-pointer">
            Home
          </li>
          <li className="p-3 hover:bg-[#F15D51] hover:text-white rounded-md transition-all cursor-pointer">
            Products
          </li>
          <li className="p-3 hover:bg-[#F15D51] hover:text-white rounded-md transition-all cursor-pointer">
            Explore
          </li>
          <li className="p-3 hover:bg-[#F15D51] hover:text-white rounded-md transition-all cursor-pointer">
            Contact
          </li>
        </ul>

        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden xl:hidden block text-3xl cursor-pointer transition-transform duration-300 ease-in-out"
        >
          {isMenuOpen ? (
            <i className="bx bx-x transform scale-110 rotate-180 transition-transform duration-300 ease-in-out"></i>
          ) : (
            <i className="bx bx-menu-alt-right transform scale-100 transition-transform duration-300 ease-in-out"></i>
          )}
        </div>

        <div
          className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li className="list-none w-[50%] text-center p-4 hover:bg-[#F15D51] hover:text-white transition-all cursor-pointer">
            Home
          </li>
          <li className="list-none w-[50%] text-center p-4 hover:bg-[#F15D51] hover:text-white transition-all cursor-pointer">
            Products
          </li>
          <li className="list-none w-[50%] text-center p-4 hover:bg-[#F15D51] hover:text-white transition-all cursor-pointer">
            Explore
          </li>
          <li className="list-none w-[50%] mb-5 text-center p-4 hover:bg-[#F15D51] hover:text-white transition-all cursor-pointer">
            Contact
          </li>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
