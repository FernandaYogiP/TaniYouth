import {
  HomeImage,
  UsImage,
  HomeDownImage,
  HomeModulesImage,
  HomeArticle1,
  HomeArticle2,
  HomeArticle3,
  HomeNews1,
  HomeNews2,
  HomeNews3,
  Watermark,
} from "../assets/image";
import { RiBookLine, RiVideoLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Pastikan Anda mengimpor CSS Toastify
import { useEffect } from 'react';



const Home = () => {
  const [searchParams] = useSearchParams();
  
  const successMessage = searchParams.get('success');

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
  }, []); // This will run whenever the successMessage changes

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const cardClasses = {
    moreInfo: "lg:w-1/4",
    wrapper: "min-w-full lg:min-w-0 lg:w-1/4",
    card: "border border-gray-200 rounded-lg overflow-hidden shadow-lg h-[280px] flex flex-col",
    imageContainer: "relative h-48",
    image: "w-full h-full object-cover",
    watermarkContainer: "absolute bottom-0 left-0 w-full",
    watermark: "w-full h-full object-cover grayscale",
    titleContainer: "bg-[#114232] text-white p-3 flex-grow flex items-center",
    title: "text-lg font-medium line-clamp-2",
    button:
      "my-auto lg:my-13 border border-[#114232] text-[#114232] flex items-center px-6 py-3 rounded hover:bg-[#114232] hover:text-white transition duration-300 ease-in-out",
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src={HomeImage}
          alt="Hands holding a small plant"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-1/3 right-32 bg-[#1E1E1E] bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
          <h1 className="text-white">
            <span className="text-2xl font-normal">Sebuah tempat</span> <br />
            <span className="text-4xl font-bold">Informasi & Solusi</span>{" "}
            <br />
            <span className="text-4xl font-bold">Pertanian</span>
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="p-8 bg-[#114232] text-white">
        <div className="flex items-center flex-col lg:flex-row space-x-8 lg:max-w-6xl mx-auto gap-10">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={UsImage}
              alt="Farmer in a field"
              className="rounded-full w-3/4 lg:max-w-[350px] min-w-[200px] object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">Tentang Kami</h2>
            <p className="text-lg leading-relaxed mb-6 text-center lg:text-left">
              Petani GO adalah platform yang menyediakan informasi dan solusi
              untuk para petani. Kami berkomitmen untuk membantu petani
              meningkatkan hasil panen dan kesejahteraan mereka.
            </p>
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">Fokus Kami</h2>
            <p className="text-lg leading-relaxed text-center lg:text-left">
              Kami fokus pada penyediaan informasi yang akurat dan solusi
              praktis untuk masalah pertanian. Kami juga menyediakan forum
              online untuk diskusi dan berbagi pengalaman antar petani.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white text-[#114232] p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">INFO DAN WAWASAN</h2>

          {/* Artikel Row */}
          <div className="flex gap-8 mb-8 overflow-scroll lg:overflow-hidden">
            <div className={cardClasses.moreInfo}>
              <div className="h-[280px] flex items-end my-auto lg:pb-8">
                <Link
                  to="/articles/knowledge"
                  onClick={scrollToTop}
                  className={cardClasses.button}
                >
                  Artikel Selengkapnya →
                </Link>
              </div>
            </div>
            {/* Card 1 */}
            <div className={cardClasses.wrapper}>
              <div className={cardClasses.card}>
                <div className={cardClasses.imageContainer}>
                  <img
                    src={HomeArticle1}
                    alt="Budidaya Padi Organik"
                    className={cardClasses.image}
                  />
                  <div className={cardClasses.watermarkContainer}>
                    <img
                      src={Watermark}
                      alt="Petani GO Watermark"
                      className={cardClasses.watermark}
                    />
                  </div>
                </div>
                <div className={cardClasses.titleContainer}>
                  <h3 className={cardClasses.title}>Budidaya Padi Organik</h3>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className={cardClasses.wrapper}>
              <div className={cardClasses.card}>
                <div className={cardClasses.imageContainer}>
                  <img
                    src={HomeArticle2}
                    alt="Cara Tebar Benih Padi"
                    className={cardClasses.image}
                  />
                  <div className={cardClasses.watermarkContainer}>
                    <img
                      src={Watermark}
                      alt="Petani GO Watermark"
                      className={cardClasses.watermark}
                    />
                  </div>
                </div>
                <div className={cardClasses.titleContainer}>
                  <h3 className={cardClasses.title}>
                    Cara Tebar Benih Padi Yang Tepat
                  </h3>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className={cardClasses.wrapper}>
              <div className={cardClasses.card}>
                <div className={cardClasses.imageContainer}>
                  <img
                    src={HomeArticle3}
                    alt="Pengendalian Hama"
                    className={cardClasses.image}
                  />
                  <div className={cardClasses.watermarkContainer}>
                    <img
                      src={Watermark}
                      alt="Petani GO Watermark"
                      className={cardClasses.watermark}
                    />
                  </div>
                </div>
                <div className={cardClasses.titleContainer}>
                  <h3 className={cardClasses.title}>
                    Pengendalian Hama Penyakit Padi Sawah
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Berita Row */}
          <div className="flex gap-8 overflow-scroll lg:overflow-hidden">
            <div className={cardClasses.moreInfo}>
              <div className="h-[280px] flex items-end pb-8">
                <Link
                  to="/news"
                  onClick={scrollToTop}
                  className={cardClasses.button}
                >
                  Berita Selengkapnya →
                </Link>
              </div>
            </div>
            {/* News Card 1 */}
            <div className={cardClasses.wrapper}>
              <div className={cardClasses.card}>
                <div className={cardClasses.imageContainer}>
                  <img
                    src={HomeNews1}
                    alt="Program Cetak Sawah"
                    className={cardClasses.image}
                  />
                  <div className={cardClasses.watermarkContainer}>
                    <img
                      src={Watermark}
                      alt="Petani GO Watermark"
                      className={cardClasses.watermark}
                    />
                  </div>
                </div>
                <div className={cardClasses.titleContainer}>
                  <h3 className={cardClasses.title}>
                    Pemerintah Luncurkan Program Cetak Sawah untuk Perkuat
                    Ketahanan Pangan
                  </h3>
                </div>
              </div>
            </div>
            {/* News Card 2 */}
            <div className={cardClasses.wrapper}>
              <div className={cardClasses.card}>
                <div className={cardClasses.imageContainer}>
                  <img
                    src={HomeNews2}
                    alt="Jambore Tani 2024"
                    className={cardClasses.image}
                  />
                  <div className={cardClasses.watermarkContainer}>
                    <img
                      src={Watermark}
                      alt="Petani GO Watermark"
                      className={cardClasses.watermark}
                    />
                  </div>
                </div>
                <div className={cardClasses.titleContainer}>
                  <h3 className={cardClasses.title}>
                    Jambore Tani 2024, Inovasi dan Kolaborasi di Sektor
                    Pertanian
                  </h3>
                </div>
              </div>
            </div>
            {/* News Card 3 */}
            <div className={cardClasses.wrapper}>
              <div className={cardClasses.card}>
                <div className={cardClasses.imageContainer}>
                  <img
                    src={HomeNews3}
                    alt="Dukung Swasembada"
                    className={cardClasses.image}
                  />
                  <div className={cardClasses.watermarkContainer}>
                    <img
                      src={Watermark}
                      alt="Petani GO Watermark"
                      className={cardClasses.watermark}
                    />
                  </div>
                </div>
                <div className={cardClasses.titleContainer}>
                  <h3 className={cardClasses.title}>
                    Dukung Swasembada Pangan, Polri Akan Rekrut Bintara Lulusan
                    SMK Pertanian
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module Section */}
      <section
        className="p-8"
        style={{
          backgroundImage: `url(${HomeDownImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header dan Deskripsi */}
          <div className="grid grid-cols-12 mb-8 gap-5">
            <div className="col-span-12 lg:col-span-3">
              <h2 className="text-2xl font-bold mb-4 text-[#114232] text-center lg:text-left">Modul</h2>
              <p className="text-lg leading-relaxed text-[#114232] text-center lg:text-left">
                Bagaimana kita belajar untuk budidaya pertanian?
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-[#114232] text-center lg:text-left">
                Berfokus pada keberlanjutan, kami memiliki tiga fokus utama
                untuk meningkatkan produktivitas petani kecil: pembangunan
                ekonomi, pertanian regeneratif, dan ketahanan iklim.
              </p>
            </div>
          </div>

          {/* Card Modul */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Link
              to="/modules/edukasi-buku"
              onClick={scrollToTop}
              className="bg-[#114232] lg:h-80 rounded-lg relative overflow-hidden transform transition-transform hover:scale-105 hover:bg-opacity-80 duration-300 ease-in-out"
            >
              <div className="absolute right-0 bottom-0">
                <img
                  src={HomeModulesImage}
                  alt="Module decoration"
                  className="opacity-30"
                />
              </div>
              <div className="p-8 flex flex-col justify-center h-full relative z-10">
                <div className="flex flex-col items-start">
                  <RiBookLine className="text-white text-3xl mb-2" />
                  <h3 className="font-bold text-white text-2xl mb-4">
                    Modul Pembelajaran
                  </h3>
                </div>
                <p className="text-white text-lg">Selengkapnya ➔</p>
              </div>
            </Link>

            <Link
              to="/modules/edukasi-video"
              onClick={scrollToTop}
              className="bg-[#114232] lg:h-80 rounded-lg relative overflow-hidden transform transition-transform hover:scale-105 hover:bg-opacity-80 duration-300 ease-in-out"
            >
              <div className="absolute right-0 bottom-0">
                <img
                  src={HomeModulesImage}
                  alt="Module decoration"
                  className="opacity-30"
                />
              </div>
              <div className="p-8 flex flex-col justify-center h-full relative z-10">
                <div className="flex flex-col items-start">
                  <RiVideoLine className="text-white text-3xl mb-2" />
                  <h3 className="font-bold text-white text-2xl mb-4">
                    Modul Pembelajaran
                  </h3>
                </div>
                <p className="text-white text-lg">Selengkapnya ➔</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
