import { Link } from 'react-router-dom';
import { RiSearchLine, RiArrowLeftSLine, RiArrowRightSLine, RiPlayCircleFill } from 'react-icons/ri';
import { VideoImage1, VideoImage2, VideoImage3 } from '../../assets/image';
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
            title: "Sukses Bisnis Pertanian Hortikultura Dari Hulu sampai Hilir",
            image: VideoImage1
        },
        {
            id: 2,
            title: "Bertani Organik Cara Petani Banyuwangi Putus Hubungan dengan Pestisida",
            image: VideoImage2
        },
        {
            id: 3,
            title: "Ogah Jadi Petani, Perabin",
            image: VideoImage3
        },
        {
            id: 4,
            title: "Sukses Bisnis Pertanian Hortikultura Dari Hulu sampai Hilir",
            image: VideoImage1
        },
        {
            id: 5,
            title: "Bertani Organik Cara Petani Banyuwangi Putus Hubungan dengan Pestisida",
            image: VideoImage2
        },
        {
            id: 6,
            title: "Ogah Jadi Petani, Perabin",
            image: VideoImage3
        },
        {
            id: 7,
            title: "Sukses Bisnis Pertanian Hortikultura Dari Hulu sampai Hilir",
            image: VideoImage1
        },
        {
            id: 8,
            title: "Bertani Organik Cara Petani Banyuwangi Putus Hubungan dengan Pestisida",
            image: VideoImage2
        },
        {
            id: 9,
            title: "Ogah Jadi Petani, Perabin",
            image: VideoImage3
        },
        {
            id: 10,
            title: "Sukses Bisnis Pertanian Hortikultura Dari Hulu sampai Hilir",
            image: VideoImage1
        },
        {
            id: 11,
            title: "Bertani Organik Cara Petani Banyuwangi Putus Hubungan dengan Pestisida",
            image: VideoImage2
        },
        {
            id: 12,
            title: "Ogah Jadi Petani, Perabin",
            image: VideoImage3
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
        setSearchResults(filtered);
        setIsSearched(true);
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
            <div className="bg-[#114232] text-white text-center py-4 mb-8 -mx-8">
                <h1 className="text-3xl font-bold">EDUKASI VIDEO</h1>
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
                    {currentVideos.map((video) => (
                        <div key={video.id} className="flex flex-col">
                            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                                <div className="relative">
                                    <img 
                                        src={video.image} 
                                        alt={video.title} 
                                        className="w-full h-[200px] object-cover rounded-t-lg" 
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <RiPlayCircleFill className="text-white text-5xl opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
                                    </div>
                                </div>
                                <div className="bg-[#114232] text-white p-3 min-h-[80px] flex items-center justify-center">
                                    <h2 className="text-base font-medium text-center">{video.title}</h2>
                                </div>
                            </div>
                            <Link 
                                to="#"
                                className="mt-4 border border-[#114232] text-[#114232] px-4 py-2 rounded-md hover:bg-[#114232] hover:text-white transition w-fit self-start"
                            >
                                Lihat Video →
                            </Link>
                        </div>
                    ))}
                </div>
                {isSearched && currentVideos.length === 0 && (
                    <div className="text-center text-gray-500 mt-8">
                        Tidak ada hasil yang ditemukan
                    </div>
                )}
                
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

export default Video;