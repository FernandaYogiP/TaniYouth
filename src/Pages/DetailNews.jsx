import { Link } from 'react-router-dom';
import { RiDownloadLine, RiWhatsappLine, RiFacebookBoxLine, RiTwitterXLine, RiSearchLine } from 'react-icons/ri';
import { GambarBerita, WatermarkLong } from '../assets/image';

// halaman ini bersifat sementara
const DetailNews= () => {

    const newsData = {
        category: "BERITA",
        title: "Pemerintah Luncurkan Program Cetak Sawah untuk Perkuat Ketahanan Pangan",
        author: "Aris Kurniawan",
        date: "Jumat, 25 Oktober 2024",
        image: GambarBerita,
        content: [
            {
                type: "paragraph",
                text: "JAKARTA - Dalam upaya memperkuat ketahanan pangan nasional, pemerintah tengah mempersiapkan program cetak sawah baru yang menargetkan pengembangan 3 juta hektare lahan sawah hingga tahun 2029. Program ini diharapkan dapat memastikan keberlanjutan pasokan pangan nasional serta mendukung sektor pertanian sebagai pilar ekonomi yang kokoh di tengah ancaman krisis pangan global."
            },
            {
                type: "section",
                content: "Direktur Jenderal Prasarana dan Sarana Pertanian Andi Nur Alam Syah menekankan pentingnya pemanfaatan rawa dan lahan suboptimal lainnya untuk pertanian. Menurutnya, ini merupakan keniscayaan karena lahan produktif terus menyusut sementara kebutuhan pangan semakin meningkat."
            },
            {
                type: "section",
                content: "“Kami fokus memanfaatkan lahan potensial yang belum tergarap optimal, seperti rawa dan lahan suboptimal, untuk mendukung produksi pangan nasional. Pada tahap awal, 150.000 hektar akan dicetak pada tahun 2025,” ujar Andi di Jakarta, Kamis (24/10/2024)."
            },
            {
                type: "section",
                content: "Program cetak sawah ini akan dilaksanakan secara bertahap, dimulai dari perencanaan, survei teknis lapangan, hingga penyusunan regulasi dan panduan teknis. Pemerintah juga akan melibatkan berbagai instansi terkait dalam pelaksanaannya."
            },
            {
                type: "section",
                content: "“Langkah awal kami adalah survei kesesuaian lahan dan investigasi untuk memastikan komoditas yang paling sesuai dikembangkan di tiap lokasi. Ini termasuk kajian izin, HGU, tata ruang, dan kriteria teknis lainnya,” kata Andi."
            },
            {
                type: "section",
                content: "Selain pemanfaatan lahan suboptimal, program ini juga menyasar daerah dengan akses irigasi yang memadai untuk mendukung produktivitas optimal. Kawasan-kawasan seperti Kalimantan Selatan, Kalimantan Tengah, dan Sumatera Selatan menjadi prioritas untuk pengembangan sawah baru."
            },
            {
                type: "section",
                content: "Wakil Menteri Pertanian Sudaryono menambahkan, program ini tidak hanya bertujuan memperluas lahan, tetapi juga meningkatkan produktivitas pertanian sekaligus memberikan dampak ekonomi positif bagi masyarakat pedesaan."
            },
            {
                type: "section",
                content: "“Ini bukan hanya tentang memperluas lahan, tetapi juga memastikan produktivitas pertanian meningkat signifikan untuk mencukupi kebutuhan masyarakat“ kata Sudaryono."
            },
            {
                type: "section",
                content: "Dengan persiapan yang matang dan target yang jelas, pemerintah optimis bahwa program cetak sawah ini dapat memperkuat ketahanan pangan Indonesia sekaligus mendukung stabilitas ekonomi dalam menghadapi tantangan global yang semakin kompleks."
            },
        ]
    };

    const handleShare = (platform) => {
        const url = window.location.href;
        const text = `Baca Berita: ${newsData.title}`;

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
        console.log('Download Berita');
    };

    return (
        <div className="bg-white text-[#114232] font-poppins min-h-screen flex flex-col justify-between">
            <div className="bg-[#114232] text-white text-center py-4">
                <h1 className="text-3xl font-bold">{newsData.category}</h1>
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
                        <h1 className="text-3xl font-bold mb-4">{newsData.title}</h1>
                        <div className="text-gray-600 mb-6">
                            <p>{newsData.author} / {newsData.date}</p>
                        </div>

                        <div className="relative mb-8">
                            <img 
                                src={newsData.image} 
                                alt={newsData.title} 
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
                        {newsData.content.map((section, index) => (
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
                            to="/News" 
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

export default DetailNews;