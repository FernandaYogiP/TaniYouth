import { WhiteLogo } from '../assets/image';
import { Link } from 'react-router-dom';
import { RiInstagramLine, RiTiktokLine, RiYoutubeLine, RiPhoneLine, RiMailLine, RiMapPinLine, RiSendPlane2Line } from 'react-icons/ri';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-[#114232] text-white py-12 px-4 md:px-8 font-poppins">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Company Info Section */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={WhiteLogo} alt="Petani GO logo" className="h-24 mb-4" />
                    <h2 className="text-2xl font-semibold mb-4">Petani GO</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <RiMapPinLine className="text-2xl flex-shrink-0 mt-1" />
                            <p className="text-sm">Nongsa Digital Park, Jl. Hang Tuah, Nongsa, Kota Batam, Kepulauan Riau, Indonesia.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <RiPhoneLine className="text-xl" />
                            <p className="text-sm">+62 8123456789</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <RiMailLine className="text-xl" />
                            <p className="text-sm">taniyouth@petanigo.com</p>
                        </div>
                    </div>
                </div>

                {/* Mobile Divider 1 */}
                <div className="w-full h-px bg-white/20 my-8 md:hidden"></div>

                {/* Navigation Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-bold text-xl mb-6 text-center md:text-left">Navigasi</h3>
                    <nav className="flex flex-col space-y-4 items-center md:items-start">
                        <Link 
                            to="/about-us" 
                            onClick={scrollToTop} 
                            className="hover:text-[#326B59] transition-colors duration-300 text-base flex items-center gap-2"
                        >
                            Tentang Kami
                        </Link>
                        <Link 
                            to="/articles/knowledge" 
                            onClick={scrollToTop} 
                            className="hover:text-[#326B59] transition-colors duration-300 text-base flex items-center gap-2"
                        >
                            Artikel
                        </Link>
                        <Link 
                            to="/news" 
                            onClick={scrollToTop} 
                            className="hover:text-[#326B59] transition-colors duration-300 text-base flex items-center gap-2"
                        >
                            Berita
                        </Link>
                        <Link 
                            to="/modules/edukasi-buku" 
                            onClick={scrollToTop} 
                            className="hover:text-[#326B59] transition-colors duration-300 text-base flex items-center gap-2"
                        >
                            Modul
                        </Link>
                        <Link 
                            to="/forum" 
                            onClick={scrollToTop} 
                            className="hover:text-[#326B59] transition-colors duration-300 text-base flex items-center gap-2"
                        >
                            Forum Diskusi
                        </Link>
                        <Link 
                            to="/disease-detection" 
                            onClick={scrollToTop} 
                            className="hover:text-[#326B59] transition-colors duration-300 text-base flex items-center gap-2"
                        >
                            Deteksi Penyakit
                        </Link>
                    </nav>
                </div>

                {/* Mobile Divider 2 */}
                <div className="w-full h-px bg-white/20 my-8 md:hidden"></div>

                {/* Contact & Social Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-bold text-xl mb-6">Forum Diskusi</h3>
                    <div className="flex w-full max-w-xs">
                        <input 
                            type="text" 
                            placeholder="Kirim Pesan" 
                            className="flex-1 p-3 text-black text-sm rounded-l-md font-poppins focus:outline-none focus:ring-2 focus:ring-[#326B59]" 
                        />
                        <button className="bg-[#326B59] text-white px-4 rounded-r-md hover:bg-[#2a5548] transition-colors duration-300">
                            <RiSendPlane2Line className="text-xl" />
                        </button>
                    </div>

                    <h3 className="font-bold text-xl mt-8 mb-4">Ikuti Kami</h3>
                    <div className="flex space-x-6">
                        <a 
                            href="#" 
                            className="hover:text-[#326B59] transition-colors duration-300 text-2xl hover:scale-110 transform"
                            aria-label="Instagram"
                        >
                            <RiInstagramLine />
                        </a>
                        <a 
                            href="#" 
                            className="hover:text-[#326B59] transition-colors duration-300 text-2xl hover:scale-110 transform"
                            aria-label="TikTok"
                        >
                            <RiTiktokLine />
                        </a>
                        <a 
                            href="#" 
                            className="hover:text-[#326B59] transition-colors duration-300 text-2xl hover:scale-110 transform"
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