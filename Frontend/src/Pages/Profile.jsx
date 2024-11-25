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
    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:3000/profile', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        })
        .then(response => {
            setProfileData(response.data.user);
            setLoading(false); 
        })
        .catch(err => {
            toast.error('Error fetching profile');
            console.error(err);
            setLoading(false); 
        });
    }, []);

 
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('profileImage', file);

            axios.put('http://localhost:3000/uploads/profile/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((response) => {
                setProfileData((prev) => ({
                    ...prev,
                    profile_image: response.data.profileImage,  // Update profile image state with new path
                }));
                toast.success('Profile image updated successfully');
            })
            .catch((err) => {
                toast.error('Failed to upload image');
                console.error(err);
            });
        }
    };
    

    const handleNameSubmit = (e) => {
        e.preventDefault();
        if (newName.trim()) {
            axios.put('http://localhost:3000/profile/name', { name: newName.trim() }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(() => {
                setProfileData(prev => ({ ...prev, name: newName.trim() }));
                setIsNameModalOpen(false);
                toast.success('Name updated successfully');
            })
            .catch(err => {
                toast.error('Failed to update name');
                console.error(err);
            });
        }
    };

    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        if (newPhone.trim()) {
            axios.post('http://localhost:3000/profile/phone', { phoneNumber: newPhone.trim() }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(() => {
                setProfileData(prev => ({ ...prev, phoneNumber: newPhone.trim() }));
                setNewPhone(''); 
                toast.success('Phone number added successfully');
            })
            .catch(err => {
                toast.error('Failed to update phone number');
                console.error(err);
            });
        }
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        const { currentPassword, newPassword, confirmPassword } = passwordData;
    
        // Validate the form
        if (!currentPassword || !newPassword || !confirmPassword) {
            toast.error('All fields are required');
            return;
        }
    
        if (newPassword !== confirmPassword) {
            toast.error('New password and confirm password do not match');
            return;
        }
    
        setLoading(true); // Set loading state to true
    
        axios.put('http://localhost:3000/profile/password', { currentPassword, newPassword }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(() => {
            toast.success('Password updated successfully');
            setIsPasswordModalOpen(false);  // Close the modal
            setPasswordData({
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });  // Reset the password form
        })
        .catch(err => {
            toast.error('Failed to update password');
            console.error(err);
        })
        .finally(() => {
            setLoading(false); // Reset loading state
        });
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
                            {profileData.profile_image ? (
                                <img 
                                    src={profileData.profileImage} 
                                    alt="Profile" 
                                    className="w-full h-full object-cover"
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
                                        {profileData.phoneNumber === '-' ? 'Tambah' : 'Ubah'}
                                    </button>
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

            {/* Password Change Modal */}
            {isPasswordModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold text-[#114232] mb-4">Ubah Password</h2>
                        <form onSubmit={handlePasswordSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-[#114232]">Password Saat Ini</label>
                                    <input
                                        type="password"
                                        value={passwordData.currentPassword}
                                        onChange={(e) => setPasswordData(prev => ({
                                            ...prev,
                                            currentPassword: e.target.value
                                        }))}
                                        className="w-full p-2 border rounded-lg focus:outline-none focus:border-[#114232] text-[#114232] placeholder-[#326B59]/50"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-[#114232]">Password Baru</label>
                                    <input
                                        type="password"
                                        value={passwordData.newPassword}
                                        onChange={(e) => setPasswordData(prev => ({
                                            ...prev,
                                            newPassword: e.target.value
                                        }))}
                                        className="w-full p-2 border rounded-lg focus:outline-none focus:border-[#114232] text-[#114232] placeholder-[#326B59]/50"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-[#114232]">Konfirmasi Password Baru</label>
                                    <input
                                        type="password"
                                        value={passwordData.confirmPassword}
                                        onChange={(e) => setPasswordData(prev => ({
                                            ...prev,
                                            confirmPassword: e.target.value
                                        }))}
                                        className="w-full p-2 border rounded-lg focus:outline-none focus:border-[#114232] text-[#114232] placeholder-[#326B59]/50"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-2 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsPasswordModalOpen(false)}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
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
        </div>
    );
};

export default Profile;
