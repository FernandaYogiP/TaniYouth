import React from 'react';
import { GambarBerita } from '../assets/image';

const News = () => {
    const articles = Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        title: "Pemerintah Luncurkan Program Cetak Sawah untuk Perkuat Ketahanan Pangan",
        date: "Jumat, 25 Oktober 2024",
        time: "12:57 WIB",
        author: "Aris Kurniawan",
        source: "SindoNews.com",
        image: GambarBerita,
    }));

    return (
        <div className="bg-white text-[#114232] p-8">
            <div className="bg-[#114232] text-white text-center py-4 mb-8">
                <h1 className="text-3xl font-bold">BERITA MEDIA</h1>
            </div>
            <div className="flex justify-end mb-8">
                <input
                    type="text"
                    placeholder="Cari..."
                    className="border border-[#114232] p-2 rounded-l-md"
                />
                <button className="bg-[#114232] text-white p-2 rounded-r-md">
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <div className="grid grid-cols-3 gap-8">
                {articles.map((article) => (
                    <div key={article.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <p className="text-sm text-gray-500">{article.source} / {article.author} / {article.date} | {article.time}</p>
                            <h2 className="text-lg font-bold mt-2">{article.title}</h2>
                            <button className="mt-4 border border-[#114232] text-[#114232] px-4 py-2 rounded-md hover:bg-[#114232] hover:text-white transition">
                                Baca Berita →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button className="mx-2">←</button>
                <button className="mx-2 bg-[#114232] text-white px-3 py-1 rounded-md">1</button>
                <button className="mx-2">2</button>
                <button className="mx-2">3</button>
                <button className="mx-2">→</button>
            </div>
        </div>
    );
};

export default News;