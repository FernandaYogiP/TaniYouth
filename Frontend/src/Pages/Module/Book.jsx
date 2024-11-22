import { Link } from 'react-router-dom';
import { RiSearchLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { BookImage1, BookImage2, BookImage3 } from '../../assets/image';
import { useState } from 'react';

const Book = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const modulesPerPage = 9;

    const modules = [
        {
            id: 1,
            title: "Rekomendasi Budidaya Padi pada Berbagai Agroekosistem",
            author: "Zuliana Susanti DKK",
            year: "2020",
            image: BookImage1
        },
        {
            id: 2,
            title: "Budidaya Tanaman Padi Gogo Terstandar",
            author: "Bambai Sri Suryani M DKK",
            year: "2024",
            image: BookImage2
        },
        {
            id: 3,
            title: "Peningkatan Produksi Padi Dengan Rekayasa Jarak Tanam",
            author: "Agustiani DKK",
            year: "2019",
            image: BookImage3
        },
        {
            id: 4,
            title: "Rekomendasi Budidaya Padi pada Berbagai Agroekosistem",
            author: "Zuliana Susanti DKK",
            year: "2020",
            image: BookImage1
        },
        {
            id: 5,
            title: "Budidaya Tanaman Padi Gogo Terstandar",
            author: "Bambai Sri Suryani M DKK",
            year: "2024",
            image: BookImage2
        },
        {
            id: 6,
            title: "Peningkatan Produksi Padi Dengan Rekayasa Jarak Tanam",
            author: "Agustiani DKK",
            year: "2019",
            image: BookImage3
        },
        {
            id: 7,
            title: "Rekomendasi Budidaya Padi pada Berbagai Agroekosistem",
            author: "Zuliana Susanti DKK",
            year: "2020",
            image: BookImage1
        },
        {
            id: 8,
            title: "Budidaya Tanaman Padi Gogo Terstandar",
            author: "Bambai Sri Suryani M DKK",
            year: "2024",
            image: BookImage2
        },
        {
            id: 9,
            title: "Peningkatan Produksi Padi Dengan Rekayasa Jarak Tanam",
            author: "Agustiani DKK",
            year: "2019",
            image: BookImage3
        },
        {
            id: 10,
            title: "Rekomendasi Budidaya Padi pada Berbagai Agroekosistem",
            author: "Zuliana Susanti DKK",
            year: "2020",
            image: BookImage1
        },
        {
            id: 11,
            title: "Budidaya Tanaman Padi Gogo Terstandar",
            author: "Bambai Sri Suryani M DKK",
            year: "2024",
            image: BookImage2
        },
        {
            id: 12,
            title: "Peningkatan Produksi Padi Dengan Rekayasa Jarak Tanam",
            author: "Agustiani DKK",
            year: "2019",
            image: BookImage3
        }
    ];

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setIsSearched(false);
    };

    const handleSearchClick = () => {
        const filtered = modules.filter(module => 
            module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            module.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            module.year.includes(searchTerm)
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

    const displayedModules = isSearched ? searchResults : modules;
    const totalPages = Math.ceil(displayedModules.length / modulesPerPage);
    const indexOfLastModule = currentPage * modulesPerPage;
    const indexOfFirstModule = indexOfLastModule - modulesPerPage;
    const currentModules = displayedModules.slice(indexOfFirstModule, indexOfLastModule);

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
                <h1 className="text-3xl font-bold">EDUKASI BUKU</h1>
            </div>
            <div className="p-4 sm:p-8">
                <div className="flex justify-end mb-8">
                    <div className="relative w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Cari..."
                            value={searchTerm}
                            onChange={handleSearch}
                            onKeyPress={handleKeyPress}
                            className="border border-[#114232] p-2 rounded-l-md rounded-r-md w-full pr-10 focus:outline-none focus:ring-2 focus:ring-[#114232] focus:border-transparent transition-all duration-300"
                        />
                        <button 
                            onClick={handleSearchClick}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#114232] text-white px-3 p-2 rounded-l-full hover:bg-[#1a5c45] transition-all duration-300 hover:shadow-lg"
                        >
                            <RiSearchLine size={16} />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {currentModules.map((module) => (
                        <div key={module.id} className="flex flex-col group">
                            <div className="flex flex-col h-full bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="flex-grow relative overflow-hidden">
                                    <img 
                                        src={module.image} 
                                        alt={module.title} 
                                        className="w-full h-[200px] sm:h-[240px] lg:h-[280px] object-contain transition-transform duration-500 group-hover:scale-105" 
                                    />
                                </div>
                                <div className="p-3 text-center">
                                    <p className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-[#114232]">
                                        {module.author} / {module.year}
                                    </p>
                                </div>
                                <div className="bg-[#114232] text-white p-3 min-h-[80px] flex items-center justify-center transition-colors duration-300 hover:bg-[#326B59] rounded-b-xl">
                                    <h2 className="text-base font-medium text-center">{module.title}</h2>
                                </div>
                            </div>
                            <Link 
                                to="#"
                                className="mt-4 border border-[#114232] text-[#114232] px-4 py-2 rounded-md hover:bg-[#114232] hover:text-white transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 w-fit self-start"
                            >
                                Lihat Modul →
                            </Link>
                        </div>
                    ))}
                </div>

                {isSearched && currentModules.length === 0 && (
                    <div className="text-center text-gray-500 mt-8 p-4 bg-gray-50 rounded-lg">
                        Tidak ada hasil yang ditemukan
                    </div>
                )}
                
                <div className="flex justify-center mt-8 flex-wrap gap-2">
                    <button 
                        className={`mx-2 p-2 rounded-full hover:bg-[#114232] hover:text-white transition-all duration-300 ${
                            currentPage === 1 ? 'text-gray-400 cursor-not-allowed hover:bg-transparent hover:text-gray-400' : ''
                        }`}
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <RiArrowLeftSLine size={20} />
                    </button>
                    
                    {pageNumbers.map(number => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`mx-1 px-3 py-1 rounded-md transition-all duration-300 ${
                                currentPage === number 
                                    ? 'bg-[#114232] text-white shadow-lg' 
                                    : 'hover:bg-[#114232] hover:text-white hover:shadow-lg'
                            }`}
                        >
                            {number}
                        </button>
                    ))}
                    
                    <button 
                        className={`mx-2 p-2 rounded-full hover:bg-[#114232] hover:text-white transition-all duration-300 ${
                            currentPage === totalPages ? 'text-gray-400 cursor-not-allowed hover:bg-transparent hover:text-gray-400' : ''
                        }`}
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

export default Book;