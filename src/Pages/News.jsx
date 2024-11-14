import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiSearchLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { GambarBerita, Watermark, WatermarkLong } from '../assets/image';

const News = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const articlesPerPage = 9;

    const news = Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        title: "Pemerintah Luncurkan Program Cetak Sawah untuk Perkuat Ketahanan Pangan",
        date: "Jumat, 25 Oktober 2024",
        time: "12:57 WIB",
        author: "Aris Kurniawan",
        source: "SindoNews.com",
        category: "Berita",
        image: GambarBerita,
    }));

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setIsSearched(false);
    };

    const handleSearchClick = () => {
        const filtered = news.filter(item => 
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.source.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filtered);
        setIsSearched(true);
        setCurrentPage(1); // Reset ke halaman pertama saat mencari
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };

    // Tentukan berita yang akan ditampilkan (hasil pencarian atau semua berita)
    const displayedNews = isSearched ? searchResults : news;

    // Hitung total halaman
    const totalPages = Math.ceil(displayedNews.length / articlesPerPage);

    // Dapatkan berita untuk halaman saat ini
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentNews = displayedNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // Fungsi untuk mengubah halaman
    const paginate = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            window.scrollTo(0, 0);
        }
    };

    // Generate array nomor halaman
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="bg-white text-[#114232] font-poppins">
            <div className="bg-[#114232] text-white text-center py-4 mb-8">
                <h1 className="text-3xl font-bold">BERITA MEDIA</h1>
            </div>
            <div className="p-8">
                <div className="flex justify-end mb-8">
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Cari..."
                            value={searchTerm}
                            onChange={handleSearch}
                            onKeyPress={handleKeyPress}
                            className="border border-[#114232] p-2 rounded-l-md rounded-r-md w-full pr-10"
                        />
                        <button 
                            onClick={handleSearchClick}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#114232] text-white px-3 p-2 rounded-l-full hover:bg-[#1a5c45] transition-colors"
                        >
                            <RiSearchLine size={16} />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {currentNews.map((item) => (
                        <div key={item.id} className="flex flex-col">
                            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-48 object-cover" 
                                />
                                <div className="p-4">
                                    <p className="text-sm text-gray-500">
                                        {item.source} / {item.author} / {item.date} | {item.time}
                                    </p>
                                </div>
                                <div className="bg-[#114232] text-white p-3 text-start">
                                    <h2 className="text-lg font-bold">{item.title}</h2>
                                </div>
                            </div>
                            <Link 
                                 to="/Pages/DetailNews"
                                className="mt-4 border border-[#114232] text-[#114232] px-4 py-2 rounded-md hover:bg-[#114232] hover:text-white transition w-fit self-start"
                            >Baca Berita →</Link>
                        </div>
                    ))}
                </div>

                {isSearched && currentNews.length === 0 && (
                    <div className="text-center text-gray-500 mt-8">
                        Tidak ada hasil yang ditemukan
                    </div>
                )}

                {/* Pagination */}
                <div className="flex justify-center mt-8">
                    <button 
                        className={`mx-2 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:text-[#1a5c45]'}`}
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <RiArrowLeftSLine size={20} />
                    </button>
                    
                    {pageNumbers.map(number => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`mx-2 px-3 py-1 rounded-md ${
                                currentPage === number 
                                    ? 'bg-[#114232] text-white' 
                                    : 'hover:bg-[#114232] hover:text-white transition-colors'
                            }`}
                        >
                            {number}
                        </button>
                    ))}

                    <button 
                        className={`mx-2 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:text-[#1a5c45]'}`}
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <RiArrowRightSLine size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default News;
