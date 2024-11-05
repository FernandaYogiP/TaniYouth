import { RiSearchLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { CultivationImage, Watermark } from '../../assets/image';

const Cultivation = () => {
    const articles = Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        title: "Cara Tebar Benih Padi Yang Tepat",
        date: "Januari 18, 2022",
        author: "pustaka.setjen.pertanian",
        image: CultivationImage,
    }));

    return (
        <div className="bg-white text-[#114232] p-8 font-poppins">
            <div className="bg-[#114232] text-white text-center py-4 mb-8 -mx-8">
                <h1 className="text-3xl font-bold">ARTIKEL BUDIDAYA TANI</h1>
            </div>
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
            <div className="grid grid-cols-3 gap-8">
                {articles.map((article) => (
                    <div key={article.id} className="flex flex-col">
                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                            <div className="relative">
                                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                                <div className="absolute bottom-0 left-0 w-full">
                                    <img 
                                        src={Watermark} 
                                        alt="Petani GO Watermark" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-gray-500">{article.author} / {article.date}</p>
                            </div>
                            <div className="bg-[#114232] text-white p-3 text-center">
                                <h2 className="text-lg font-bold">{article.title}</h2>
                            </div>
                        </div>
                        <button className="mt-4 border border-[#114232] text-[#114232] px-4 py-2 rounded-md hover:bg-[#114232] hover:text-white transition w-fit self-start">
                            Baca Artikel →
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button className="mx-2">
                    <RiArrowLeftSLine size={20} />
                </button>
                <button className="mx-2 bg-[#114232] text-white px-3 py-1 rounded-md">1</button>
                <button className="mx-2">2</button>
                <button className="mx-2">3</button>
                <button className="mx-2">
                    <RiArrowRightSLine size={20} />
                </button>
            </div>
        </div>
    );
};

export default Cultivation;