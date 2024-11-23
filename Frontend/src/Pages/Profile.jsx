import React, { useState, useEffect } from 'react';
import { FaUser, FaCamera, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: 'Who Am I',
        phoneNumber: '081234567890',
        password: 'siapaaku',
        profileImage: localStorage.getItem('profileImage') || null
    });
    const [isNameModalOpen, setIsNameModalOpen] = useState(false);
    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            setProfileData(prev => ({ ...prev, profileImage: savedImage }));
        }
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error('Ukuran gambar terlalu besar. Maksimal 5MB');
                return;
            }

            if (!file.type.startsWith('image/')) {
                toast.error('File harus berupa gambar');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const imageData = reader.result;
                localStorage.setItem('profileImage', imageData);
                setProfileData(prev => ({ ...prev, profileImage: imageData }));
                toast.success('Foto profil berhasil diperbarui');
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.success('Berhasil logout');
        navigate('/Pages/Login');
    };

    // Name change handlers
    const handleChangeName = () => {
        setNewName(profileData.name);
        setIsNameModalOpen(true);
    };

    const handleNameSubmit = (e) => {
        e.preventDefault();
        if (newName.trim()) {
            setProfileData(prev => ({
                ...prev,
                name: newName.trim()
            }));
            setIsNameModalOpen(false);
            toast.success('Nama berhasil diubah');
        }
    };

    // Phone number handlers
    const handleAddPhone = () => {
        setNewPhone(profileData.phoneNumber !== '-' ? profileData.phoneNumber : '');
        setIsPhoneModalOpen(true);
    };

    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        if (newPhone.trim()) {
            setProfileData(prev => ({
                ...prev,
                phoneNumber: newPhone.trim()
            }));
            setIsPhoneModalOpen(false);
            toast.success('Nomor telepon berhasil ditambahkan');
        }
    };

    // Password change handlers
    const handleChangePassword = () => {
        setPasswordData({
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
        setIsPasswordModalOpen(true);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (passwordData.currentPassword === profileData.password) {
            if (passwordData.newPassword === passwordData.confirmPassword) {
                setProfileData(prev => ({
                    ...prev,
                    password: passwordData.newPassword
                }));
                setIsPasswordModalOpen(false);
                toast.success('Password berhasil diubah');
            } else {
                toast.error('Password baru tidak cocok');
            }
        } else {
            toast.error('Password saat ini salah');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Title Block */}
            <div className="w-full bg-[#114232] py-6">
                <h1 className="text-white text-3xl font-bold text-center">PROFIL</h1>
            </div>

            <div className="py-8">
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Profile Header */}
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

                    {/* Profile Picture Section */}
                    <div className="relative w-32 h-32 mx-auto -mt-16 mb-4">
                        <div className="w-full h-full rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                            {profileData.profileImage ? (
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

                    {/* Profile Info */}
                    <div className="p-6">
                        <div className="space-y-4">
                            <div className="border-b pb-4">
                                <h2 className="text-sm text-[#114232] font-medium">Username</h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-medium text-[#114232]">{profileData.name}</p>
                                    <button
                                        onClick={handleChangeName}
                                        className="px-4 py-1 text-sm bg-[#326B59] text-white rounded-lg hover:bg-[#114232] transition-colors duration-300"
                                    >
                                        Ubah
                                    </button>
                                </div>
                            </div>
                            <div className="border-b pb-4">
                                <h2 className="text-sm text-[#114232] font-medium">Nomor Handphone</h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-medium text-[#114232]">{profileData.phoneNumber}</p>
                                    <button
                                        onClick={handleAddPhone}
                                        className="px-4 py-1 text-sm bg-[#326B59] text-white rounded-lg hover:bg-[#114232] transition-colors duration-300"
                                    >
                                        {profileData.phoneNumber === '-' ? 'Tambah' : 'Ubah'}
                                    </button>
                                </div>
                            </div>
                            <div className="border-b pb-4">
                                <h2 className="text-sm text-[#114232] font-medium">Password</h2>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-medium text-[#114232]">********</p>
                                    <button
                                        onClick={handleChangePassword}
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

            {/* Name Change Modal */}
            {isNameModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold text-[#114232] mb-4">Ubah Nama</h2>
                        <form onSubmit={handleNameSubmit}>
                            <input
                                type="text"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                placeholder="Masukkan nama baru"
                                className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-[#114232] text-[#114232] placeholder-[#326B59]/50"
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsNameModalOpen(false)}
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

            {/* Phone Number Modal */}
            {isPhoneModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold text-[#114232] mb-4">
                            {profileData.phoneNumber === '-' ? 'Tambah Nomor' : 'Ubah Nomor'}
                        </h2>
                        <form onSubmit={handlePhoneSubmit}>
                            <input
                                type="tel"
                                value={newPhone}
                                onChange={(e) => setNewPhone(e.target.value)}
                                placeholder="Masukkan nomor handphone"
                                className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-[#114232] text-[#114232] placeholder-[#326B59]/50"
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsPhoneModalOpen(false)}
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