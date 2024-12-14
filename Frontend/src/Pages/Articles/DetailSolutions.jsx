import { useParams, Link } from "react-router-dom";
import {
  RiDownloadLine,
  RiWhatsappLine,
  RiFacebookBoxLine,
  RiTwitterXLine,
  RiSearchLine,
} from "react-icons/ri";
import {
  PengendalianHamaPenyakitPadiSawah,
  TeknologiPertanianUntukMeningkatkanHasilPanen,
  PertanianOrganikDalamMeningkatkanKualitasTanah,
  TeknologiBlockchainUntukTransparansiRantaiPasokan,
  PenerapanInternetOfThingsIotDalamPertanian,
  PenggunaanMesinUntukMenyederhanakanProsesProduksi,
  MenggunakanDataUntukMeningkatkanHasilTanaman,
  PraktikUntukMenjagaKelestarianAlam,
  MengatasiKrisisRegenerasiDiSektorPertanianIndonesia,
  AntisipasiGagalPanenDanSolusiPenanganannya,
  WatermarkLong,
} from "../../assets/image";

// halaman ini bersifat sementara
const DetailSolutions = () => {
  const { id } = useParams();

  const articleData = [
    {
      id: 1,
      category: "ARTIKEL SOLUSI MASALAH",
      title: "Pengendalian Hama Penyakit Padi Sawah",
      author: "Dinpertan Pangan",
      date: "September 06,2021",
      image: PengendalianHamaPenyakitPadiSawah,
      content: [
        {
          type: "paragraph",
          text: "Dikutip dari situs Kementrian Pertanian,",
        },
        {
          type: "section",
          title: "Tantangan dalam Pertanian Padi Berkelanjutan",
          content:
            "Produktivitas lahan pertanian cenderung menurun sementara sumber daya alam makin terbatas. Teknologi pertanian harus memperhatikan lingkungan fisik dan sosial agar agribisnis padi dapat terus berkelanjutan. Saat ini, produksi padi nasional bergantung pada sawah irigasi. Namun, bila hanya mengandalkan sawah irigasi, ada kendala seperti konversi lahan subur untuk keperluan non-pertanian, tingginya biaya pencetakan sawah baru, dan berkurangnya debit air. Sebaliknya, lahan kering yang luas bisa dimanfaatkan untuk budidaya padi gogo agar produksi padi lebih stabil.",
        },
        {
          type: "section",
          title: "Pengendalian Gulma Secara Terpadu",
          content:
            "Gulma dikendalikan melalui pengolahan tanah yang baik, pengaturan air, penggunaan benih bersertifikat, dan aplikasi kompos. Penggunaan herbisida dilakukan hanya bila infestasi tinggi. Metode manual menggunakan kosrok (alat tradisional) juga sangat dianjurkan saat kondisi tanah cukup basah.",
        },
        {
          type: "section",
          title: "Pengendalian Hama dan Penyakit Terpadu (PHT)",
          content:
            "PHT menggabungkan metode pemantauan dan pengendalian hama dengan pendekatan ekologi untuk menjaga keseimbangan alami.",
        },
        {
          type: "section",
          title: "Keong Mas",
          content:
            "Ambil dan musnahkan secara manual, pasang saringan air, umpan dengan daun, dan gunakan pestisida nabati.",
        },
        {
          type: "section",
          title: "Wereng Coklat",
          content:
            "Gunakan varietas tahan wereng, beri pupuk K, pantau pertumbuhan tanaman, dan gunakan insektisida sesuai kebutuhan.",
        },
        {
          type: "section",
          title: "Penggerek Batang",
          content:
            "Aplikasikan insektisida sesuai tinggi genangan air.",
        },
        {
          type: "section",
          title: "Tikus",
          content:
            "Lakukan gropyok masal, pemasangan TBS (Trap Barrier System), dan LTBS (Linier Trap Barrier System).",
        },
        {
          type: "section",
          title: "Walang Sangit",
          content:
            "Kendalikan gulma, beri umpan, dan semprot insektisida jika mencapai ambang ekonomi.",
        },
        {
          type: "section",
          title: "Pengendalian Penyakit :",
          content:
            "",
        },
        {
          type: "section",
          title: "Hawar Daun Bakteri (HDB)",
          content:
            "Gunakan varietas tahan, sesuaikan pupuk nitrogen, dan bersihkan area tanam dari jerami terinfeksi.",
        },
        {
          type: "section",
          title: "Blast",
          content:
            "Gunakan varietas tahan, sesuaikan pupuk nitrogen, pilih waktu tanam yang tepat, dan gunakan fungisida dengan bahan aktif tertentu jika diperlukan.",
        },
      ],
    },
    {
      id: 2,
      category: "ARTIKEL SOLUSI MASALAH",
      title: "Teknologi Pertanian untuk Meningkatkan Hasil Panen",
      author: "Undefined",
      date: "Undefined",
      image: TeknologiPertanianUntukMeningkatkanHasilPanen,
      content: [
        {
          type: "paragraph",
          text: "Teknologi pertanian cerdas (smart farming) menawarkan solusi inovatif untuk meningkatkan efisiensi, produktivitas, dan keberlanjutan pertanian. Beberapa teknologi utama meliputi:",
        },
        {
          type: "section",
          title: "Sistem Irigasi Cerdas",
          content:
            "Sensor otomatis memastikan pasokan air sesuai kebutuhan tanaman, menghemat air dan meningkatkan efisiensi.",
        },
        {
          type: "section",
          title: "Sensor Tanah dan Nutrisi",
          content:
            "Memberikan data real-time tentang kondisi tanah untuk optimasi pupuk dan pengelolaan lahan.",
        },
        {
          type: "section",
          title: "Drone dan AI",
          content:
            "Memantau kesehatan tanaman dan mendeteksi hama dengan cepat dan akurat.",
        },
        {
          type: "section",
          title: "Analitik Big Data",
          content:
            "Membantu perencanaan tanam berdasarkan data cuaca dan tren historis untuk mengurangi risiko gagal panen.",
        },
        {
          type: "section",
          title: "Robotika Pertanian",
          content:
            "Mengotomasi proses pertanian seperti pemanenan untuk mengurangi ketergantungan tenaga kerja.",
        },
        {
          type: "section",
          title: "Keunggulan Teknologi Pertanian Cerdas :",
        },
        {
          type: "section",
          title: "1. Efisiensi Penggunaan Sumber Daya",
          content:
            "Teknologi membantu petani menggunakan sumber daya seperti air, pupuk, dan energi secara lebih efisien, mengurangi pemborosan dan biaya operasional.",
        },
        {
          type: "section",
          title: "2. Meningkatkan Produktivitas dan Kualitas",
          content:
            "Dengan teknologi cerdas, petani dapat menghasilkan lebih banyak dengan kualitas yang lebih baik.",
        },
        {
          type: "section",
          title: "3. Mengurangi Dampak Lingkungan",
          content:
            " Praktik pertanian yang cerdas mengurangi penggunaan pestisida kimia dan pupuk berlebihan, yang berdampak pada keberlanjutan lingkungan.",
        },
        {
          type: "section",
          title: "4. Mempercepat Pengambilan Keputusan",
          content:
            " Data yang dikumpulkan dan dianalisis secara real-time memungkinkan petani untuk membuat keputusan yang lebih cepat dan akurat.",
        },
      ],
    },
    {
      id: 3,
      category: "ARTIKEL SOLUSI MASALAH",
      title: "Pertanian Organik dalam Meningkatkan Kualitas Tanah",
      author: "Undefined",
      date: "Undefined",
      image: PertanianOrganikDalamMeningkatkanKualitasTanah,
      content: [
        {
          type: "paragraph",
          text: "Pertanian organik menjadi salah satu solusi dalam menghadapi tantangan keberlanjutan pertanian. Tanpa menggunakan bahan kimia sintetis, pertanian organik berfokus pada penggunaan bahan alami dan teknik yang ramah lingkungan untuk meningkatkan kesuburan tanah, kualitas tanaman, dan hasil pertanian. Artikel ini membahas penerapan pertanian organik, manfaatnya bagi kualitas tanah, serta dampaknya terhadap hasil pertanian.",
        },
        {
          type: "Subtitle",
          title: "Penerapan Utama :",
        },
        {
          type: "section",
          title: "Pupuk Organik :",
          content:
            "Memperbaiki struktur tanah dan meningkatkan kandungan bahan organik.",
        },
        {
          type: "section",
          title: "Rotasi Tanaman :",
          content:
            "Mencegah degradasi tanah dan mengurangi risiko hama serta penyakit.",
        },
        {
          type: "section",
          title: "Pengendalian Hama Alami :",
          content:
            "Menggunakan predator alami dan pestisida organik untuk mengendalikan hama alami tanaman.",
        },
        {
          type: "section",
          title: "Mulsa Organik :",
          content:
            "Menjaga kelembapan tanah dan menekan gulma.",
        },
        {
          type: "section",
          title: "Sistem Pertanian Terpadu :",
          content:
            "Mengintegrasikan tanaman, ternak, dan ikan untuk efisiensi sumber daya.",
        },
        {
          type: "section",
          title: "Manfaat:",
          content: "Memperbaiki kualitas tanah dan meningkatkan unsur hara.",
        },
        {
          type: "section",
          content: "Mengurangi polusi dari bahan kimia sintetis.",
        },
        {
          type: "section",
          content: "Menghasilkan produk yang lebih sehat dan aman.",
        },
        {
          type: "section",
          content: "Mendorong keberagaman hayati serta keberlanjutan ekosistem.",
        },
        {
          type: "section",
          title: "Tantangan:",
          content: "Biaya produksi lebih tinggi dan hasil kurang stabil.",
        },
        {
          type: "section",
          content: "Keterbatasan edukasi dan pelatihan untuk petani.",
        },
        {
          type: "section",
          content: "Akses pasar produk organik yang masih terbatas.",
        },
      ],
    },
    {
      id: 4,
      category: "ARTIKEL SOLUSI MASALAH",
      title: "Teknologi Blockchain untuk Transparansi Rantai Pasokan",
      author: "Undefined",
      date: "Undefined",
      image: TeknologiBlockchainUntukTransparansiRantaiPasokan,
      content: [
        {
          type: "paragraph",
          text: "Rantai pasokan pertanian sering kali dihadapkan pada masalah ketidakjelasan dan ketidakterbukaan dalam proses distribusi produk. Teknologi blockchain dapat menjadi solusi untuk meningkatkan transparansi dan keandalan dalam rantai pasokan pertanian. Dengan menggunakan teknologi ini, setiap transaksi dan proses dapat tercatat secara permanen dan aman, memberikan kejelasan dari hulu hingga hilir. Artikel ini akan membahas bagaimana teknologi blockchain dapat diterapkan dalam rantai pasokan pertanian dan manfaat yang diperoleh.",
        },
        {
          type: "section",
          title: "Penerapan Blockchain:",
        },
        {
          type: "section",
          title: "Pencatatan Transaksi",
          content:
            "Mencatat setiap transaksi secara aman dan transparan, menjamin asal-usul produk (traceability) dan mengurangi potensi kecurangan.",
        },
        {
          type: "section",
          title: "Kepercayaan Konsumen",
          content:
            "Memungkinkan konsumen melacak asal produk, meningkatkan kepercayaan, dan mendukung petani organik.",
        },
        {
          type: "section",
          title: "Pengamanan Pembayaran",
          content:
            "Mengurangi risiko penipuan dengan kontrak pintar (smart contracts).",
        },
        {
          type: "section",
          title: "Efisiensi Pengiriman",
          content:
            "Mempercepat proses pengiriman dan pembayaran dengan verifikasi yang lebih cepat.",
        },
        {
          type: "section",
          title: "Pengelolaan Sertifikasi",
          content:
            "Mengelola sertifikasi produk, mencegah pemalsuan, dan memastikan standar kualitas terpenuhi.",
        },
        {
          type: "section",
          title: "Manfaat Blockchain:",
        },
        {
          type: "section",
          title: "Transparansi:",
          content:
            "Memberikan kejelasan proses dari produksi hingga distribusi.",
        },
        {
          type: "section",
          title: "Keamanan Data:",
          content:
            "Data tidak dapat diubah atau dimanipulasi.",
        },
        {
          type: "section",
          title: "Efisiensi dan Pengurangan Biaya:",
          content:
            "Mengurangi perantara dan mempercepat transaksi.",
        },
        {
          type: "section",
          title: "Dukungan Berkelanjutan:",
          content:
            "Verifikasi praktik pertanian ramah lingkungan dan berkelanjutan.",
        },
        {
          type: "section",
          title: "Tantangan Implementasi:",
        },
        {
          type: "section",
          content:
            "Keterbatasan infrastruktur di daerah pedesaan.",
        },
        {
          type: "section",
          content:
            "Kurangnya edukasi petani mengenai teknologi blockchain.",
        },
        {
          type: "section",
          content:
            "Biaya awal implementasi yang tinggi.",
        },
        {
          type: "section",
          content:
            "Regulasi blockchain di sektor pertanian yang belum jelas.",
        },
      ],
    },
    {
      id: 5,
      category: "ARTIKEL SOLUSI MASALAH",
      title: "Penerapan Internet of Things (IoT) dalam Pertanian ",
      author: "Undefined",
      date: "Undefined",
      image: PenerapanInternetOfThingsIotDalamPertanian,
      content: [
        {
          type: "paragraph",
          text: "Internet of Things (IoT) atau Internet untuk Segala Sesuatu adalah teknologi yang memungkinkan perangkat untuk saling terhubung dan berkomunikasi melalui jaringan internet. Dalam dunia pertanian, penerapan IoT menawarkan berbagai solusi inovatif yang dapat meningkatkan efisiensi operasional dan hasil pertanian. Artikel ini akan membahas bagaimana IoT diterapkan dalam pertanian cerdas dan bagaimana teknologi ini dapat memberikan solusi untuk tantangan yang dihadapi oleh petani.",
        },
        {
          type: "section",
          title: "Penerapan IoT dalam Pertanian:",
        },
        {
          type: "section",
          title: "1. Sistem Irigasi Cerdas:",
          content:
            "Menggunakan sensor kelembaban tanah untuk otomatisasi irigasi, menghemat air, dan meningkatkan keberlanjutan..",
        },
        {
          type: "section",
          title: "2. Pemantauan Tanaman:",
          content:
            "Sensor IoT memantau suhu, pH tanah, dan kadar nutrisi, memungkinkan keputusan yang lebih tepat dalam perawatan tanaman.",
        },
        {
          type: "section",
          title: "3. Pengawasan Kesehatan Tanaman:",
          content:
            "Drone dan kamera mendeteksi hama, penyakit, atau kekurangan nutrisi secara dini, mempercepat tindakan perbaikan.",
        },
        {
          type: "section",
          title: "4. Pemantauan Cuaca Real-Time:",
          content:
            "Sensor cuaca membantu menentukan waktu tanam optimal dan mengurangi risiko kerugian akibat cuaca ekstrem.",
        },
        {
          type: "section",
          title: "5. Sistem Penyimpanan dan Pengangkutan:",
          content:
            "Memantau suhu dan kelembapan produk pertanian, mengurangi kerusakan selama distribusi.",
        },
        {
          type: "section",
          content:
            "Meningkatkan efisiensi dan produktivitas melalui data real-time.",
        },
        {
          type: "section",
          content:
            "Mengurangi pemborosan sumber daya seperti air dan pupuk.",
        },
        {
          type: "section",
          content:
            "Deteksi dini masalah pada tanaman, meminimalkan kerugian.",
        },
        {
          type: "section",
          content:
            "Mendukung keberlanjutan dengan pengelolaan sumber daya yang lebih bijak.",
        },
        {
          type: "section",
          title: "Tantangan Implementasi:",
          content:
            "Keterbatasan infrastruktur di daerah terpencil.",
        },
        {
          type: "section",
          content:
            "Biaya awal instalasi IoT yang tinggi.",
        },
        {
          type: "section",
          content:
            "Kurangnya pengetahuan petani tentang teknologi IoT.",
        },
        {
          type: "section",
          content:
            "Ketergantungan pada perangkat teknologi yang memerlukan keahlian tertentu.",
        },
      ],
    },
    {
      id: 6,
      category: "ARTIKEL SOLUSI MASALAH",
      title: "Penggunaan Mesin untuk Menyederhanakan Proses Produksi",
      author: "Undefined",
      date: "Undefined",
      image: PenggunaanMesinUntukMenyederhanakanProsesProduksi,
      content: [
        {
          type: "paragraph",
          text: "Pertanian merupakan salah satu sektor yang sangat bergantung pada tenaga kerja, tetapi dengan berkembangnya teknologi, automatisasi mulai memainkan peran penting dalam mengubah cara kerja di bidang pertanian. Automatisasi pertanian menggunakan mesin dan perangkat otomatis untuk menyederhanakan berbagai proses produksi, seperti penanaman, pemupukan, dan panen. Artikel ini akan membahas berbagai aplikasi automatisasi dalam pertanian dan bagaimana teknologi ini dapat membantu petani meningkatkan efisiensi, mengurangi biaya, dan memaksimalkan hasil pertanian.",
        },
        {
          type: "section",
          title: "Penerapan Automatisasi dalam Pertanian:",
        },
        {
          type: "section",
          title: "1. Mesin Tanam Otomatis:",
          content:
            "Menanam benih secara cepat dan efisien, mengurangi tenaga kerja, dan meningkatkan ketepatan jarak tanam.",
        },
        {
          type: "section",
          title: "2. Traktor Otomatis",
          content:
            "Mengolah tanah dengan presisi menggunakan GPS dan sensor, mempercepat proses pengolahan lahan.",
        },
        {
          type: "section",
          title: "3. Sistem Pemupukan Otomatis",
          content:
            "Memberikan pupuk sesuai kebutuhan tanaman menggunakan sensor, mengurangi pemborosan dan meningkatkan efisiensi.",
        },
        {
          type: "section",
          title: "4. Mesin Pemanen Otomatis",
          content:
            "Memanen hasil pertanian secara cepat, mengurangi tenaga kerja manual, dan biaya panen.",
        },
        {
          type: "section",
          title: "5. Drone untuk Pemantauan dan Penyemprotan",
          content:
            "Memantau kondisi tanaman dan menyemprotkan pestisida atau pupuk dengan cepat dan tepat.",
        },
        {
          type: "section",
          title: "Manfaat Automatisasi dalam Pertanian:",
          content:
            "Meningkatkan Efisiensi dan Produktivitas: Proses produksi lebih cepat dan akurat.",
        },
        {
          type: "section",
          content:
            "Mengurangi Biaya Operasional: Mengurangi kebutuhan tenaga kerja manual.",
        },
        {
          type: "section",
          content:
            "Mengurangi Ketergantungan pada Cuaca dan Musim: Mesin otomatis memungkinkan pekerjaan tetap berjalan meski cuaca tidak mendukung.",
        },
        {
          type: "section",
          content:
            "Meningkatkan Kualitas Hasil Pertanian: Ketepatan kerja mesin menghasilkan produk yang lebih konsisten.",
        },
        {
          type: "section",
          title: "Tantangan Implementasi Automatisasi:",
          content:
            "1. Biaya Awal yang Tinggi: Harga mesin otomatis menjadi hambatan bagi petani kecil dan menengah.",
        },
        {
          type: "section",
          content:
            "2. Keterbatasan Pengetahuan Teknologi: Tidak semua petani memahami cara kerja teknologi otomatis.",
        },
        {
          type: "section",
          content:
            "3. Keterbatasan Infrastruktur: Infrastruktur pendukung seperti internet dan listrik belum merata.",
        },
        {
          type: "section",
          content:
            "4. Pemeliharaan dan Perbaikan: Mesin membutuhkan perawatan rutin yang sulit diakses di wilayah terpencil.",
        },
      ],
    },
    {
      id: 7,
      category: "ARTIKEL SOLUSI MASALAH",
      title: "Menggunakan Data untuk Meningkatkan Hasil Tanaman",
      author: "Undefined",
      date: "Undefined",
      image: MenggunakanDataUntukMeningkatkanHasilTanaman,
      content: [
        {
          type: "paragraph",
          text: "Sistem pertanian presisi adalah pendekatan modern dalam dunia pertanian yang memanfaatkan data untuk mengoptimalkan hasil tanaman dengan meminimalkan pemborosan sumber daya. Sistem ini mengintegrasikan teknologi informasi, sensor, dan perangkat lunak untuk memantau, menganalisis, dan mengelola faktor-faktor yang mempengaruhi produksi pertanian, seperti kelembaban tanah, nutrisi tanaman, dan kondisi cuaca. Dengan menggunakan sistem pertanian presisi, petani dapat meningkatkan hasil pertanian secara signifikan, mengurangi dampak lingkungan, dan meningkatkan keberlanjutan pertanian.",
        },
        {
          type: "section",
          title: "Penerapan Sistem Pertanian Presisi:",
          content:
            "1. Sensor Tanaman: Mengukur kelembaban, suhu, dan nutrisi tanah untuk memberikan rekomendasi real-time.",
        },
        {
          type: "section",
          content:
            "2. Drone Pemantauan: Memantau lahan dari udara untuk mendeteksi masalah seperti hama atau penyakit..",
        },
        {
          type: "section",
          content:
            "3. Irigasi Presisi: Memberikan air sesuai kebutuhan tanaman untuk mengurangi pemborosan.",
        },
        {
          type: "section",
          content:
            "4. Pemupukan Presisi: Menyediakan pupuk sesuai kebutuhan tanaman untuk efisiensi dan keberlanjutan.",
        },
        {
          type: "section",
          content:
            "5. Pemantauan Cuaca Real-Time: Memberikan data cuaca terkini untuk mendukung perencanaan kegiatan pertanian.",
        },
        {
          type: "section",
          title: "Manfaat Sistem Pertanian Presisi:",
          content:
            "Meningkatkan Hasil Pertanian: Pengelolaan sumber daya lebih efisien meningkatkan produktivitas.",
        },
        {
          type: "section",
          content:
            "Mengurangi Dampak Lingkungan: Menghemat air, pupuk, dan pestisida untuk mendukung keberlanjutan.",
        },
        {
          type: "section",
          content:
            "Efisiensi Sumber Daya: Memaksimalkan penggunaan air, pupuk, dan tenaga kerja..",
        },
        {
          type: "section",
          content:
            "Penggunaan Lahan yang Optimal: Mengelola lahan secara lebih tepat dan efisien.",
        },
        {
          type: "section",
          content:
            "Keputusan Berbasis Data: Membantu petani membuat keputusan yang lebih akurat dan terencana.",
        },
        {
          type: "section",
          title: "Tantangan Implementasi:",
          content:
            "1. Biaya Awal Tinggi: Harga teknologi menjadi hambatan bagi petani kecil.",
        },
        {
          type: "section",
          content:
            "2. Keterbatasan Pengetahuan: Petani memerlukan pelatihan untuk memahami teknologi.",
        },
        {
          type: "section",
          content:
            "3. Keterbatasan Infrastruktur: Akses internet dan jaringan teknologi sering tidak memadai.",
        },
        {
          type: "section",
          content:
            "4. Ketergantungan pada Teknologi: Risiko terganggu oleh masalah teknis memerlukan pemeliharaan rutin.",
        },
      ],
    },
    {
      id: 8,
      category: "ARTIKEL SOLUSI MASALAH",
      title: "Praktik untuk Menjaga Kelestarian Alam",
      author: "Undefined",
      date: "Undefined",
      image: PraktikUntukMenjagaKelestarianAlam,
      content: [
        {
          type: "paragraph",
          text: "Pertanian berkelanjutan adalah konsep yang mengutamakan cara-cara bertani yang tidak hanya fokus pada keuntungan ekonomi, tetapi juga memperhatikan dampak sosial dan lingkungan. Praktik ini bertujuan untuk meningkatkan produktivitas pertanian tanpa merusak lingkungan atau mengurangi sumber daya alam yang dapat digunakan oleh generasi mendatang. Dengan mengadopsi pertanian berkelanjutan, petani dapat mempertahankan kelangsungan produksi pertanian dalam jangka panjang sekaligus melestarikan keseimbangan ekosistem. Artikel ini akan membahas beberapa praktik pertanian berkelanjutan yang dapat diterapkan oleh petani di Indonesia.",
        },
        {
          type: "section",
          title: "Praktik-praktik Pertanian Berkelanjutan:",
          content:
            "1. Pertanian Organik: Menggunakan bahan alami seperti kompos dan pestisida organik untuk mengurangi dampak lingkungan dan meningkatkan kesuburan tanah.",
        },
        {
          type: "section",
          content:
            "2. Rotasi Tanaman & Polikultur: Meningkatkan kesehatan tanah dan mengurangi risiko hama serta penyakit melalui pergiliran dan penanaman beragam tanaman.",
        },
        {
          type: "section",
          content:
            "3. Agroforestry: Mengintegrasikan pohon dalam lahan pertanian untuk mendukung keberagaman hayati, mengurangi erosi, dan meningkatkan hasil.",
        },
        {
          type: "section",
          content:
            "4. Pengelolaan Air Efisien: Sistem irigasi tetes untuk meminimalkan pemborosan air dan meningkatkan efisiensi penggunaan air.",
        },
        {
          type: "section",
          content:
            "5. Pengelolaan Limbah Pertanian: Mengolah limbah menjadi kompos atau biogas untuk mengurangi pencemaran dan menyediakan sumber energi alternatif.",
        },
        {
          type: "section",
          title: "Manfaat Pertanian Berkelanjutan:",
          content:
            "Melindungi keanekaragaman hayati dengan mengurangi bahan kimia berbahaya.",
        },
        {
          type: "section",
          content:
            "Mengurangi dampak lingkungan melalui praktik yang ramah lingkungan.",
        },
        {
          type: "section",
          content:
            "Meningkatkan ketahanan pangan dan kemampuan menghadapi tantangan seperti perubahan iklim.",
        },
        {
          type: "section",
          content:
            "Menjaga kesehatan tanah dengan praktik organik dan rotasi tanaman.",
        },
        {
          type: "section",
          content:
            "Meningkatkan kesejahteraan petani melalui pengurangan biaya input dan hasil yang lebih stabil.",
        },
        {
          type: "section",
          title: "Tantangan Adopsi:",
          content:
            "1. Biaya Awal Tinggi: Investasi pada teknologi berkelanjutan sering kali menjadi kendala bagi petani kecil.",
        },
        {
          type: "section",
          content:
            "2. Pengetahuan dan Keterampilan: Dibutuhkan pelatihan untuk memahami dan menerapkan praktik ini.",
        },
        {
          type: "section",
          content:
            "3. Akses Sumber Daya Terbatas: Infrastruktur dan dukungan pasar sering kali tidak merata.",
        },
        {
          type: "section",
          content:
            "4. Kebijakan Pemerintah: Kurangnya insentif dan kebijakan yang mendukung pertanian berkelanjutan.",
        },
      ],
    },
    {
      id: 9,
      category: "ARTIKEL SOLUSI MASALAH",
      title: "Mengatasi Krisis Regenerasi di Sektor Pertanian Indonesia",
      author: "Undefined",
      date: "Undefined",
      image: MengatasiKrisisRegenerasiDiSektorPertanianIndonesia,
      content: [
        {
          type: "paragraph",
          text: "Permintaan yang tidak pernah berhenti akan nutrisi yang perlu kita konsumsi telah menjadikan pertanian dan sektor pangan sebagai salah satu industri yang paling penting di dunia. Seiring dengan terus bertambahnya populasi, dengan prediksi mencapai puncaknya pada 9,7 miliar jiwa di tahun 2050, semakin banyak orang yang harus diberi makan. Oleh karena itu, segala bentuk gangguan pada rantai pasokan makanan akan berisiko terhadap ketersediaannya di masa depan.",
        },
        {
          type: "section",
          title: "Prospek Petani Indonesia yang Tidak Menarik",
          content:
            "Ada beberapa alasan yang menyebabkan generasi muda saat ini kehilangan minat di bidang pertanian, Di antara semuanya, ada tiga stigma yang tumpang tindih di sektor ini yang perlu diperhatikan: rendahnya keterampilan dan padat karya, kurang berkembang, dan tidak stabil.",
        },
        {
          type: "section",
          title: "Menciptakan Ekosistem yang Mengayomi Petani Muda Masa Depan",
          content:
            "Kondisi-kondisi di atas membuat pertanian dan perkebunan menjadi tidak menarik bagi generasi muda. Ironi ini semakin menjadi ketika para lulusan sarjana pertanian sering kali beralih ke karier lain, seperti akuntansi dan perbankan, yang dianggap lebih menguntungkan.",
        },
        {
          type: "section",
          title: "Aksi Kolaboratif untuk Mencapai Regenerasi yang Berkelanjutan",
          content:
            "Mewujudkan ekosistem yang ideal tentu saja bukan hal yang mudah. Untungnya, beberapa langkah telah diambil untuk menuju ke arah tersebut.",
        },
        {
          type: "paragraph",
          content:
            "Dengan demikian, adanya kebijakan dan ruang yang dapat memungkinkan penciptaan sinergi dan komunikasi lintas-aktor menjadi langkah awal dalam pewujudan pertanian berkelanjutan. Sebagai contoh, terlepas dari peluang dan modalitas yang telah berkembang secara signifikan dalam beberapa tahun terakhir dengan munculnya perusahaan startup pertanian, jalan menuju pertanian yang intensif teknologi dan digital yang sangat dibutuhkan untuk partisipasi kaum muda tidak dapat dicapai tanpa kerangka kerja regulasi yang komprehensif.",
        },
      ],
    },
    {
      id: 10,
      category: "ARTIKEL SOLUSI MASALAH",
      title: "Antisipasi Gagal Panen dan Solusi Penanganannya",
      author: "Undefined",
      date: "Undefined",
      image: AntisipasiGagalPanenDanSolusiPenanganannya,
      content: [
        {
          type: "paragraph",
          text: "Sektor pertanian mempunyai peran penting dalam memenuhi kebutuhaan pangan nasional, namun selama ini Indonesia masih mengimpor beras dari negara lain guna untuk mencukupi kebutuhan pangan masyarakatnya. Sektor pertanian sangat rentan terhadap perubahan iklim karena berpengaruh terhadap pola tanam, waktu tanam, kualitas hasil dan menurunkan produktivitas. Gagal Panen adalah kondisi dimana kita petani tidak mendapatkan hasil yang mereka panen, hal tersebut sangat tidak di inginkan oleh para petani.",
        },
        {
          type: "section",
          title: "Faktor penyebab terjadinya gagal panen yaitu;",
          content:
            "1. Serangan Hama : di beberapa daerah penyebaran hama dan penyakit terjadi hingga puluhan atau bahkan ratusan hektar lahan pertanian.",
        },
        {
          type: "section",
          content:
            "2. Kekeringan. : Syarat utama tanaman untuk berfotosintesis adalah air, sehingga apabila air tidak tersedia maka proses fotosintesis tidak bisa berlangsung dengan baik.",
        },
        {
          type: "section",
          content:
            "3. Bencana alam : Terjadinya bencana alam bisa merusak tanaman, sehingga menyebabkan kegagalan panen.",
        },
        {
          type: "section",
          content:
            "4. Cuaca ekstrim : Hujan yang lebat akan menyebabkan daerah atau wilayah penanaman terserang banjir, sebaliknya jika terjadi cuaca yang sangat panas maka akan menyebabkan kekeringan.",
        },
        {
          type: "section",
          content:
            "5. Salah memilih varietas benih : Pemilihan varietas benih disesuaikan dengan kondisi lingkungan sekitar agar mudah beradaptasi dan tidak mudah terserang hama dan penyakit..",
        },
        {
          type: "section",
          content:
            "6. Kurangnya perawatan :  Pemberian pupuk, obat tanaman, dan penyiraman sangat penting agar tetap sehat.",
        },
        {
          type: "section",
          title: "Perlu adanya langkah-langkah untuk mengantisipasi gagal panen tersebut dalam mengantisipasi gagal panen yaitu;",
          content:
            "1. Memanfaatkan Sumber Air",
        },
        {
          type: "section",
          content:
            "2. Mitigasi Kekeringan Menggunakan Alsita",
        },
        {
          type: "section",
          content:
            "3. Koordinasi serta Pengawalan Air. ",
        },
      ],
    },
  ];

  const solutionData = articleData.find((item) => item.id === parseInt(id));

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Baca artikel: ${solutionData.title}`;

    switch (platform) {
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`
        );
        break;
      default:
        break;
    }
  };

  const handleDownload = () => {
    console.log("Download article");
  };

  return (
    <div className="bg-white text-[#114232] font-poppins min-h-screen flex flex-col justify-between">
      <div className="bg-[#114232] text-white text-center py-4">
        <h1 className="text-3xl font-bold">{solutionData.category}</h1>
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
            <h1 className="text-3xl font-bold mb-4">{solutionData.title}</h1>
            <div className="text-gray-600 mb-6">
              <p>
                {solutionData.author} / {solutionData.date}
              </p>
            </div>

            <div className="relative mb-8">
              <img
                src={solutionData.image}
                alt={solutionData.title}
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
                onClick={() => handleShare("whatsapp")}
                className="p-2 bg-[#114232] text-white rounded-full hover:bg-[#326B59] transition"
              >
                <RiWhatsappLine />
              </button>
              <button
                onClick={() => handleShare("facebook")}
                className="p-2 bg-[#114232] text-white rounded-full hover:bg-[#326B59] transition"
              >
                <RiFacebookBoxLine />
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="p-2 bg-[#114232] text-white rounded-full hover:bg-[#326B59] transition"
              >
                <RiTwitterXLine />
              </button>
            </div>

            <div className="prose max-w-none mb-8">
            {solutionData.content.map((section, index) => (
              <div key={index} className="mb-6">
                {section.type === "paragraph" ? (
                  <p className="mb-4">{section.text}</p>
                ) : (
                  <>
                    <h2 className="text-xl font-bold mb-2">
                      {section.title}
                    </h2>
                    {/* Check if section.content is an array or an object */}
                    {Array.isArray(section.content) ? (
                      section.content.map((item, idx) => (
                        <div key={idx}>
                          {/* Render item based on its structure */}
                          {typeof item === 'string' ? (
                            <p>{item}</p>
                          ) : (
                            <>
                              <h3>{item.title}</h3>
                              <p>{item.content}</p>
                            </>
                          )}
                        </div>
                      ))
                    ) : (
                      <p>{section.content}</p> // Handle the case where content is a string
                    )}
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
