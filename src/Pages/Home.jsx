import React from 'react';
import { HomeImage, UsImage, HomeDownImage, HomeModulesImage } from '../assets/image'; // Pastikan home_modules.png diimpor dengan benar

const Home = () => {
    return (
        <main>
            <section className="relative w-full h-[500px] overflow-hidden">
                <img 
                    src={HomeImage} 
                    alt="Hands holding a small plant" 
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-1/3 right-32 bg-[#1E1E1E] bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
                    <h1 className="text-white">
                        <span className="text-2xl font-normal">Sebuah tempat</span> <br />
                        <span className="text-4xl font-bold">Informasi & Solusi</span> <br />
                        <span className="text-4xl font-bold">Pertanian</span>
                    </h1>
                </div>
            </section>
            <section className="p-8 bg-[#114232] text-white">
                <div className="flex items-center space-x-8 max-w-6xl mx-auto">
                    <div className="w-1/2 flex justify-center">
                        <img 
                            src={UsImage} 
                            alt="Farmer in a field" 
                            className="rounded-full w-3/4 max-w-[350px] min-w-[200px] object-cover"
                        />
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Petani GO adalah platform yang menyediakan informasi dan solusi untuk para petani. 
                            Kami berkomitmen untuk membantu petani meningkatkan hasil panen dan kesejahteraan mereka.
                        </p>
                        <h2 className="text-3xl font-bold mb-4">Fokus Kami</h2>
                        <p className="text-lg leading-relaxed">
                            Kami fokus pada penyediaan informasi yang akurat dan solusi praktis untuk masalah pertanian. 
                            Kami juga menyediakan forum online untuk diskusi dan berbagi pengalaman antar petani.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white text-[#114232] p-8">
                <h2 className="text-2xl font-bold mb-4">Info dan Wawasan</h2>
                <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="flex items-start mb-4">
                        <button className="border border-blue-600 text-blue-600 flex items-center px-4 py-2 rounded hover:bg-blue-100 transition ml-14 mt-20">
                            Artikel Selengkapnya 
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                            </svg>
                        </button>
                    </div>
                    <div className="bg-green-700 px-0 w-64 rounded-md">
                        <img 
                            src="https://placehold.co/300x200" 
                            alt="Agricultural news 1" 
                            className="w-full h-40 object-cover rounded mb-2 max-w-[300px] min-w-[100px]"
                        />
                        <h3 className="font-bold text-white">Judul Berita Pertanian 1</h3>
                        <p className='text-white'>Deskripsi singkat berita pertanian 1.</p>
                    </div>
                    <div className="bg-gray-100 px-0 w-64 rounded-md">
                        <img 
                            src="https://placehold.co/300x200" 
                            alt="Agricultural news 2" 
                            className="w-full h-40 object-cover rounded mb-2 max-w-[300px] min-w-[100px]"
                        />
                        <h3 className="font-bold">Judul Berita Pertanian 2</h3>
                        <p>Deskripsi singkat berita pertanian 2.</p>
                    </div>
                    <div className="bg-gray-100 px-0 w-64 rounded-md">
                        <img 
                            src="https://placehold.co/300x200" 
                            alt="Agricultural news 3" 
                            className="w-full h-40 object-cover rounded mb-2 max-w-[300px] min-w-[100px]"
                        />
                        <h3 className="font-bold">Judul Berita Pertanian 3</h3>
                        <p>Deskripsi singkat berita pertanian 3.</p>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <div className="flex items-start mb-4">
                        <button className="border border-lime-700 text-lime-700 flex items-center px-4 py-2 rounded hover:bg-lime-100 transition ml-14 mt-20">
                            Berita Selengkapnya 
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                            </svg>
                        </button>
                    </div>
                    <div className="bg-gray-100 px-0 w-64 rounded">
                        <img 
                            src="https://placehold.co/300x200" 
                            alt="Agricultural news 4" 
                            className="w-full h-40 object-cover rounded mb-2 max-w-[300px] min-w-[100px]"
                        />
                        <h3 className="font-bold">Judul Berita Pertanian 4</h3>
                        <p>Deskripsi singkat berita pertanian 4.</p>
                    </div>
                    <div className="bg-gray-100 px-0 w-64 rounded">
                        <img 
                            src="https://placehold.co/300x200" 
                            alt="Agricultural news 5" 
                            className="w-full h-40 object-cover rounded mb-2 max-w-[300px] min-w-[100px]"
                        />
                        <h3 className="font-bold">Judul Berita Pertanian 5</h3>
                        <p>Deskripsi singkat berita pertanian 5.</p>
                    </div>
                    <div className="bg-gray-100 px-0 w-64 rounded">
                        <img 
                            src="https://placehold.co/300x200" 
                            alt="Agricultural news 6" 
                            className="w-full h-40 object-cover rounded mb-2 max-w-[300px] min-w-[100px]"
                        />
                        <h3 className="font-bold">Judul Berita Pertanian 6</h3>
                        <p>Deskripsi singkat berita pertanian 6.</p>
                    </div>
                </div>
            </section>
            <section 
                className="p-8"
                style={{ backgroundImage: `url(${HomeDownImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <h2 className="text-2xl font-bold mb-4 text-[#114232]">Modul</h2>
                <p className="text-lg leading-relaxed mb-6 text-[#114232]">
                    Bagaimana kita belajar untuk budidaya pertanian?
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div 
                        className="bg-gray-100 h-64 rounded"
                        style={{ backgroundImage: `url(${HomeModulesImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="p-8">
                            <h3 className="font-bold text-white">Modul Pembelajaran 1</h3>
                            <p className="text-white">modul pembelajaran 1.</p>
                        </div>
                    </div>
                    <div 
                        className="bg-gray-100 h-64 rounded"
                        style={{ backgroundImage: `url(${HomeModulesImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="p-8">
                            <h3 className="font-bold text-white">Modul Pembelajaran 2</h3>
                            <p className="text-white">modul pembelajaran 2.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;