import React, { useState, useEffect } from 'react';
import { FaUser, FaCamera, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        username: '',
        email: '',
        phone_number: '',
        profile_image: ''
    });
    const [isNameModalOpen, setIsNameModalOpen] = useState(false);
    const [image, setImage] = useState(profileData.profile_image);
    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [error, setError] = useState('');
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();


    const fetchProfile = async () => {
        const token = localStorage.getItem('token'); 
    
        if (!token) {
          console.error('No token found in localStorage');
          return;
        }
    
        try {
          const response = await axios.get('http://localhost:3000/profile', {
            headers: {
              'Authorization': `Bearer ${token}`, 
            },
          });
    
          setProfileData(response.data.user); 
          setImage(response.data.user.profile_image); 
          setLoading(false);
        } catch (error) {
          setError('Error fetching profile');
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchProfile();
      }, []);

    const handleImageChange = async (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
      
        try {
          const response = await axios.put('http://localhost:3000/upload/profile/image', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          });
      
          console.log('Image uploaded successfully:', response.data);
          setMessage(response.data.message);
          setImage(response.data.profileImage);
        } catch (error) {
         
          console.error('Error uploading image:', error.response ? error.response.data : error.message);
          setMessage('Error uploading image');
        }
      };
          
    

      const handleNameSubmit = async (e) => {
        e.preventDefault();
        if (newName.trim()) {
            try {
                await axios.put('http://localhost:3000/profile/name', 
                    { name: newName.trim() }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
    
                setProfileData(prev => ({ ...prev, username: newName.trim() }));
                setIsNameModalOpen(false);
                toast.success('Name updated successfully');
            } catch (err) {
                toast.error('Failed to update name');
                console.error(err);
            }
        }
    };

    const handlePhoneSubmit = async (e) => {
        e.preventDefault();
        if (newPhone.trim()) {
            try {
                await axios.put('http://localhost:3000/profile/phone', 
                    { phoneNumber: newPhone.trim() }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
    
                setProfileData(prev => ({ ...prev, phone_number: newPhone.trim() }));
                setIsPhoneModalOpen(false);
                toast.success('Phone number updated successfully');
            } catch (err) {
                toast.error('Failed to update phone number');
                console.error(err);
            }
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        const { currentPassword, newPassword, confirmPassword } = passwordData;
    
        if (!currentPassword || !newPassword || !confirmPassword) {
            toast.error('All fields are required');
            return;
        }
    
        if (newPassword !== confirmPassword) {
            toast.error('New password and confirm password do not match');
            return;
        }
    
        setLoading(true); 
    
        try {
          await axios.put('http://localhost:3000/profile/password', 
                { currentPassword, newPassword }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
    
            toast.success('Password updated successfully');
            setIsPasswordModalOpen(false); 
            setPasswordData({
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });  
        } catch (err) {
            toast.error('Failed to update password');
            console.error(err);
        } finally {
            setLoading(false); 
        }
    };
    

  
    const handleLogout = () => {
        localStorage.removeItem('token');  
        navigate('/Pages/Login');  
        toast.success('You have been logged out');
    };


    if (loading) {
        return (
            <div className="text-center py-10">
                <p className="text-xl font-semibold">Loading profile...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
           
            <div className="w-full bg-[#114232] py-6">
                <h1 className="text-white text-3xl font-bold text-center">PROFIL</h1>
            </div>

            <div className="py-8">
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-[#114232] p-6 relative">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold text-white">Profil Saya</h1>
                            <button 
                                onClick={handleLogout}
                                className="flex items-center gap-2 text-white hover:text-red-300 transition-colors duration-300"
                            >
                                <FaSignOutAlt />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative w-32 h-32 mx-auto -mt-16 mb-4">
                        <div className="w-full h-full rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                            {image ? (
                                <img 
                                    src={`http://localhost:3000/${image}`} 
                                    alt="Profile" 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        console.error('Image failed to load:', e);
                                        e.target.src = 'https://via.placeholder.com/150'; // fallback image
                                    }}
                                />
                            ) : (
                                <FaUser className="w-full h-full p-4 text-gray-400" />
                            )}
                        </div>
                        <label 
                            className="absolute bottom-0 right-0 bg-[#326B59] text-white p-2 rounded-full shadow-lg hover:bg-[#114232] transition-colors duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
                        >
                            <FaCamera className="w-4 h-4" />
                            <input
                                type="file"
                                onChange={handleImageChange}
                                accept="image/*"
                                className="hidden"
                            />
                        </label>
                        {message && <p className="text-center text-sm text-gray-600 mt-2">{message}</p>}
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            <div className="border-b pb-4">
                                <h2 className="text-sm text-[#114232] font-medium">Username</h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-medium text-[#114232]">{profileData.username}</p>
                                    <button
                                        onClick={() => setIsNameModalOpen(true)}
                                        className="px-4 py-1 text-sm bg-[#326B59] text-white rounded-lg hover:bg-[#114232] transition-colors duration-300"
                                    >
                                        Ubah
                                    </button>
                                </div>
                            </div>

                            <div className="border-b pb-4">
                                <h2 className="text-sm text-[#114232] font-medium">Nomor Telepon</h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-medium text-[#114232]">{profileData.phone_number}</p>
                                    <button
                                        onClick={() => setIsPhoneModalOpen(true)}
                                        className="px-4 py-1 text-sm bg-[#326B59] text-white rounded-lg hover:bg-[#114232] transition-colors duration-300"
                                    >
                                        {profileData.phone_number === '-' ? 'Tambah' : 'Ubah'}
                                    </button>
                                </div>
                            </div>

                            <div className="border-b pb-4">
                                <h2 className="text-sm text-[#114232] font-medium">Email</h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-medium text-[#114232]">{profileData.email}</p>
                                </div>
                            </div>

                            <div className="border-b pb-4">
                                <h2 className="text-sm text-[#114232] font-medium">Password</h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-medium text-[#114232]">**********</p>
                                    <button
                                        onClick={() => setIsPasswordModalOpen(true)}
                                        className="px-4 py-1 text-sm bg-[#326B59] text-white rounded-lg hover:bg-[#114232] transition-colors duration-300"
                                    >
                                        Ubah
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isNameModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h2 className="text-xl font-semibold mb-4">Ubah Username</h2>
                        <form onSubmit={handleNameSubmit}>
                            <div className="mb-4">
                                <label htmlFor="newName" className="block text-sm text-[#114232]">Nama Baru</label>
                                <input
                                    type="text"
                                    id="newName"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="w-full p-2 mt-2 border rounded-lg text-black"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setIsNameModalOpen(false)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#326B59] text-white rounded-lg hover:bg-[#114232]"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {isPhoneModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h2 className="text-xl font-semibold mb-4">Tambah Nomor Telepon</h2>
                        <form onSubmit={handlePhoneSubmit}>
                            <div className="mb-4">
                                <label htmlFor="newPhone" className="block text-sm text-[#114232]">Nomor Telepon Baru</label>
                                <input
                                    type="text"
                                    id="newPhone"
                                    value={newPhone}
                                    onChange={(e) => setNewPhone(e.target.value)}
                                    className="w-full p-2 mt-2 border rounded-lg text-black"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setIsPhoneModalOpen(false)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#326B59] text-white rounded-lg hover:bg-[#114232]"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
       
       {isPasswordModalOpen && (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Ubah Password</h2>
            <form onSubmit={handlePasswordSubmit}>
                <div className="mb-4">
                    <label htmlFor="currentPassword" className="block text-sm text-[#114232]">Password Lama</label>
                    <input
                        type="password"
                        id="currentPassword"
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                        className="w-full p-2 mt-2 border rounded-lg text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="newPassword" className="block text-sm text-[#114232]">Password Baru</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                        className="w-full p-2 mt-2 border rounded-lg text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm text-[#114232]">Konfirmasi Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                        className="w-full p-2 mt-2 border rounded-lg text-black"
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={() => setIsPasswordModalOpen(false)}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#326B59] text-white rounded-lg hover:bg-[#114232] disabled:opacity-50"
                        disabled={loading}  
                    >
                        {loading ? 'Loading...' : 'Simpan'}
                    </button>
                </div>
            </form>
        </div>
    </div>
)}        </div>
    );
};

export default Profile;