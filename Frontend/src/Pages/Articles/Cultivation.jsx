import { Link } from 'react-router-dom';
import { RiSearchLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { 
    CaraTebarBenihPadiYangTepat,
    PanduanLengkapUntukHasilOptimal,
    BudidayaPadiOrganikMenjagaKeseimbanganAlam,
    BudidayaPadiDiLahanGambut,
    BudidayaPadiPadaLahanSempit,
    BudidayaPadiDiLahanPasir,
    BudidayaPadiDiLahanTerendam,
    BudidayaPadiDenganMetodeTanamJajarLegowo,
    BudidayaPadiDenganTeknologiDrone,
    BudidayaPadiDenganTeknikTanamTumpangSari,
    CultivationImage, Watermark } from '../../assets/image';
import { useState } from 'react';

const Cultivation = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const articlesPerPage = 9;

    const articles = [
        {
            id: 1,
            title: "Cara Tebar Benih Padi Yang Tepat",
            date: "Januari 18, 2022",
            author: "pustaka.setjen.pertanian",
            image: CaraTebarBenihPadiYangTepat,
            category: "cultivation"
        },
        {
            id: 2,
            title: "Panduan Lengkap Untuk Hasil Optimal",
            date: "Februari 25, 2022",
            author: "Balai Penelitian Tanaman Padi",
            image: PanduanLengkapUntukHasilOptimal,
            category: "cultivation"
        },
        {
            id: 3,
            title: "Budidaya Padi Organik Menjaga Keseimbangan Alam",
            date: "Maret 10, 2022",
            author: "Dinas Pertanian Jawa Timur",
            image: BudidayaPadiOrganikMenjagaKeseimbanganAlam,
            category: "cultivation"
        },
        {
            id: 4,
            title: "Budidaya Padi Di Lahan Gambut",
            date: "April 5, 2022",
            author: "BPTP Jawa Barat",
            image: BudidayaPadiDiLahanGambut,
            category: "cultivation"
        },
        {
            id: 5,
            title: "Budidaya Padi Pada Lahan Sempit",
            date: "Mei 15, 2022",
            author: "Kementerian Pertanian",
            image: BudidayaPadiPadaLahanSempit,
            category: "cultivation"
        },
        {
            id: 6,
            title: "Budidaya Padi Di Lahan Pasir",
            date: "Juni 20, 2022",
            author: "Balitbangtan",
            image: BudidayaPadiDiLahanPasir,
            category: "cultivation"
        },
        {
            id: 7,
            title: "Budidaya Padi Di Lahan Terendam",
            date: "Juli 8, 2022",
            author: "BPTP Sulawesi Selatan",
            image: BudidayaPadiDiLahanTerendam,
            category: "cultivation"
        },
        {
            id: 8,
            title: "Budidaya Padi Dengan Metode Tanam Jajar Legowo",
            date: "Agustus 12, 2022",
            author: "BB Padi",
            image: BudidayaPadiDenganMetodeTanamJajarLegowo,
            category: "cultivation"
        },
        {
            id: 9,
            title: "Budidaya Padi Dengan Teknologi Drone",
            date: "September 30, 2022",
            author: "Puslitbangtan",
            image: BudidayaPadiDenganTeknologiDrone,
            category: "cultivation"
        },
        {
            id: 10,
            title: "Budidaya Padi Dengan Teknik Tanam Tumpang Sari",
            date: "September 30, 2022",
            author: "Puslitbangtan",
            image: BudidayaPadiDenganTeknikTanamTumpangSari,
            category: "cultivation"
        }
    ];

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
                <h1 className="text-3xl font-bold">ARTIKEL BUDIDAYA TANI</h1>
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

export default Cultivation;