import { WhiteLogo } from '../assets/image';
import { Link } from 'react-router-dom';
import { RiInstagramLine, RiTiktokLine, RiYoutubeLine, RiPhoneLine, RiMailLine, RiMapPinLine, RiSendPlane2Line, RiArrowDownSLine } from 'react-icons/ri';
import { useState } from 'react';

const Footer = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const footerLinks = {
        artikel: [
            { name: 'Pengetahuan', path: '/articles/knowledge' },
            { name: 'Budidaya Tani', path: '/articles/cultivation' },
            { name: 'Solusi Masalah', path: '/articles/solutions' }
        ],
        modul: [
            { name: 'Edukasi Buku', path: '/modules/edukasi-buku' },
            { name: 'Edukasi Video', path: '/modules/edukasi-video' }
        ]
    };

    return (
        <footer className="bg-[#114232] text-white py-12 px-4 md:px-8 font-poppins">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Company Info Section */}
                <div className="flex flex-col items-center md:items-start">
                    <img 
                        src={WhiteLogo} 
                        alt="Petani GO logo" 
                        className="h-32 mb-4" 
                    />
                    <h2 className="text-2xl font-semibold mb-4">
                        Petani GO
                    </h2>
                    <div className="space-y-4">
                        <a 
                            href="https://maps.google.com/?q=Nongsa+Digital+Park" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-start gap-3 group/item hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
                        >
                            <RiMapPinLine className="text-2xl flex-shrink-0 mt-1 group-hover/item:text-[#326B59] transition-colors duration-300" />
                            <p className="text-sm group-hover/item:text-[#326B59] transition-colors duration-300">
                                Nongsa Digital Park, Jl. Hang Tuah, Nongsa, Kota Batam, Kepulauan Riau, Indonesia.
                            </p>
                        </a>
                        <a 
                            href="#" 
                            className="flex items-center gap-3 group/item hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
                        >
                            <RiPhoneLine className="text-xl group-hover/item:text-[#326B59] transition-colors duration-300" />
                            <p className="text-sm group-hover/item:text-[#326B59] transition-colors duration-300">
                                +62 8123456789
                            </p>
                        </a>
                        <a 
                            href="#" 
                            className="flex items-center gap-3 group/item hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
                        >
                            <RiMailLine className="text-xl group-hover/item:text-[#326B59] transition-colors duration-300" />
                            <p className="text-sm group-hover/item:text-[#326B59] transition-colors duration-300">
                                taniyouth@petanigo.com
                            </p>
                        </a>
                    </div>
                </div>

                {/* Mobile Divider 1 */}
                <div className="w-full h-px bg-white/20 my-8 md:hidden"></div>

                {/* Navigation Section */}
                <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
                    <h3 className="font-bold text-xl mb-6 text-center md:text-left">
                        Navigasi
                    </h3>
                    <nav className="flex flex-col space-y-2 items-center md:items-start w-full">
                        <Link 
                            to="/about-us" 
                            onClick={scrollToTop} 
                            className="hover:bg-white/10 py-1.5 px-2 rounded-lg transition-all duration-300 w-full text-center md:text-left"
                        >
                            Tentang Kami
                        </Link>
                        
                        {/* Artikel Dropdown */}
                        <div className="w-full">
                            <button 
                                onClick={() => toggleDropdown('artikel')}
                                className="flex items-center justify-center md:justify-start w-full hover:bg-white/10 py-1.5 px-2 rounded-lg transition-all duration-300"
                            >
                                <span>Artikel</span>
                                <RiArrowDownSLine 
                                    className={`transition-transform duration-300 ${openDropdown === 'artikel' ? 'rotate-180' : ''}`} 
                                />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'artikel' ? 'max-h-32' : 'max-h-0'}`}>
                                {footerLinks.artikel.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        onClick={scrollToTop}
                                        className="block pl-4 py-1.5 hover:bg-white/10 transition-colors duration-300 text-center md:text-left w-full"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link 
                            to="/news" 
                            onClick={scrollToTop} 
                            className="hover:bg-white/10 py-1.5 px-2 rounded-lg transition-all duration-300 w-full text-center md:text-left"
                        >
                            Berita
                        </Link>

                        {/* Modul Dropdown */}
                        <div className="w-full">
                            <button 
                                onClick={() => toggleDropdown('modul')}
                                className="flex items-center justify-center md:justify-start w-full hover:bg-white/10 py-1.5 px-2 rounded-lg transition-all duration-300"
                            >
                                <span>Modul</span>
                                <RiArrowDownSLine 
                                    className={`transition-transform duration-300 ${openDropdown === 'modul' ? 'rotate-180' : ''}`} 
                                />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'modul' ? 'max-h-24' : 'max-h-0'}`}>
                                {footerLinks.modul.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        onClick={scrollToTop}
                                        className="block pl-4 py-1.5 hover:bg-white/10 transition-colors duration-300 text-center md:text-left w-full"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link 
                            to="/forum" 
                            onClick={scrollToTop} 
                            className="hover:bg-white/10 py-1.5 px-2 rounded-lg transition-all duration-300 w-full text-center md:text-left"
                        >
                            Forum Diskusi
                        </Link>
                        <Link 
                            to="/disease" 
                            onClick={scrollToTop} 
                            className="hover:bg-white/10 py-1.5 px-2 rounded-lg transition-all duration-300 w-full text-center md:text-left"
                        >
                            Deteksi Penyakit
                        </Link>
                    </nav>
                </div>

                {/* Mobile Divider 2 */}
                <div className="w-full h-px bg-white/20 my-8 md:hidden"></div>

                {/* Contact & Social Section */}
                <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
                    <h3 className="font-bold text-xl mb-6">
                        Forum Diskusi
                    </h3>
                    <div className="flex w-full max-w-xs group">
                        <input 
                            type="text" 
                            placeholder="Kirim Pesan" 
                            className="flex-1 p-3 text-black text-sm rounded-l-md font-poppins focus:outline-none focus:ring-2 focus:ring-[#326B59] transition-all duration-300" 
                        />
                        <button className="bg-[#326B59] p-3 rounded-r-md hover:bg-[#114232] transition-colors duration-300 group-hover:scale-105">
                            <RiSendPlane2Line className="text-xl" />
                        </button>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <a 
                            href="https://instagram.com/petanigo" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-[#326B59] transition-transform duration-300 hover:scale-125"
                            aria-label="Instagram"
                        >
                            <RiInstagramLine />
                        </a>
                        <a 
                            href="https://tiktok.com/@petanigo" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-[#326B59] transition-transform duration-300 hover:scale-125"
                            aria-label="TikTok"
                        >
                            <RiTiktokLine />
                        </a>
                        <a 
                            href="https://youtube.com/@petanigo" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-[#326B59] transition-transform duration-300 hover:scale-125"
                            aria-label="YouTube"
                        >
                            <RiYoutubeLine />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-sm text-center text-white/80">
                    2024 PetaniGO Organization. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;