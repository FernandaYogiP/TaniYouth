import { Link } from 'react-router-dom';
import { RiDownloadLine, RiWhatsappLine, RiFacebookBoxLine, RiTwitterXLine, RiSearchLine } from 'react-icons/ri';
import { HomeArticle1, WatermarkLong } from '../../assets/image';


// halaman ini bersifat sementara
const DetailKnowledge = () => {


    const articleData = {
        category: "PENGETAHUAN",
        title: "Budidaya Padi Organik",
        author: "Dinpertan Pangan",
        date: "September 06, 2021",
        image: HomeArticle1,
        content: [
            {
                type: "paragraph",
                text: "Dikutip dari situs Dinpertan Pangan, Pemerintah berkomitmen meningkatkan produksi padi guna mencapai kedaulatan pangan melalui intensifikasi dan perluasan lahan tanam. Langkah ini optimis diwujudkan dengan bantuan teknologi dan inovasi dari Balitbangtan, meski belum semua petani memanfaatkannya."
            },
            {
                type: "section",
                title: "Varietas",
                content: "Disarankan varietas unggul dan adaptif, tahan terhadap Organisme Pengganggu Tanaman (OPT), dengan nilai ekonomis tinggi, seperti Sintanur dan Inpari 23. Varietas ini memiliki umur panen sesuai pola tanam dan pasokan air."
            },
            {
                type: "section",
                title: "Benih",
                content: "Gunakan benih bersertifikat yang berkualitas, memiliki daya tumbuh tinggi, dan dormansi sudah terlewati. Benih diolah dengan perendaman dan penggunaan pupuk hayati."
            },
            {
                type: "section",
                title: "Pesemaian",
                content: "Lahan aman dari gangguan binatang, mudah diairi, dan jauh dari lampu agar tidak menarik hama. Media tumbuh berupa campuran tanah, kompos jerami atau pupuk kandang, serta abu (perbandingan 7:2:1). Pesemaian dipantau rutin untuk pengendalian hama."
            },
            {
                type: "section",
                title: "Penyiapan Lahan",
                content: "Lahan dipupuk kompos atau pupuk kandang (5-10 ton/ha) dan diolah minimal agar tanah melumpur, bebas gulma, dan memiliki struktur baik untuk mendukung nutrisi tanaman."
            },
            {
                type: "section",
                title: "Penyulaman",
                content: "Tanaman yang mati segera disulam agar pertumbuhannya seragam, menggunakan bibit dari sisa pesemaian."
            },
            {
                type: "section",
                title: "Pengairan",
                content: "Sistem pengairan intermiten dilakukan pada fase vegetatif, dengan kondisi lahan bergantian antara basah dan kering. Pada fase generatif, lahan digenangi lagi hingga menjelang panen."
            },
            {
                type: "section",
                title: "Penyiangan",
                content: "Penyiangan dilakukan empat kali dengan interval 10 hari dan diikuti penyemprotan Pupuk Organik Cair (POC) atau Mikro Organisme Lokal (MOL)."
            },
            {
                type: "section",
                title: "Pemupukan",
                content: "MOL dari bahan alami disemprotkan tiap 10 hari sebagai tambahan nutrisi. Selain itu, bahan organik seperti Azolla dan Sesbania dapat digunakan sebagai sumber nitrogen."
            },
            {
                type: "section",
                title: "Pengendalian Hama dan Penyakit",
                content: "Pengendalian hama dilakukan secara preventif menggunakan pestisida nabati dan hayati serta pemanfaatan musuh alami."
            },
            {
                type: "section",
                title: "Panen dan Pasca Panen",
                content: "Panen dilakukan saat 90-95% bulir gabah menguning dengan kadar air 22-27%, dan segera dirontokkan, dikeringkan hingga kadar air ≤14% sebelum disimpan atau digiling. Peningkatan produksi padi ini mendukung pemenuhan kebutuhan pangan dan kesejahteraan petani dengan cara memanfaatkan teknologi sesuai kondisi agroekosistem yang beragam."
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
                            to="/articles/knowledge" 
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

export default DetailKnowledge;