import React, { useState } from 'react';
import { RiSearchLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';

const Forum = () => {
    // State management
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const discussionsPerPage = 10;

    const discussions = [
        {
            id: 1,
            sender: "user1@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Senin, 11 Januari 2024 - 12:00 WIB"
        },
        {
            id: 2,
            sender: "user2@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Selasa, 12 Januari 2024 - 09:00 WIB"
        },
        {
            id: 3,
            sender: "user3@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Rabu, 13 Januari 2024 - 11:00 WIT"
        },
        {
            id: 4,
            sender: "user4@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Kamis, 14 Januari 2024 - 14:00 WIB"
        },
        {
            id: 5,
            sender: "user5@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Jumat, 15 Januari 2024 - 15:00 WIB"
        },
        {
            id: 6,
            sender: "user6@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Sabtu, 16 Januari 2024 - 16:00 WIB"
        },
        {
            id: 7,
            sender: "user7@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Minggu, 17 Januari 2024 - 17:00 WIB"
        },
        {
            id: 8,
            sender: "user8@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Senin, 18 Januari 2024 - 18:00 WIB"
        },
        {
            id: 9,
            sender: "user9@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Selasa, 19 Januari 2024 - 19:00 WIB"
        },
        {
            id: 10,
            sender: "user10@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Rabu, 20 Januari 2024 - 20:00 WIB"
        },
        {
            id: 11,
            sender: "user11@gmail.com",
            opinion: "Non risus nisi amet orci faucibus molestie lorem egestas. Mauris elit ut parturient suscipit venenatis amet.",
            time: "Kamis, 21 Januari 2024 - 21:00 WIB"
        }
    ];

    // Search functionality
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setIsSearched(false);
    };

    const handleSearchClick = () => {
        const filtered = discussions.filter(discussion => 
            discussion.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
            discussion.opinion.toLowerCase().includes(searchTerm.toLowerCase()) ||
            discussion.time.toLowerCase().includes(searchTerm.toLowerCase())
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

    // Pagination logic
    const displayedDiscussions = isSearched ? searchResults : discussions;
    const totalPages = Math.ceil(displayedDiscussions.length / discussionsPerPage);
    const indexOfLastDiscussion = currentPage * discussionsPerPage;
    const indexOfFirstDiscussion = indexOfLastDiscussion - discussionsPerPage;
    const currentDiscussions = displayedDiscussions.slice(indexOfFirstDiscussion, indexOfLastDiscussion);

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
            <div className="bg-[#114232] text-white text-center py-4 mb-8~">
                <h1 className="text-3xl font-bold">FORUM DISKUSI</h1>
            </div>

            <div className="p-8">
                {/* Search input */}
                <div className="flex justify-end mb-8">
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Cari diskusi..."
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

                {/* Table */}
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow mb-8">
                    <table className="min-w-full bg-white border-collapse">
                        <thead>
                            <tr className="bg-[#114232] text-white">
                                <th className="py-4 px-6 text-left">Pengirim</th>
                                <th className="py-4 px-6 text-left">Pendapat</th>
                                <th className="py-4 px-6 text-left">Waktu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentDiscussions.map((discussion, index) => (
                                <tr 
                                    key={discussion.id} 
                                    className={`${
                                        index % 2 === 0 ? 'bg-[#326B59]/90' : 'bg-[#114232]/90'
                                    } text-white hover:bg-[#114232] transition-colors`}
                                >
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <FaUserCircle className="text-white" size={20} />
                                            <a 
                                                href={`mailto:${discussion.sender}`} 
                                                className="text-white hover:underline"
                                            >
                                                {discussion.sender}
                                            </a>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">{discussion.opinion}</td>
                                    <td className="py-4 px-6">{discussion.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* No results message */}
                {isSearched && currentDiscussions.length === 0 && (
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

export default Forum;