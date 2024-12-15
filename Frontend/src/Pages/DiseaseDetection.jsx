import React, { useState, useCallback, useEffect } from 'react';
import { FaCamera, FaUpload, FaChevronDown, FaImage, FaFileAlt } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DiseaseDetection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedFileType, setSelectedFileType] = useState('image');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/Pages/Login');
        }
    }, [navigate]); 

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file)); 
            setLoading(true);
            setError(null);
    
            try {
                const token = localStorage.getItem('authToken'); 
                const formData = new FormData();
                formData.append('file', file);
    
                const response = await axios.post(
                    'https://project-1.1pgwqqw523uf.us-south.codeengine.appdomain.cloud/predict',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization:`Bearer ${token}`,
                        },
                    }
                );
                console.log('API Response:', response.data);
                setResult(response.data); // Simpan hasil deteksi
            } catch (error) {
                setError('Deteksi gambar gagal');
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': []
        },
        multiple: false,
        noClick: true
    });

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                setSelectedImage(reader.result);

                setLoading(true);
                setError(null);
                try {
                    const formData = new FormData();
                    formData.append('file', file);

                    const response = await axios.post(
                        'https://project-1.1pgwqqw523uf.us-south.codeengine.appdomain.cloud/predict',
                        formData,
                        { headers: { 'Content-Type': 'multipart/form-data' } }
                    );
                    console.log('API Response:', response.data);  
                    setResult(response.data);  
                } catch (error) {
                    setError('File upload failed');
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const getAcceptTypes = () => {
        return selectedFileType === 'image'
            ? "image/*"
            : ".pdf,.doc,.docx,.txt";
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-[#114232] text-white text-center py-4 mb-8">
                <h1 className="text-3xl font-bold">DETEKSI PENYAKIT</h1>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-8 aspect-video bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        {selectedImage ? (
                            <img
                                src={selectedImage}
                                alt="Preview"
                                className="max-w-full max-h-full object-contain"
                            />
                        ) : (
                            <div className="text-gray-400 flex flex-col items-center">
                                <FaCamera size={48} className="mb-2" />
                                <span>Preview gambar akan muncul di sini</span>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                            <div className="flex">
                                <label className="bg-[#114232] hover:bg-[#1a5c45] text-white px-6 py-3 rounded-l-md cursor-pointer transition-colors duration-300 flex items-center gap-2">
                                    {selectedFileType === 'image' ? <FaImage /> : <FaFileAlt />}
                                    <span>Unggah {selectedFileType === 'image' ? 'Gambar' : 'Dokumen'}</span>
                                    <input
                                        type="file"
                                        accept={getAcceptTypes()}
                                        onChange={handleFileUpload}
                                        className="hidden"
                                    />
                                </label>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="bg-[#114232] hover:bg-[#1a5c45] text-white px-3 rounded-r-md border-l border-[#326B59] transition-colors duration-300 flex items-center"
                                >
                                    <FaChevronDown />
                                </button>
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute mt-1 w-full bg-white border border-[#114232] rounded-md shadow-lg z-10 overflow-hidden">
                                    <button
                                        onClick={() => {
                                            setSelectedFileType('image');
                                            setIsDropdownOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-2 hover:bg-[#e8f5e9] text-[#114232] transition-colors duration-300 flex items-center gap-2"
                                    >
                                        <FaImage className="text-[#114232]" />
                                        Gambar
                                    </button>
                                    <div className="border-t border-[#114232] opacity-20"></div>
                                    <button
                                        onClick={() => {
                                            setSelectedFileType('document');
                                            setIsDropdownOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-2 hover:bg-[#e8f5e9] text-[#114232] transition-colors duration-300 flex items-center gap-2"
                                    >
                                        <FaFileAlt className="text-[#114232]" />
                                        Dokumen
                                    </button>
                                </div>
                            )}
                        </div>

                        <div
                            {...getRootProps()}
                            className={`w-full text-center p-4 border-2 border-dashed rounded-md transition-colors duration-300 ${isDragActive ? 'border-[#114232] bg-[#e8f5e9] text-[#114232]' : 'border-gray-300 text-gray-400'}`}
                        >
                            <input {...getInputProps()} />
                            <div className="flex flex-col items-center gap-2">
                                <FaUpload size={24} />
                                <p>{isDragActive ? 'Lepaskan file di sini...' : 'Seret dan lepaskan file di sini'}</p>
                            </div>
                        </div>

                        {loading && <p>Loading...</p>}
                        {error && <p className="text-red-500">{error}</p>}

                        {result && (
                            <div className="mt-5 p-4 bg-[#e8f5e9] border border-[#114232] rounded-lg">
                                <h2 className="text-xl font-bold text-[#114232] text-center">Hasil Deteksi</h2>
                                <p className='text-[#114232]'>{result.class_name || 'No result data'}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiseaseDetection;