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

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const cardClasses = {
    wrapper: "w-1/4",
    card: "bg-white shadow-lg rounded-lg overflow-hidden h-[280px] flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl",
    imageContainer: "relative h-48 overflow-hidden",
    image: "w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out",
    watermarkContainer: "absolute bottom-0 left-0 w-full",
    watermark: "w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-300",
    titleContainer: "bg-[#114232] text-white p-3 flex-grow flex items-center hover:bg-[#326B59] transition-colors duration-300 ease-in-out",
    title: "text-lg font-medium line-clamp-2",
    button:
      "border border-[#114232] text-[#114232] flex items-center px-6 py-3 rounded hover:bg-[#114232] hover:text-white transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-1",
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={HomeImage}
          alt="Hands holding a small plant"
          className="w-full h-full object-cover animate-kenburns"
        />
        <div className="absolute top-1/3 right-32 bg-[#1E1E1E] bg-opacity-50 p-8 rounded-lg backdrop-blur-sm transform transition-all duration-700 hover:scale-105">
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
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            <img
              src={UsImage}
              alt="Farmer in a field"
              className="rounded-full w-3/4 max-w-[350px] min-w-[200px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 pt-4">Tentang Kami</h2>
            <p className="text-lg leading-relaxed mb-6">
              Petani GO adalah platform yang menyediakan informasi dan solusi
              untuk para petani. Kami berkomitmen untuk membantu petani
              meningkatkan hasil panen dan kesejahteraan mereka.
            </p>
            <h2 className="text-3xl font-bold mb-4 pt-4">Fokus Kami</h2>
            <p className="text-lg leading-relaxed">
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
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Button Artikel Selengkapnya */}
            <div className="w-full md:w-1/4">
              <div className="h-[280px] flex items-end pb-8">
                <Link
                  to="/articles/knowledge"
                  onClick={scrollToTop}
                  className={`${cardClasses.button} w-full`}
                >
                  Artikel Selengkapnya →
                </Link>
              </div>
            </div>

            <div className={`${cardClasses.wrapper} w-full md:w-1/4`}>
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
            <div className={`${cardClasses.wrapper} w-full md:w-1/4`}>
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
            <div className={`${cardClasses.wrapper} w-full md:w-1/4`}>
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
          <div className="flex flex-col md:flex-row gap-8">
            {/* Button Berita Selengkapnya */}
            <div className="w-full md:w-1/4">
              <div className="h-[280px] flex items-end pb-8">
                <Link
                  to="/news"
                  onClick={scrollToTop}
                  className={`${cardClasses.button} w-full`}
                >
                  Berita Selengkapnya →
                </Link>
              </div>
            </div>
            <div className={`${cardClasses.wrapper} w-full md:w-1/4`}>
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
            <div className={`${cardClasses.wrapper} w-full md:w-1/4`}>
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
            <div className={`${cardClasses.wrapper} w-full md:w-1/4`}>
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
          <div className="grid grid-cols-1 md:grid-cols-12 mb-8">
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-2xl font-bold mb-4 text-[#114232]">Modul</h2>
              <p className="text-lg leading-relaxed text-[#114232]">
                Bagaimana kita belajar untuk budidaya pertanian?
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-6 md:ml-28">
              <p className="text-lg leading-relaxed text-[#114232]">
                Berfokus pada keberlanjutan, kami memiliki tiga fokus utama
                untuk meningkatkan produktivitas petani kecil: pembangunan
                ekonomi, pertanian regeneratif, dan ketahanan iklim.
              </p>
            </div>
          </div>

          {/* Card Modul */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/modules/edukasi-buku"
              onClick={scrollToTop}
              className="bg-[#114232] h-80 rounded-lg relative overflow-hidden transform transition-transform hover:scale-105 hover:bg-opacity-80 duration-300 ease-in-out"
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
              className="bg-[#114232] h-80 rounded-lg relative overflow-hidden transform transition-transform hover:scale-105 hover:bg-opacity-80 duration-300 ease-in-out"
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
