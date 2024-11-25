import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../assets/image';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // md breakpoint
                setIsMobileMenuOpen(false);
                setActiveDropdown(null);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
    };

    const handleDropdownItemClick = () => {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null);
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
                    isMobileMenuOpen ? "absolute lg:top-0 top-24 z-10 bg-white right-0 pb-5 rounded-b-xl shadow-lg" : "hidden lg:inline-flex"
                } flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 w-full lg:w-auto px-4 lg:px-0`}
            >
                <Link
                    to="/about-us"
                    className="hover:text-[#326B59] transition-all duration-300 mx-auto lg:mx-0 hover:scale-110 transform active:scale-95 touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Tentang Kami
                </Link>

                {/* Article Dropdown */}
                <div className="relative w-full lg:w-auto">
                    <button
                        onClick={() => toggleDropdown("article")}
                        className="flex items-center hover:text-[#326B59] focus:outline-none transition-all duration-300 mx-auto lg:mx-0 w-full lg:w-auto justify-center lg:justify-start hover:scale-110 transform active:scale-95 touch-manipulation"
                    >
                        <span>Artikel</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === 'article' ? 'rotate-180' : ''}`}
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
                        <div className={`${
                            isMobileMenuOpen 
                                ? "relative mt-2 space-y-2 flex flex-col items-center w-full" 
                                : "absolute left-[calc(-50%+1.5rem)] mt-1 bg-[#114232] shadow-lg rounded-lg overflow-hidden min-w-[11rem]"
                        } z-10`}>
                            <Link
                                to="/articles/knowledge"
                                className={`block ${isMobileMenuOpen ? 'text-[#114232] hover:text-[#326B59] text-center w-full' : 'text-white px-6 py-1.5 hover:bg-[#326B59] whitespace-nowrap'} transition active:scale-95 touch-manipulation`}
                                onClick={handleDropdownItemClick}
                            >
                                Pengetahuan
                            </Link>
                            <Link
                                to="/articles/cultivation"
                                className={`block ${isMobileMenuOpen ? 'text-[#114232] hover:text-[#326B59] text-center w-full' : 'text-white px-6 py-1.5 hover:bg-[#326B59] whitespace-nowrap'} transition active:scale-95 touch-manipulation`}
                                onClick={handleDropdownItemClick}
                            >
                                Budidaya Tani
                            </Link>
                            <Link
                                to="/articles/solutions"
                                className={`block ${isMobileMenuOpen ? 'text-[#114232] hover:text-[#326B59] text-center w-full' : 'text-white px-6 py-1.5 hover:bg-[#326B59] whitespace-nowrap'} transition active:scale-95 touch-manipulation`}
                                onClick={handleDropdownItemClick}
                            >
                                Solusi Masalah
                            </Link>
                        </div>
                    )}
                </div>

                <Link 
                    to="/news" 
                    className="hover:text-[#326B59] transition-all duration-300 mx-auto lg:mx-0 hover:scale-110 transform active:scale-95 touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Berita
                </Link>

                {/* Module Dropdown */}
                <div className="relative w-full lg:w-auto">
                    <button
                        onClick={() => toggleDropdown("module")}
                        className="flex items-center hover:text-[#326B59] focus:outline-none transition-all duration-300 mx-auto lg:mx-0 w-full lg:w-auto justify-center lg:justify-start hover:scale-110 transform active:scale-95 touch-manipulation"
                    >
                        <span>Modul</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === 'module' ? 'rotate-180' : ''}`}
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
                        <div className={`${
                            isMobileMenuOpen 
                                ? "relative mt-2 space-y-2 flex flex-col items-center w-full" 
                                : "absolute left-[calc(-50%+1.5rem)] mt-1 bg-[#114232] shadow-lg rounded-lg overflow-hidden min-w-[11rem]"
                        } z-10`}>
                            <Link
                                to="/modules/edukasi-buku"
                                className={`block ${isMobileMenuOpen ? 'text-[#114232] hover:text-[#326B59] text-center w-full' : 'text-white px-6 py-1.5 hover:bg-[#326B59] whitespace-nowrap'} transition active:scale-95 touch-manipulation`}
                                onClick={handleDropdownItemClick}
                            >
                                Edukasi Buku
                            </Link>
                            <Link
                                to="/modules/edukasi-video"
                                className={`block ${isMobileMenuOpen ? 'text-[#114232] hover:text-[#326B59] text-center w-full' : 'text-white px-6 py-1.5 hover:bg-[#326B59] whitespace-nowrap'} transition active:scale-95 touch-manipulation`}
                                onClick={handleDropdownItemClick}
                            >
                                Edukasi Video
                            </Link>
                        </div>
                    )}
                </div>

                <Link 
                    to="/forum" 
                    className="hover:text-[#326B59] transition-all duration-300 mx-auto lg:mx-0 hover:scale-110 transform active:scale-95 touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Forum Diskusi
                </Link>

                <Link 
                    to="/disease-detection" 
                    className="hover:text-[#326B59] transition-all duration-300 mx-auto lg:mx-0 hover:scale-110 transform active:scale-95 touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Deteksi Penyakit
                </Link>


                {/* Login in dropdown for mobile, button for desktop */}
                {isLoggedIn ? (
                    <div className="lg:hidden bg-[#114232] w-full rounded-lg">
                        <Link 
                            to="/profile" 
                            className="flex items-center justify-center text-white hover:text-gray-200 transition py-2 active:scale-95 touch-manipulation"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FaUser className="h-5 w-5 mr-2"/>
                            <span>Profile</span>
                        </Link>
                    </div>
                ) : (
                    <Link 
                        to="/Pages/Login" 
                        className="lg:hidden bg-[#114232] text-white hover:bg-[#326B59] transition py-2 rounded-lg text-center w-full active:scale-95 touch-manipulation"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Login
                    </Link>
                )}
            </nav>

            {/* Login Button (desktop only) */}
            <div className="hidden lg:block">
                <button className="bg-[#114232] hover:bg-[#326B59] text-white px-6 rounded-b-xl transition-all duration-300 h-16 hover:h-20 -mt-8 text-lg font-bold flex items-center justify-center group overflow-hidden active:scale-95 touch-manipulation">
                    {isLoggedIn ? (
                        <Link to="/Pages/Profile" className="transform transition-transform duration-300 group-hover:translate-y-2">
                            <FaUser className="h-8 w-8 rounded-full"/>
                        </Link>
                    ) : (
                        <Link to="/Pages/Login" className="transform transition-transform duration-300 group-hover:translate-y-2">
                            Login
                        </Link>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;