import { Link } from 'react-router-dom';
import { RiArrowLeftSLine, RiArrowRightSLine, RiPlayCircleFill } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const Video = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const videosPerPage = 9;

    const videos = [
        {
            id: 1,
            title: "Teknik Budidaya Mina Padi",
            url: "https://youtu.be/jhJAgTk_pNI?si=N3_Po7z6bFOm1t2l",
            thumbnail: `https://img.youtube.com/vi/jhJAgTk_pNI/maxresdefault.jpg`
        },
        {
            id: 2,
            title: "Budidaya Padi Organik dengan metode SRI",
            url: "https://youtu.be/OAEHfgiEKGg?si=mJmJn4kltXbN3RAa",
            thumbnail: `https://img.youtube.com/vi/OAEHfgiEKGg/maxresdefault.jpg`
        },
        {
            id: 3,
            title: "Teknologi Pertanian Modern",
            url: "https://youtu.be/SL7_JAmZG-s?si=U-bB_RGcQBadkY-g",
            thumbnail: `https://img.youtube.com/vi/SL7_JAmZG-s/maxresdefault.jpg`
        },
        {
            id: 4,
            title: "Inovasi Pertanian - Teknologi Pertanian Modern",
            url: "https://youtu.be/OAVwmgUu8Xg?si=AZBIqVlRPTkhHwFs",
            thumbnail: `https://img.youtube.com/vi/OAVwmgUu8Xg/maxresdefault.jpg`
        },
        {
            id: 5,
            title: "Pembuktian Alat Matun Modern di Sawah",
            url: "https://youtu.be/gzOqVBx9wcU?si=HRxp4lqtHCtoFmvt",
            thumbnail: `https://img.youtube.com/vi/gzOqVBx9wcU/maxresdefault.jpg`
        },
        {
            id: 6,
            title: "Cara Mengatasi Penyakit Hawar Daun Bakteri / Kresek pada Tanaman Padi",
            url: "https://www.youtube.com/watch?v=akUkZNfSup8",
            thumbnail: `https://img.youtube.com/vi/akUkZNfSup8/maxresdefault.jpg`
        },
        {
            id: 7,
            title: "Proses Penanaman Padi | Video Animasi Edukasi",
            url: "https://youtu.be/ktHBEHoeVwE?si=zXdQw72z7gmHdcoW",
            thumbnail: `https://img.youtube.com/vi/ktHBEHoeVwE/maxresdefault.jpg`
        },
        {
            id: 8,
            title: "Cara Mengatasi Hama Penggerek Batang Padi | Sundep & Beluk",
            url: "https://www.youtube.com/watch?v=du3QWDm42U0",
            thumbnail: `https://img.youtube.com/vi/du3QWDm42U0/maxresdefault.jpg`
        },
        {
            id: 9,
            title: "Pertanian Padi Apung - Budidaya dan Teknologi",
            url: "https://youtu.be/NHSR-GAsu8E?si=Io4UAN4pkwEQzW29",
            thumbnail: `https://img.youtube.com/vi/NHSR-GAsu8E/maxresdefault.jpg`
        }
    ];

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setIsSearched(false);
    };

    const handleSearchClick = () => {
        const filtered = videos.filter(video => 
            video.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setIsSearched(true);
        setSearchResults(filtered);
        setCurrentPage(1);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };

    const displayedVideos = isSearched ? searchResults : videos;
    const totalPages = Math.ceil(displayedVideos.length / videosPerPage);
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = displayedVideos.slice(indexOfFirstVideo, indexOfLastVideo);

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
                <h1 className="text-3xl font-bold">EDUKASI VIDEO</h1>
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
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {currentVideos.map((video) => (
                        <div key={video.id} className="flex flex-col group">
                            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={video.thumbnail} 
                                        alt={video.title} 
                                        className="w-full h-[180px] sm:h-[200px] lg:h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://img.youtube.com/vi/${video.url.split('/').pop().split('?')[0]}/hqdefault.jpg`;
                                        }}
                                    />
                                    <a 
                                        href={video.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center"
                                    >
                                        <RiPlayCircleFill className="text-white text-5xl sm:text-6xl opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 cursor-pointer" />
                                    </a>
                                </div>
                                <div className="bg-[#114232] text-white p-3 min-h-[80px] flex items-center justify-center transition-colors duration-300 hover:bg-[#326B59]">
                                    <h2 className="text-base font-medium text-center">{video.title}</h2>
                                </div>
                            </div>
                            <a 
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 border border-[#114232] text-[#114232] px-4 py-2 rounded-md hover:bg-[#114232] hover:text-white transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 w-fit self-start"
                            >
                                Lihat Video →
                            </a>
                        </div>
                    ))}
                </div>
                {isSearched && currentVideos.length === 0 && (
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

export default Video;