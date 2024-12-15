import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiSearchLine, RiArrowLeftSLine, RiArrowRightSLine, RiSendPlane2Line } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import dayjs from 'dayjs'; 

const Forum = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [discussions, setDiscussions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [opinion, setOpinion] = useState('');
  const discussionsPerPage = 10;

  useEffect(() => {
    getDiscussions();
  }, []);

  
  const getDiscussions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/discussions');
      setDiscussions(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching discussions:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setIsSearched(false);
  };

  const handleSearchClick = () => {
    const filtered = discussions.filter(discussion =>
      discussion.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      discussion.opinion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dayjs(discussion.time).format('DD MMM YYYY HH:mm').toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filtered);
    setIsSearched(true);
    setCurrentPage(1);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  }
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

  
  const handleAddDiscussion = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("You must be logged in to add a discussion.");
      return;
    }

    try {
      await axios.post('http://localhost:3000/discussions', { opinion }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Discussion added successfully!");
      setOpinion('');
      getDiscussions(); 
    } catch (error) {
      console.error("Error adding discussion:", error);
      alert("Error adding discussion.");
    }
  };

  return (
    <div className="bg-white text-[#114232] font-poppins">
      <div className="bg-[#114232] text-white text-center py-4 mb-8">
        <h1 className="text-3xl font-bold">FORUM DISKUSI</h1>
      </div>

      <div className="p-4 sm:p-8">
        <div className="flex justify-between items-center mb-8 gap-4">
          <div className="flex items-stretch w-[280px]">
            <input
              type="text"
              placeholder="Kirim Pesan"
              className="border border-[#114232] p-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-[#114232] focus:border-transparent transition-all duration-300"
              value={opinion}
              onChange={(e) => setOpinion(e.target.value)}
            />
            <button
              className="bg-[#114232] px-3 rounded-r-md hover:bg-[#1a5c45] transition-colors duration-300 flex items-center"
              onClick={handleAddDiscussion}
            >
              <RiSendPlane2Line size={16} className="text-white" />
            </button>
          </div>

          <div className="relative w-[280px]">
            <input
              type="text"
              placeholder="Cari diskusi..."
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

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-lg mb-8">
          <table className="min-w-full border-collapse">
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
      } text-white hover:bg-[#114232] transition-all duration-300`}
    >
      <td className="py-4 px-6">
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-white" size={20} />
          <span className="text-white">{discussion.sender}</span>
        </div>
      </td>
      <td className="py-4 px-6">{discussion.opinion}</td>
      <td className="py-4 px-6">{dayjs(discussion.time).format('DD MMM YYYY HH:mm')}</td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
        <div className="flex justify-center mt-8 flex-wrap gap-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2"
          >
            <RiArrowLeftSLine size={20} />
          </button>

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 py-1 ${
                currentPage === number ? 'bg-[#114232] text-white' : ''
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2"
          >
            <RiArrowRightSLine size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forum;