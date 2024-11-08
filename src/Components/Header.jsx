import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../assets/image';
import Login from '../Pages/Login';

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdownName) => {
        if (activeDropdown === dropdownName) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdownName);
        }
    };

    const handleDropdownItemClick = () => {
        setActiveDropdown(null);
    };

    return (
        <header className="bg-white text-[#114232] p-4 pb-10 flex justify-between items-center text-xl">
            <Link to="/" className="flex items-center">
                <img src={Logo} alt="Petani GO logo" className="h-20 w-auto mr-3" />
                <span className="font-bold text-2xl ml-4">Petani GO</span>
            </Link>
            <nav className="flex items-center space-x-16">
                <Link to="/about-us" className="hover:text-[#326B59] transition font-poppins">Tentang Kami</Link>
                <div className="relative">
                    <button 
                        onClick={() => toggleDropdown('article')} 
                        className="flex items-center hover:text-[#326B59] focus:outline-none transition"
                    >
                        <span>Artikel</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {activeDropdown === 'article' && (
                        <div className="absolute left-0 mt-2 w-48 bg-[#114232] shadow-lg rounded-lg overflow-hidden z-10">
                            <Link 
                                to="/articles/knowledge" 
                                className="block px-4 py-2 hover:bg-[#326B59] text-white transition"
                                onClick={handleDropdownItemClick}
                            >
                                Pengetahuan
                            </Link>
                            <Link 
                                to="/articles/cultivation" 
                                className="block px-4 py-2 hover:bg-[#326B59] text-white transition"
                                onClick={handleDropdownItemClick}
                            >
                                Budidaya Tani
                            </Link>
                            <Link 
                                to="/articles/solutions" 
                                className="block px-4 py-2 hover:bg-[#326B59] text-white transition"
                                onClick={handleDropdownItemClick}
                            >
                                Solusi Masalah
                            </Link>
                        </div>
                    )}
                </div>
                <Link to="/news" className="hover:text-[#326B59] transition">Berita</Link>
                <div className="relative">
                    <button 
                        onClick={() => toggleDropdown('module')} 
                        className="flex items-center hover:text-[#326B59] focus:outline-none transition"
                    >
                        <span>Modul</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {activeDropdown === 'module' && (
                        <div className="absolute left-0 mt-2 w-48 bg-[#114232] shadow-lg rounded-lg overflow-hidden z-10">
                            <Link 
                                to="/modules/edukasi-buku" 
                                className="block px-4 py-2 hover:bg-[#326B59] text-white transition"
                                onClick={handleDropdownItemClick}
                            >
                                Edukasi Buku
                            </Link>
                            <Link 
                                to="/modules/edukasi-video" 
                                className="block px-4 py-2 hover:bg-[#326B59] text-white transition"
                                onClick={handleDropdownItemClick}
                            >
                                Edukasi Video
                            </Link>
                        </div>
                    )}
                </div>
                <Link to="/forum" className="hover:text-[#326B59] transition">Forum Diskusi</Link>
            </nav>
            <button className="bg-[#114232] hover:bg-[#326B59] text-white px-4 py-10 rounded-b-xl transition h-20 -mt-10 text-xl font-bold">
                <Link to="/Pages/Login">Login</Link></button>
        </header>
    );
};

export default Header;