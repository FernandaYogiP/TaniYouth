import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../assets/image';


const Header = () => {
    const [isArticleDropdownOpen, setArticleDropdownOpen] = useState(false);
    const [isModuleDropdownOpen, setModuleDropdownOpen] = useState(false);

    const toggleArticleDropdown = () => {
        setArticleDropdownOpen(!isArticleDropdownOpen);
    };

    const toggleModuleDropdown = () => {
        setModuleDropdownOpen(!isModuleDropdownOpen);
    };

    return (
        <header className="bg-white text-[#114232] p-4 pb-10 flex justify-between items-center text-xl">
            <div className="flex items-center">
                <img src={Logo} alt="Petani GO logo" className="h-20 w-auto mr-3" />
                <span className="font-bold text-2xl ml-4">Petani GO</span>
            </div>
            <nav className="flex items-center space-x-16">
                <Link to="/" className="hover:text-[#326B59] transition font-poppins">Tentang Kami</Link>
                <div className="relative">
                    <button 
                        onClick={toggleArticleDropdown} 
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
                    {isArticleDropdownOpen && (
                        <div className="absolute left-0 mt-2 bg-[#114232] shadow-lg rounded-lg z-10">
                            <Link to="/articles/knowledge" className="block px-4 py-2 hover:bg-[#326B59] text-white transition">Pengetahuan</Link>
                            <Link to="/articles/cultivation" className="block px-4 py-2 hover:bg-[#326B59] text-white transition">Budidaya tani</Link>
                            <Link to="/articles/solutions" className="block px-4 py-2 hover:bg-[#326B59] text-white transition">Solusi Masalah</Link>
                        </div>
                    )}
                </div>
                <Link to="/news" className="hover:text-[#326B59] transition">Berita</Link>
                <div className="relative">
                    <button 
                        onClick={toggleModuleDropdown} 
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
                    {isModuleDropdownOpen && (
                        <div className="absolute left-0 mt-2 bg-[#114232] shadow-lg rounded-lg z-10">
                            <Link to="/modules/edukasi-buku" className="block px-4 py-2 hover:bg-[#326B59] text-white transition">Edukasi Buku</Link>
                            <Link to="/modules/edukasi-video" className="block px-4 py-2 hover:bg-[#326B59] text-white transition">Edukasi Video</Link>
                        </div>
                    )}
                </div>
                <Link to="/forum" className="hover:text-[#326B59] transition">Forum Diskusi</Link>
            </nav>
            <button className="bg-[#114232] hover:bg-[#326B59] text-white px-4 py-10 rounded-b-xl transition h-20 -mt-10 text-xl font-bold">Login</button>
        </header>
    );
};

export default Header;