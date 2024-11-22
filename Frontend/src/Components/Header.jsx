import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/image";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] =  useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token);

  });

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close all dropdowns on mobile menu toggle
  };

  return (
    <header className="bg-white text-[#114232] p-3 pb-6 flex justify-between items-center text-lg relative">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="Petani GO logo" className="h-16 w-auto" />
        <span className="font-bold text-xl ml-3">Petani GO</span>
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2 w-10 h-10 rounded-lg focus:outline-none text-gray-500 hover:bg-gray-100"
        onClick={toggleMobileMenu}
      >
        <span className="sr-only">Toggle Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isMobileMenuOpen ? "absolute lg:top-0 top-24 z-10 bg-white right-0 pb-5 rounded-b-xl" : "hidden lg:inline-flex"
        } flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 w-full lg:w-auto`}
      >
        <Link
          to="/about-us"
          className="hover:text-[#326B59] transition mx-auto lg:mx-0"
        >
          Tentang Kami
        </Link>

        {/* Article Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("article")}
            className="flex items-center hover:text-[#326B59] focus:outline-none transition mx-auto lg:mx-0"
          >
            <span>Artikel</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeDropdown === "article" && (
            <div className="absolute left-1/3 mt-1 bg-[#114232] shadow-lg rounded-lg overflow-hidden z-10">
              <Link
                to="/articles/knowledge"
                className="block px-3 py-1.5 hover:bg-[#326B59] text-white transition"
                onClick={handleDropdownItemClick}
              >
                Pengetahuan
              </Link>
              <Link
                to="/articles/cultivation"
                className="block px-3 py-1.5 hover:bg-[#326B59] text-white transition"
                onClick={handleDropdownItemClick}
              >
                Budidaya Tani
              </Link>
              <Link
                to="/articles/solutions"
                className="block px-3 py-1.5 hover:bg-[#326B59] text-white transition"
                onClick={handleDropdownItemClick}
              >
                Solusi Masalah
              </Link>
            </div>
          )}
        </div>

        <Link to="/news" className="hover:text-[#326B59] transition mx-auto lg:mx-0">
          Berita
        </Link>

        {/* Module Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("module")}
            className="flex items-center hover:text-[#326B59] focus:outline-none transition mx-auto lg:mx-0"
          >
            <span>Modul</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeDropdown === "module" && (
            <div className="absolute left-1/3 mt-1 w-44 bg-[#114232] shadow-lg rounded-lg overflow-hidden z-10">
              <Link
                to="/modules/edukasi-buku"
                className="block px-3 py-1.5 hover:bg-[#326B59] text-white transition"
                onClick={handleDropdownItemClick}
              >
                Edukasi Buku
              </Link>
              <Link
                to="/modules/edukasi-video"
                className="block px-3 py-1.5 hover:bg-[#326B59] text-white transition"
                onClick={handleDropdownItemClick}
              >
                Edukasi Video
              </Link>
            </div>
          )}
        </div>

        <Link to="/forum" className="hover:text-[#326B59] transition mx-auto lg:mx-0">
          Forum Diskusi
        </Link>
        <Link to="/Pages/Login" className="hover:text-[#326B59] transition mx-auto lg:mx-0">
          Deteksi Penyakit
        </Link>
      </nav>

      

      {/* Login Button */}
      <button className="bg-[#114232] hover:bg-[#326B59] text-white px-6 py-8 rounded-b-xl transition h-16 -mt-8 text-lg font-bold flex items-center justify-center">
        {isLoggedIn ? (
        <Link><FaUser className="h-12 w-12 rounded-full"/></Link>
        ):(
          <Link to="/Pages/Login">Login</Link>
        )}
    </button>
    </header>
  );
};

export default Header;
