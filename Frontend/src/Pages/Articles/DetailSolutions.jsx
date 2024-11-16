import { Link } from 'react-router-dom';
import { RiDownloadLine, RiWhatsappLine, RiFacebookBoxLine, RiTwitterXLine, RiSearchLine } from 'react-icons/ri';
import { SolutionsImage, WatermarkLong } from '../../assets/image';


// halaman ini bersifat sementara
const DetailSolutions = () => {


    const articleData = {
        category: "SOLUSI MASALAH",
        title: "Pengendalian Hama Penyakit Padi Sawah",
        author: "Kementrian Pertanian",
        date: "Rabu, 30 Oktober 2024",
        image: SolutionsImage,
        content: [
            {
                type: "paragraph",
                text: "Dikutip dari situs Kementrian Pertanian, berikut adalah cara pengendalian hama penyakit padi sawah."
            },
            {
                type: "section",
                title: "Tantangan dalam Pertanian Padi Berkelanjutan",
                content: "Produktivitas lahan pertanian cenderung menurun sementara sumber daya alam makin terbatas. Teknologi pertanian harus memperhatikan lingkungan fisik dan sosial agar agribisnis padi dapat terus berkelanjutan. Saat ini, produksi padi nasional bergantung pada sawah irigasi. Namun, bila hanya mengandalkan sawah irigasi, ada kendala seperti konversi lahan subur untuk keperluan non-pertanian, tingginya biaya pencetakan sawah baru, dan berkurangnya debit air. Sebaliknya, lahan kering yang luas bisa dimanfaatkan untuk budidaya padi gogo agar produksi padi lebih stabil."
            },
            {
                type: "section",
                title: "Pengendalian Gulma Secara Terpadu",
                content: "Gulma dikendalikan melalui pengolahan tanah yang baik, pengaturan air, penggunaan benih bersertifikat, dan aplikasi kompos. Penggunaan herbisida dilakukan hanya bila infestasi tinggi. Metode manual menggunakan kosrok (alat tradisional) juga sangat dianjurkan saat kondisi tanah cukup basah."
            },
            {
                type: "section",
                title: "Pengendalian Hama dan Penyakit Terpadu (PHT)",
                content: "PHT menggabungkan metode pemantauan dan pengendalian hama dengan pendekatan ekologi untuk menjaga keseimbangan alami."
            },
            {
                type: "section",
                title: "1. Keong Mas",
                content: "Ambil dan musnahkan secara manual, pasang saringan air, umpan dengan daun, dan gunakan pestisida nabati."
            },
            {
                type: "section",
                title: "2. Wereng Coklat",
                content: "Gunakan varietas tahan wereng, beri pupuk K, pantau pertumbuhan tanaman, dan gunakan insektisida sesuai kebutuhan."
            },
            {
                type: "section",
                title: "3. Penggerek Batang",
                content: "Aplikasikan insektisida sesuai tinggi genangan air."
            },
            {
                type: "section",
                title: "4. Tikus",
                content: "Lakukan gropyok masal, pemasangan TBS (Trap Barrier System), dan LTBS (Linier Trap Barrier System)."
            },
            {
                type: "section",
                title: "5. Walang Sangit",
                content: "Kendalikan gulma, beri umpan, dan semprot insektisida jika mencapai ambang ekonomi."
            },
            {
                type: "section",
                title: "Pengendalian Penyakit",
                content: ""
            },
            {
                type: "section",
                title: "1. Hawar Daun Bakteri (HDB)",
                content: "Gunakan varietas tahan, sesuaikan pupuk nitrogen, dan bersihkan area tanam dari jerami terinfeksi."
            },
            {
                type: "section",
                title: "2. Blast",
                content: "Gunakan varietas tahan, sesuaikan pupuk nitrogen, pilih waktu tanam yang tepat, dan gunakan fungisida dengan bahan aktif tertentu jika diperlukan."
            }
        ]
    };

    const handleShare = (platform) => {
        const url = window.location.href;
        const text = `Baca artikel: ${articleData.title}`;

        switch (platform) {
            case 'whatsapp':
                window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`);
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
                break;
            default:
                break;
        }
    };

    const handleDownload = () => {
        console.log('Download article');
    };

    return (
        <div className="bg-white text-[#114232] font-poppins min-h-screen flex flex-col justify-between">
            <div className="bg-[#114232] text-white text-center py-4">
                <h1 className="text-3xl font-bold">{articleData.category}</h1>
            </div>

            <div className="p-8">
                <div className="max-w-full mx-auto">
                    <div className="flex justify-end mb-8">
                        <div className="relative w-64">
                            <input
                                type="text"
                                placeholder="Cari..."
                                className="border border-[#114232] p-2 rounded-l-md rounded-r-md w-full pr-10"
                            />
                            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#114232] text-white px-3 p-2 rounded-l-full">
                                <RiSearchLine size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-4">{articleData.title}</h1>
                        <div className="text-gray-600 mb-6">
                            <p>{articleData.author} / {articleData.date}</p>
                        </div>

                        <div className="relative mb-8">
                            <img 
                                src={articleData.image} 
                                alt={articleData.title} 
                                className="w-full h-[400px] object-cover rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 w-full">
                                <img 
                                    src={WatermarkLong} 
                                    alt="Petani GO Watermark" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex gap-2 mb-8">
                            <button 
                                onClick={handleDownload}
                                className="p-2 bg-[#114232] text-white rounded-full hover:bg-[#326B59] transition"
                            >
                                <RiDownloadLine />
                            </button>
                            <button 
                                onClick={() => handleShare('whatsapp')}
                                className="p-2 bg-[#114232] text-white rounded-full hover:bg-[#326B59] transition"
                            >
                                <RiWhatsappLine />
                            </button>
                            <button 
                                onClick={() => handleShare('facebook')}
                                className="p-2 bg-[#114232] text-white rounded-full hover:bg-[#326B59] transition"
                            >
                                <RiFacebookBoxLine />
                            </button>
                            <button 
                                onClick={() => handleShare('twitter')}
                                className="p-2 bg-[#114232] text-white rounded-full hover:bg-[#326B59] transition"
                            >
                                <RiTwitterXLine />
                            </button>
                        </div>

                        <div className="prose max-w-none mb-8">
                            {articleData.content.map((section, index) => (
                                <div key={index} className="mb-6">
                                    {section.type === 'paragraph' ? (
                                        <p className="mb-4">{section.text}</p>
                                    ) : (
                                        <>
                                            <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                                            <p>{section.content}</p>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        <Link 
                            to="/articles/solutions" 
                            className="inline-flex items-center text-[#114232] hover:text-[#326B59] transition"
                        >
                            ← Kembali
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailSolutions;