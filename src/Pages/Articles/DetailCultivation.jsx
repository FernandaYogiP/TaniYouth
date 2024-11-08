import { Link } from 'react-router-dom';
import { RiDownloadLine, RiWhatsappLine, RiFacebookBoxLine, RiTwitterXLine, RiSearchLine } from 'react-icons/ri';
import { CultivationImage, WatermarkLong } from '../../assets/image';


// halaman ini bersifat sementara
const DetailCultivation = () => {


    const articleData = {
        category: "BUDIDAYA TANI",
        title: "Cara Tebar Benih Padi yang Tepat",
        author: "pustaka.setjen.pertanian",
        date: "Januari 18, 2022",
        image: CultivationImage,
        content: [
            {
                type: "paragraph",
                text: "Dikutip dari situs pustaka.setjen.pertanian, terdapat beberapa cara tebar benih padi secara benar yang dapat diketahui petani."
            },
            {
                type: "paragraph",
                text: "Cara tebar benih padi secara tepat merupakan salah satu proses mempersiapkan benih padi saat dipindahkan ke sawah. Tebar benih padi ini bertujuan agar mempersiapkan benih padi yang berkualitas. Sebelum dilakukan teknik tebar benih padi, maka terdapat proses persemaian padi di suatu tempat terlebih dahulu. Persemaian ini dapat dilakukan di media tanam seperti sawah atau di halaman rumah."
            },
            {
                type: "section",
                title: "1. Persiapan Bahan",
                content: "Persiapkan benih padi, pupuk kandang, tanah, plastik, dan terpal."
            },
            {
                type: "section",
                title: "2. Seleksi Benih",
                content: "Langkah pertama yaitu mengisi ember dengan air sebanyak 2-3 liter, kemudian masukkan garam pada ember, dan mengukur kadar garam dengan tepat. Lalu masukkan benih ke dalam air garam dan sambil diaduk secara merata. Benih padi yang bernas akan keluar dengan sendirinya, sementara benih padi yang mengapung akan dibuang. Selanjutnya benih tenggelam akan ditiriskan dan dibilas dengan air yang mengalir."
            },
            {
                type: "section",
                title: "3. Perlakuan Benih",
                content: "Benih padi tersebut akan direndam dalam air selama sehari semalam dan diperam selama 2x24 jam. Selanjutnya akan muncul akar-akar berwarna putih atau berkecambah sehingga benih tersebut siap ditebar."
            },
            {
                type: "section",
                title: "4. Persiapan Tanah",
                content: "Sebelum benih padi akan ditebar, maka lakukanlah teknik persemaian di media tanah terlebih dahulu. Jangan lupa untuk campurkan pupuk organik yang sudah matang. Perbandingan tanahnya sekitar 2 atau 4 bagian, dan pupuk kompos 1 bagian."
            },
            {
                type: "section",
                title: "5. Persiapan Media untuk Penyemaian Benih",
                content: "Apabila penyemaian dilakukan di tanah, maka dapat menggunakan plastik utuh sebagai media alas dasar. Taburkan media semai secara merata dan siram hingga basah."
            },
            {
                type: "section",
                title: "6. Sebar Benih Padi",
                content: "Benih yang sudah diperam selama 2x24 jam disebarkan ke permukaan media semai yang sudah dibasahi dengan ketebalan 1,5 cm. Selanjutnya tutup dengan terpal selama kurang lebih tiga hari."
            },
            {
                type: "section",
                title: "7. Pemeliharaan Benih Padi",
                content: "Setelah tiga hari kemudian, tutup terpal dapat diambil dan lakukan penyiraman selama sehari sekali."
            },
            {
                type: "paragraph",
                text: "Demikian merupakan cara tebar benih padi secara tepat yang dapat dilakukan para petani. Melakukan tebar benih padi secara tepat dapat mengakibatkan proses penanaman padi berjalan lancar dan dapat memperoleh tingkat produktivitas yang optimal."
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
                            to="/articles/cultivation" 
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

export default DetailCultivation;