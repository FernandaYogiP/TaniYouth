import { Link } from 'react-router-dom';
import { RiSearchLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { SolutionsImage, Watermark } from '../../assets/image';
import { useState } from 'react';

const Solutions = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const articlesPerPage = 9;

    const articles = Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        title: "Pengendalian Hama Penyakit Padi Sawah",
        date: "Rabu, 30 Oktober 2024",
        author: "Kementrian Pertanian",
        image: SolutionsImage,
        category: "solutions"
    }));

    // ketika sudah ada data bisa memakai :
    // const articles = [
    //     {
    //         id: 1,
    //         title: "Pengendalian Hama Penyakit Padi Sawah",
    //         date: "Oktober 30, 2024",
    //         author: "Kementerian Pertanian",
    //         image: SolutionsImage,
    //         category: "solutions"
    //     },
    //     {
    //         id: 2,
    //         title: "Mengatasi Serangan Wereng Coklat",
    //         date: "November 15, 2024",
    //         author: "BPTP Jawa Tengah",
    //         image: SolutionsImage,
    //         category: "solutions"
    //     },
    //     {
    //         id: 3,
    //         title: "Solusi Penyakit Blast pada Padi",
    //         date: "Desember 5, 2024",
    //         author: "Balai Proteksi Tanaman",
    //         image: SolutionsImage,
    //         category: "solutions"
    //     },
    //     {
    //         id: 4,
    //         title: "Menangani Kekeringan pada Musim Kemarau",
    //         date: "Januari 20, 2025",
    //         author: "Puslitbang Tanaman Pangan",
    //         image: SolutionsImage,
    //         category: "solutions"
    //     },
    //     {
    //         id: 5,
    //         title: "Pencegahan Keracunan Besi pada Padi",
    //         date: "Februari 8, 2025",
    //         author: "BB Padi",
    //         image: SolutionsImage,
    //         category: "solutions"
    //     },
    //     {
    //         id: 6,
    //         title: "Mengatasi Gulma Resisten Herbisida",
    //         date: "Maret 15, 2025",
    //         author: "BPTP Sumatra Utara",
    //         image: SolutionsImage,
    //         category: "solutions"
    //     },
    //     {
    //         id: 7,
    //         title: "Solusi Penggerek Batang Padi",
    //         date: "April 3, 2025",
    //         author: "Balai Penelitian Padi",
    //         image: SolutionsImage,
    //         category: "solutions"
    //     },
    //     {
    //         id: 8,
    //         title: "Menangani Banjir di Lahan Sawah",
    //         date: "Mei 12, 2025",
    //         author: "Dinas Pertanian Jabar",
    //         image: SolutionsImage,
    //         category: "solutions"
    //     },
    //     {
    //         id: 9,
    //         title: "Penanggulangan Tikus Sawah",
    //         date: "Juni 25, 2025",
    //         author: "BPTP Yogyakarta",
    //         image: SolutionsImage,
    //         category: "solutions"
    //     }
    // ];

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setIsSearched(false);
    };

    const handleSearchClick = () => {
        const filtered = articles.filter(article => 
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.date.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filtered);
        setIsSearched(true);
        setCurrentPage(1);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };

    const displayedArticles = isSearched ? searchResults : articles;
    const totalPages = Math.ceil(displayedArticles.length / articlesPerPage);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = displayedArticles.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            window.scrollTo(0, 0);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="bg-white text-[#114232] font-poppins">
            <div className="bg-[#114232] text-white text-center py-4 mb-8">
                <h1 className="text-3xl font-bold">ARTIKEL SOLUSI MASALAH</h1>
            </div>
            <div className="p-8">
                <div className="flex justify-end mb-8">
                    <div className="relative w-full max-w-xs">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {currentArticles.map((article) => (
                        <div key={article.id} className="flex flex-col group">
                            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={article.image} 
                                        alt={article.title} 
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                    <div className="absolute bottom-0 left-0 w-full">
                                        <img 
                                            src={Watermark} 
                                            alt="Petani GO Watermark" 
                                            className="w-full h-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                                        />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-[#114232]">
                                        {article.author} / {article.date}
                                    </p>
                                </div>
                                <div className="bg-[#114232] text-white p-3 text-center transition-colors duration-300 hover:bg-[#326B59]">
                                    <h2 className="text-lg font-bold">{article.title}</h2>
                                </div>
                            </div>
                            <Link 
                                to={`/articles/${article.category}/${article.id}`}
                                className="mt-4 border border-[#114232] text-[#114232] px-4 py-2 rounded-md hover:bg-[#114232] hover:text-white transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 w-fit self-start"
                            >
                                Baca Artikel →

                            </Link>
                        </div>
                    ))}
                </div>

                {isSearched && currentArticles.length === 0 && (
                    <div className="text-center text-gray-500 mt-8">
                        Tidak ada hasil yang ditemukan
                    </div>
                )}
                
                <div className="flex justify-center mt-8 flex-wrap">
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

export default Solutions;