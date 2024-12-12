import { useParams, Link } from "react-router-dom";
import {
  RiDownloadLine,
  RiWhatsappLine,
  RiFacebookBoxLine,
  RiTwitterXLine,
  RiSearchLine,
} from "react-icons/ri";
import {
  BudidayaPadiOrganik,
  TeknologiUntukMasaDepanPertanian,
  jenisTanahSuburDanCaraMengenalinya,
  DampakPerubahanIklimProduktivitasPertanian,
  PemanfaatanPupukOrganikVsPupukKimia,
  TeknologiIrigasiModernUntukEfisiensiPenggunaanAir,
  PeranAiDalamPertanianModern,
  KonsepPertanianUntukBerkelanjutanMasaDepan,
  ManfaatTeknologiIotDalamPengelolaanLahanPertanian,
  DampakPerubahanIklimTerhadapProduksiPertanian,
  WatermarkLong,
} from "../../assets/image";

// halaman ini bersifat sementara
const DetailKnowledge = () => {
  const { id } = useParams();

  const articleData = [
    {
      id: 1,
      category: "Pengetahuan",
      title: "Budidaya Padi Organik",
      author: "Dinpertan Pangan",
      date: "September 06,2021",
      image: BudidayaPadiOrganik,
      content: [
        {
          type: "paragraph",
          text: "Dikutip dari situs Dinpertan Pangan, Pemerintah berkomitmen meningkatkan produksi padi guna mencapai kedaulatan pangan melalui intensifikasi dan perluasan lahan tanam. Langkah ini optimis diwujudkan dengan bantuan teknologi dan inovasi dari Balitbangtan, meski belum semua petani memanfaatkannya.",
        },
        {
          type: "section",
          title: "Varietas",
          content:
            "Disarankan varietas unggul dan adaptif, tahan terhadap Organisme Pengganggu Tanaman (OPT), dengan nilai ekonomis tinggi, seperti Sintanur dan Inpari 23. Varietas ini memiliki umur panen sesuai pola tanam dan pasokan air.",
        },
        {
          type: "section",
          title: "Benih",
          content:
            "Gunakan benih bersertifikat yang berkualitas, memiliki daya tumbuh tinggi, dan dormansi sudah terlewati. Benih diolah dengan perendaman dan penggunaan pupuk hayati.",
        },
        {
          type: "section",
          title: "Pesemaian",
          content:
            "Lahan aman dari gangguan binatang, mudah diairi, dan jauh dari lampu agar tidak menarik hama. Media tumbuh berupa campuran tanah, kompos jerami atau pupuk kandang, serta abu (perbandingan 7:2:1). Pesemaian dipantau rutin untuk pengendalian hama.",
        },
        {
          type: "section",
          title: "Penyiapan Lahan",
          content:
            "Lahan dipupuk kompos atau pupuk kandang (5-10 ton/ha) dan diolah minimal agar tanah melumpur, bebas gulma, dan memiliki struktur baik untuk mendukung nutrisi tanaman.",
        },
        {
          type: "section",
          title: "Penyulaman",
          content:
            "Tanaman yang mati segera disulam agar pertumbuhannya seragam, menggunakan bibit dari sisa pesemaian.",
        },
        {
          type: "section",
          title: "Pengairan",
          content:
            "Sistem pengairan intermiten dilakukan pada fase vegetatif, dengan kondisi lahan bergantian antara basah dan kering. Pada fase generatif, lahan digenangi lagi hingga menjelang panen.",
        },
        {
          type: "section",
          title: "Penyiangan",
          content:
            "Penyiangan dilakukan empat kali dengan interval 10 hari dan diikuti penyemprotan Pupuk Organik Cair (POC) atau Mikro Organisme Lokal (MOL).",
        },
        {
          type: "section",
          title: "Pemupukan",
          content:
            "MOL dari bahan alami disemprotkan tiap 10 hari sebagai tambahan nutrisi. Selain itu, bahan organik seperti Azolla dan Sesbania dapat digunakan sebagai sumber nitrogen.",
        },
        {
          type: "section",
          title: "Pengendalian Hama dan Penyakit",
          content:
            "Pengendalian hama dilakukan secara preventif menggunakan pestisida nabati dan hayati serta pemanfaatan musuh alami.",
        },
        {
          type: "section",
          title: "Panen dan Pasca Panen",
          content:
            "Panen dilakukan saat 90-95% bulir gabah menguning dengan kadar air 22-27%, dan segera dirontokkan, dikeringkan hingga kadar air ≤14% sebelum disimpan atau digiling. Peningkatan produksi padi ini mendukung pemenuhan kebutuhan pangan dan kesejahteraan petani dengan cara memanfaatkan teknologi sesuai kondisi agroekosistem yang beragam.",
        },
      ],
    },
    {
      id: 2,
      category: "Pengetahuan",
      title: "Teknologi Untuk Masa Depan Pertanian",
      author: "Undefined",
      date: "Undefined",
      image: TeknologiUntukMasaDepanPertanian,
      content: [
        {
          type: "paragraph",
          text: "Inovasi teknologi menjadi kunci untuk meningkatkan produktivitas pertanian dan menghadapi tantangan perubahan iklim. Pemerintah berkomitmen mendukung petani melalui penerapan teknologi dari Balitbangtan, seperti penggunaan varietas unggul, irigasi cerdas, dan pengelolaan hama terpadu.",
        },
        {
          type: "section",
          title: "Varietas",
          content:
            "Penggunaan varietas padi adaptif seperti Sintanur dan Inpari 23 yang tahan hama dan sesuai pola tanam.",
        },
        {
          type: "section",
          title: "Benih",
          content:
            "Pemakaian benih bersertifikat yang diolah dengan pupuk hayati untuk daya tumbuh optimal.",
        },
        {
          type: "section",
          title: "Pesemaian",
          content:
            "Lahan dipersiapkan dengan pupuk organik dan dijaga agar aman dari gangguan, sementara pesemaian rutin dipantau untuk mencegah hama",
        },
        {
          type: "section",
          title: "Penyiapan Lahan",
          content:
            "Lahan diberi pupuk organik seperti kompos atau pupuk kandang sebanyak 5-10 ton per hektar.",
        },
        {
          type: "section",
          title: "Penyulaman",
          content:
            "Dilakukan secepat mungkin setelah tanam, biasanya dalam 7-10 hari setelah tanam untuk mengurangi perbedaan umur tanaman.",
        },
        {
          type: "section",
          title: "Pengairan",
          content:
            "Air dikeringkan secara bertahap menjelang panen untuk mempermudah proses pemanenan dan meningkatkan kualitas gabah.",
        },
        {
          type: "section",
          title: "Penyiangan",
          content:
            "Sistem pengairan intermiten diterapkan, disertai penyiangan berkala dengan aplikasi pupuk organik cair.",
        },
        {
          type: "section",
          title: "Pemupukan",
          content:
            "Pupuk organik ditaburkan merata ke lahan sebelum proses tanam. POC atau MOL disemprotkan langsung pada tanaman saat masa pertumbuhan untuk menambah nutrisi secara langsung.",
        },
        {
          type: "section",
          title: "Pengendalian Hama dan Penyakit",
          content:
            "Mengutamakan pestisida nabati/hayati dan musuh alami untuk menjaga ekosistem.",
        },
        {
          type: "section",
          title: "Panen dan Pasca Panen",
          content:
            "Panen dilakukan pada kondisi optimal, lalu hasil panen segera dirontokkan dan dikeringkan untuk kualitas terbaik. Teknologi ini mendukung efisiensi, keberlanjutan, dan kesejahteraan petani, dengan pendekatan sesuai kondisi agroekosistem yang beragam.",
        },
      ],
    },
    {
      id: 3,
      category: "Pengetahuan",
      title: "Jenis-Jenis Tanah Subur",
      author: "Undefined",
      date: "Undefined",
      image: jenisTanahSuburDanCaraMengenalinya,
      content: [
        {
          type: "paragraph",
          text: "Kesuburan tanah adalah faktor penting dalam produktivitas pertanian. Pemerintah berkomitmen untuk mendukung petani memanfaatkan jenis tanah secara optimal melalui teknologi dan inovasi dari Balitbangtan. Strategi yang dioptimalkan meliputi intensifikasi, yaitu memaksimalkan potensi tanah subur seperti aluvial, andosol, humus, dan latosol, serta adaptasi terhadap tantangan seperti perubahan pola cuaca dan degradasi tanah akibat perubahan iklim.",
        },
        {
          type: "Subtitle",
          title: "Jenis Jenis Tanah Subur :",
        },
        {
          type: "section",
          title: "Tanah Aluvial",
          content:
            "Penggunaan varietas padi adaptif seperti Sintanur dan Inpari 23 yang tahan hama dan sesuai pola tanam.",
        },
        {
          type: "section",
          title: "Tanah Andosol",
          content:
            "Berasal dari vulkanik, tekstur gembur, cocok untuk kopi dan kentang, tersebar di sekitar gunung berapi seperti Jawa Tengah dan Bali.",
        },
        {
          type: "section",
          title: "Tanah Humus",
          content:
            "Berwarna gelap, kaya bahan organik, ideal untuk sayuran dan buah-buahan, banyak di hutan tropis Kalimantan dan Papua.",
        },
        {
          type: "section",
          title: "Tanah Latosol",
          content:
            "Berwarna merah hingga kuning, cenderung asam, cocok untuk kelapa sawit dan karet, ditemukan di pegunungan Sulawesi dan Sumatera Barat.",
        },
        {
          type: "Subtitle",
          title: "Cara Mengenali Tanah Subur :",
        },
        {
          type: "section",
          title: "Warna",
          content: "Gelap karena kaya bahan organik.",
        },
        {
          type: "section",
          title: "Tekstur",
          content: "Gembur, mendukung aerasi dan akar tanaman.",
        },
        {
          type: "section",
          title: "pH",
          content: "Netral (6-7), dapat diukur dengan alat pH tanah.",
        },
        {
          type: "section",
          title: "kandungan Organik",
          content: "Tinggi, menunjukkan banyaknya nutrisi alami.",
        },
        {
          type: "section",
          title: "Daya Serap Air",
          content: "Baik, tidak mudah tergenang.",
        },
        {
          type: "section",
          title: "Manfaat Memahami Jenis Tanah",
        },
        {
          type: "section",
          content: "Memilih tanaman yang sesuai.",
        },
        {
          content: "Menghemat penggunaan pupuk.",
        },
        {
          content: "Meningkatkan hasil panen.",
        },
      ],
    },
    {
      id: 4,
      category: "Pengetahuan",
      title: "Dampak Perubahan Iklim Produktivitas Pertanian",
      author: "Undefined",
      date: "Undefined",
      image: DampakPerubahanIklimProduktivitasPertanian,
      content: [
        {
          type: "paragraph",
          text: "Terhadap Produktivitas Pertanian di Indonesia, perubahan iklim menjadi tantangan besar bagi sektor pertanian. Pemerintah berkomitmen untuk mendukung petani dalam menghadapi dampak ini melalui penggunaan teknologi dan inovasi dari Balitbangtan. Strategi yang dioptimalkan meliputi intensifikasi untuk memaksimalkan produktivitas lahan yang ada, serta adaptasi terhadap perubahan pola cuaca dan serangan hama yang meningkat.",
        },
        {
          type: "section",
          title: "Varietas",
          content:
            "Memilih varietas unggul yang tahan kekeringan, hama, dan penyakit seperti padi Inpari 30 menjadi solusi penting untuk menghadapi perubahan iklim.",
        },
        {
          type: "section",
          title: "Benih",
          content:
            "Penggunaan benih berkualitas tinggi dengan daya tumbuh baik memastikan tanaman mampu beradaptasi dengan kondisi lingkungan yang tidak menentu.",
        },
        {
          type: "section",
          title: "Pesemaian",
          content:
            "Menyemai benih pada lokasi yang terlindung dari cuaca ekstrem membantu menghasilkan bibit yang sehat dan siap tanam.",
        },
        {
          type: "section",
          title: "Penyiapan Lahan",
          content:
            "Pengolahan tanah dengan baik, seperti pembuatan saluran drainase dan pemberian pupuk organik, meningkatkan daya tahan lahan terhadap banjir atau kekeringan.",
        },
        {
          type: "section",
          title: "Penyulaman",
          content:
            "Mengganti tanaman yang mati atau rusak akibat cuaca ekstrem memastikan populasi tanaman tetap optimal.",
        },
        {
          type: "section",
          title: "Pengairan",
          content:
            "Irigasi yang efisien seperti irigasi tetes atau pembuatan sumur resapan mengatasi kekurangan air selama musim kering.",
        },
        {
          type: "section",
          title: "Penyiangan",
          content:
            "Mengendalikan gulma secara rutin mengurangi persaingan nutrisi dan air, terutama di musim hujan yang intens.",
        },
        {
          type: "section",
          title: "Pemupukan",
          content:
            "Pemupukan organik dan anorganik secara tepat waktu mendukung pertumbuhan tanaman meskipun kondisi tanah kurang ideal akibat perubahan iklim.",
        },
        {
          type: "section",
          title: "Pengendalian Hama dan Penyakit",
          content:
            "Penerapan Pengelolaan Hama Terpadu (PHT) mengatasi peningkatan serangan hama dan penyakit akibat suhu yang lebih hangat.",
        },
        {
          type: "section",
          title: "Panen dan Pasca Panen",
          content:
            "Panen pada waktu yang tepat dan penanganan pasca panen yang baik, seperti pengeringan dan penyimpanan, menjaga kualitas hasil panen di tengah ancaman cuaca ekstrem.",
        },
      ],
    },
    {
      id: 5,
      category: "Pengetahuan",
      title: "Pemanfaatan Pupuk Organik VS Pupuk Kimia",
      author: "Undefined",
      date: "Undefined",
      image: PemanfaatanPupukOrganikVsPupukKimia,
      content: [
        {
          type: "paragraph",
          text: "Pemilihan jenis pupuk memainkan peran penting dalam produktivitas pertanian. Pemerintah berkomitmen untuk mendukung petani dalam memilih dan memanfaatkan pupuk secara optimal melalui teknologi dan inovasi dari Balitbangtan. Strategi yang dioptimalkan meliputi penggunaan pupuk organik untuk meningkatkan kesuburan tanah jangka panjang, serta pupuk kimia untuk memberikan hasil yang cepat dan spesifik sesuai dengan kebutuhan tanaman. Petani juga diajak untuk beradaptasi dengan tantangan lingkungan dan perubahan iklim melalui penggunaan pupuk yang bijaksana dan ramah lingkungan.",
        },
        {
          type: "section",
          title: "Varietas",
          content:
            "Pemilihan varietas unggul yang sesuai dengan kondisi tanah dan iklim sangat penting untuk hasil yang optimal. Teknologi pemilihan varietas dari Balitbangtan membantu petani mendapatkan bibit terbaik untuk keberhasilan budidaya.",
        },
        {
          type: "section",
          title: "Benih",
          content:
            "Penggunaan benih berkualitas tinggi yang cocok dengan jenis tanah dan kondisi lingkungan memastikan tanaman tumbuh dengan baik.",
        },
        {
          type: "section",
          title: "Pesemaian",
          content:
            "Penyiapan bibit yang sehat dan kuat melalui proses pesemaian yang tepat sangat penting sebelum dipindahkan ke lahan tanam.",
        },
        {
          type: "section",
          title: "Penyiapan Lahan",
          content:
            "Pengolahan lahan yang baik, termasuk pemberian pupuk organik untuk memperbaiki struktur tanah dan meningkatkan daya serap air, adalah langkah awal yang penting dalam pertanian yang berkelanjutan.",
        },
        {
          type: "section",
          title: "Penyulaman",
          content:
            "Proses penyulaman dilakukan untuk mengganti bibit yang gagal tumbuh atau rusak, memastikan kepadatan tanaman tetap optimal untuk hasil maksimal.",
        },
        {
          type: "section",
          title: "Pengairan",
          content:
            "Pengelolaan air yang efisien, baik menggunakan sistem irigasi modern maupun pengaturan jadwal penyiraman yang tepat, memastikan tanaman mendapatkan cukup air tanpa pemborosan.",
        },
        {
          type: "section",
          title: "Penyiangan",
          content:
            "Mengendalikan gulma dengan penyiangan yang rutin membantu mengurangi persaingan tanaman terhadap unsur hara dan air.",
        },
        {
          type: "section",
          title: "Pemupukan",
          content:
            "Penggunaan kombinasi pupuk organik dan kimia yang tepat membantu tanaman mendapatkan nutrisi yang cukup. Pupuk organik untuk kesuburan tanah jangka panjang, sedangkan pupuk kimia untuk hasil cepat sesuai kebutuhan tanaman.",
        },
        {
          type: "section",
          title: "Pengendalian Hama dan Penyakit",
          content:
            "Menggunakan metode pengendalian hama terpadu yang menggabungkan pupuk organik, kimia, serta teknik biologis dan mekanis sangat penting untuk menjaga tanaman tetap sehat dan produktif.",
        },
        {
          type: "section",
          title: "Panen dan Pasca Panen",
          content:
            "Waktu panen yang tepat dan penanganan pasca panen yang baik, seperti pengeringan dan penyimpanan yang sesuai, sangat penting untuk mempertahankan kualitas hasil pertanian.",
        },
      ],
    },
    {
      id: 6,
      category: "Artikel Pengetahuan",
      title: "Teknologi Irigasi Modern Untuk Efisiensi Penggunaan Air",
      author: "Undefined",
      date: "Undefined",
      image: TeknologiIrigasiModernUntukEfisiensiPenggunaanAir,
      content: [
        {
          type: "paragraph",
          text: "Efisiensi penggunaan air menjadi kunci dalam mendukung produktivitas pertanian yang berkelanjutan. Pemerintah berkomitmen untuk membantu petani memanfaatkan teknologi irigasi modern, seperti irigasi tetes dan irigasi otomatis, yang dirancang untuk menghemat penggunaan air dan meningkatkan hasil pertanian. Strategi yang dioptimalkan meliputi penggunaan teknologi irigasi yang cerdas untuk memastikan distribusi air yang tepat waktu dan tepat jumlah, sehingga tanaman mendapatkan kelembaban yang optimal. Selain itu, adaptasi terhadap perubahan iklim dan perubahan pola curah hujan juga menjadi fokus utama dalam meningkatkan efisiensi penggunaan air dan mendukung ketahanan pangan.",
        },
        {
          type: "section",
          title: "Varietas dan Benih",
          content:
            "Pemilihan varietas yang tepat sangat penting agar tanaman dapat beradaptasi dengan sistem irigasi modern, terutama dalam hal kebutuhan air.",
        },
        {
          type: "section",
          title: "Pesemaian dan Penyiapan Lahan",
          content:
            "Menyiapkan lahan dengan baik akan mendukung distribusi air yang lebih efisien dan optimal.",
        },
        {
          type: "section",
          title: "Penyulaman",
          content:
            "Menjaga populasi tanaman yang sehat dan merata mendukung efektivitas penggunaan air dan pupuk.",
        },
        {
          type: "section",
          title: "Pengairan",
          content:
            "Teknologi irigasi seperti irigasi tetes, sprinkler, dan otomatis berbasis sensor membantu mengoptimalkan penggunaan air, yang esensial untuk pertumbuhan tanaman.",
        },
        {
          type: "section",
          title: "Penyiangan",
          content:
            "Teknologi irigasi mikro membantu mengurangi tumbuhnya gulma, yang mengurangi kompetisi terhadap air dan nutrisi.",
        },
        {
          type: "section",
          title: "Pemupukan",
          content:
            "Irigasi yang efisien memungkinkan pupuk lebih cepat diserap oleh tanaman, mendukung pertumbuhannya secara optimal.",
        },
        {
          type: "section",
          title: "Pengendalian Hama dan Penyakit",
          content:
            "Dengan distribusi air yang efisien dan tepat, tanaman lebih sehat dan lebih tahan terhadap serangan hama dan penyakit.",
        },
        {
          type: "section",
          title: "Panen dan Pasca Panen",
          content:
            "Hasil panen yang optimal dicapai dengan air yang cukup dan tepat, serta penanganan pasca panen yang baik untuk menghindari pemborosan.",
        },
      ],
    },
    {
      id: 7,
      category: "Pengetahuan",
      title: "Peran Artificial Intelligence (AI) dalam Pertanian Modern",
      author: "Undefined",
      date: "Undefined",
      image: PeranAiDalamPertanianModern,
      content: [
        {
          type: "paragraph",
          text: "Teknologi kecerdasan buatan (AI) memainkan peran penting dalam meningkatkan produktivitas pertanian. Pemerintah berkomitmen untuk mendukung petani memanfaatkan AI secara optimal melalui teknologi dan inovasi dari Balitbangtan. Strategi yang dioptimalkan meliputi penggunaan AI untuk memantau kondisi tanah, tanaman, dan cuaca, serta untuk meramalkan hasil panen dan mengelola sumber daya alam secara lebih efisien. Selain itu, AI juga dapat membantu dalam pengendalian hama dan penyakit, serta dalam meningkatkan efisiensi penggunaan air dan pupuk di sektor pertanian.",
        },
        {
          type: "section",
          title: "Varietas dan Benih",
          content:
            "AI dapat membantu petani dalam memilih varietas tanaman yang lebih tahan terhadap hama atau penyakit, berdasarkan analisis data iklim dan kondisi tanah, sehingga membantu dalam pemilihan benih yang tepat.",
        },
        {
          type: "section",
          title: "Pesemaian",
          content:
            "AI mendukung pemantauan perkembangan bibit dan tanaman muda melalui teknologi pemetaan dan penginderaan jauh, membantu petani untuk menentukan kondisi ideal bagi pertumbuhan benih.",
        },
        {
          type: "section",
          title: "Penyiapan Lahan",
          content:
            "Dengan pemetaan lahan menggunakan drone dan AI, petani dapat memetakan area yang membutuhkan perawatan khusus, seperti daerah yang rawan erosi atau kekurangan nutrisi.",
        },
        {
          type: "section",
          title: "Penyulaman",
          content:
            "AI dapat mendeteksi tanaman yang kurang sehat atau tidak tumbuh dengan baik, memberikan informasi kepada petani mengenai perlunya penyulaman untuk meningkatkan kepadatan tanaman.",
        },
        {
          type: "section",
          title: "Pengairan",
          content:
            "Sistem irigasi cerdas berbasis AI memungkinkan pengelolaan air secara efisien, memastikan tanaman mendapatkan kelembapan yang optimal dan mengurangi pemborosan air.",
        },
        {
          type: "section",
          title: "Penyiangan",
          content:
            "AI, melalui sensor dan citra digital, dapat membantu mengidentifikasi gulma di lahan pertanian, memudahkan pengendalian gulma secara lebih tepat sasaran.",
        },
        {
          type: "section",
          title: "Pemupukan",
          content:
            "Teknologi AI menganalisis data tanah dan kondisi tanaman untuk memberikan rekomendasi pemupukan yang lebih tepat, meningkatkan efisiensi penggunaan pupuk dan mengurangi dampaknya terhadap lingkungan.",
        },
        {
          type: "section",
          title: "Pengendalian Hama dan Penyakit",
          content:
            "AI memungkinkan pendeteksian dini serangan hama dan penyakit menggunakan kamera atau drone dengan teknologi pengenalan pola, memungkinkan petani untuk mengintervensi sebelum kerusakan besar terjadi.",
        },
        {
          type: "section",
          title: "Panen",
          content:
            "AI membantu dalam perencanaan waktu panen berdasarkan prediksi cuaca dan analisis data tanaman, sehingga hasil panen dapat dimaksimalkan.",
        },
        {
          type: "section",
          title: "Pasca Panen",
          content:
            "AI dapat memantau kualitas hasil panen dan membantu petani dalam menentukan waktu yang tepat untuk panen, serta mengelola pasca panen secara lebih efisien.",
        },
      ],
    },
    {
      id: 8,
      category: "Pengetahuan",
      title: "Konsep Pertanian Untuk Berkelanjutan Masa Depan",
      author: "Undefined",
      date: "Undefined",
      image: KonsepPertanianUntukBerkelanjutanMasaDepan,
      content: [
        {
          type: "paragraph",
          text: "Pemerintah berkomitmen untuk mendukung petani dalam mencapai pertanian berkelanjutan melalui inovasi teknologi yang ramah lingkungan, termasuk sistem pertanian yang mengoptimalkan sumber daya alam secara efisien. Strategi yang diterapkan meliputi penggunaan metode pertanian yang ramah lingkungan, pengelolaan air yang efisien, dan penggunaan teknologi canggih untuk meningkatkan produktivitas secara berkelanjutan, sambil mengatasi tantangan perubahan iklim yang terus berkembang.",
        },
        {
          type: "section",
          title: "Varietas dan Benih",
          content:
            "Pemilihan varietas tanaman yang tahan terhadap perubahan iklim dan lebih efisien dalam penggunaan sumber daya penting untuk mendukung pertanian berkelanjutan.",
        },
        {
          type: "section",
          title: "Pesemaian",
          content:
            "Teknik semai yang efisien, dengan pemilihan benih yang tepat, berkontribusi pada pertumbuhan yang sehat dan meminimalkan penggunaan bahan kimia.",
        },
        {
          type: "section",
          title: "Penyiapan Lahan",
          content:
            "Praktik pengelolaan tanah yang ramah lingkungan seperti pengolahan tanah minimum dan penggunaan rotasi tanaman untuk mencegah erosi dan menjaga kesuburan tanah.",
        },
        {
          type: "section",
          title: "Penyulaman",
          content:
            "Penyulaman dilakukan untuk memastikan tanaman tumbuh dengan baik, memperbaiki kerugian yang terjadi akibat kegagalan pertumbuhan pada bibit awal, dan mempertahankan hasil yang optimal.",
        },
        {
          type: "section",
          title: "Pengairan",
          content:
            "Penggunaan teknologi irigasi hemat air, seperti irigasi tetes dan irigasi otomatis berbasis sensor, membantu menghemat sumber daya air dan meningkatkan efisiensi pengairan.Air dikeringkan secara bertahap menjelang panen untuk mempermudah proses pemanenan dan meningkatkan kualitas gabah.",
        },
        {
          type: "section",
          title: "Penyiangan",
          content:
            "Teknik pengendalian gulma secara ramah lingkungan, seperti penggunaan mulsa atau penyiangan manual, untuk menjaga keseimbangan ekosistem dan mencegah penggunaan bahan kimia berlebih.",
        },
        {
          type: "section",
          title: "Pemupukan",
          content:
            "Pemupukan yang tepat dengan memperhatikan dosis yang sesuai berdasarkan analisis tanah, serta penggunaan pupuk organik untuk menjaga kesuburan tanah dan mengurangi ketergantungan pada pupuk kimia.",
        },
        {
          type: "section",
          title: "Pengendalian Hama dan Penyakit",
          content:
            "Penggunaan teknologi AI dan pengendalian hama terpadu untuk mencegah kerusakan tanaman tanpa merusak lingkungan. Teknologi ini mengurangi ketergantungan pada pestisida kimia.",
        },
        {
          type: "section",
          title: "Panen dan Pasca Panen",
          content:
            "Praktik panen yang tepat waktu dan teknik pasca panen yang efisien akan mengurangi pemborosan hasil dan meningkatkan kualitas serta daya simpan produk pertanian.",
        },
      ],
    },
    {
      id: 9,
      category: "Pengetahuan",
      title: "Manfaat Teknologi IoT Dalam Pengelolaan Lahan Pertanian",
      author: "Undefined",
      date: "Undefined",
      image: ManfaatTeknologiIotDalamPengelolaanLahanPertanian,
      content: [
        {
          type: "paragraph",
          text: "Teknologi Internet of Things (IoT) memberikan kontribusi besar dalam mengoptimalkan pengelolaan lahan pertanian. Dengan sensor-sensor canggih yang terhubung ke internet, petani dapat memantau kondisi lahan secara real-time, seperti kelembapan tanah, suhu, dan nutrisi yang tersedia.",
        },
        {
          type: "section",
          title: "Varietas dan Benih",
          content:
            "Teknologi IoT membantu pemantauan kondisi tanah dan tanaman secara akurat, yang dapat mendukung pemilihan varietas dan benih yang sesuai untuk kondisi tertentu, meskipun tidak dibahas secara langsung dalam artikel.",
        },
        {
          type: "section",
          title: "Pesemaian",
          content:
            "IoT memungkinkan pemantauan kelembapan dan suhu yang optimal untuk proses penyemaian melalui sensor yang terhubung, meskipun tidak dijelaskan secara rinci dalam artikel.",
        },
        {
          type: "section",
          title: "Penyiapan Lahan",
          content:
            "IoT membantu memantau kondisi tanah, seperti pH dan kesuburan, yang mendukung keputusan terkait penyiapan lahan yang tepat, termasuk pemberian nutrisi tanah dan pengelolaan irigasi.",
        },
        {
          type: "section",
          title: "Penyulaman",
          content:
            "Walaupun tidak dijelaskan secara langsung, teknologi IoT yang memantau kondisi tanaman dengan sensor dan drone dapat memberikan informasi untuk identifikasi tanaman yang perlu disulam.",
        },
        {
          type: "section",
          title: "Pengairan",
          content:
            "IoT memainkan peran utama dalam pengelolaan irigasi otomatis, mengatur pasokan air sesuai kebutuhan tanaman berdasarkan data kelembapan tanah yang dikumpulkan oleh sensor, memastikan efisiensi penggunaan air.",
        },
        {
          type: "section",
          title: "Penyiangan",
          content:
            "IoT dapat memantau kesehatan tanaman dengan drone dan sensor, yang membantu mendeteksi serangan hama atau pertumbuhan gulma yang perlu disingkirkan, meskipun tidak disebutkan secara eksplisit.",
        },
        {
          type: "section",
          title: "Pemupukan",
          content:
            "IoT mendukung pemupukan yang lebih efisien dengan memberikan informasi tentang tingkat nutrisi tanah, sehingga petani dapat melakukan pemupukan secara tepat waktu dan sesuai kebutuhan tanaman.",
        },
        {
          type: "section",
          title: "Pengendalian Hama dan Penyakit",
          content:
            "Pemantauan tanaman dengan drone dan sensor IoT memungkinkan deteksi dini hama dan penyakit, sehingga petani dapat mengambil tindakan lebih cepat untuk pengendalian, mengurangi ketergantungan pada pestisida.",
        },
        {
          type: "section",
          title: "Panen",
          content:
            "IoT dapat membantu merencanakan waktu panen dengan memantau kondisi tanaman secara real-time, memberikan data yang diperlukan untuk menentukan waktu yang tepat untuk panen.",
        },
        {
          type: "section",
          title: "Pasca Panen",
          content:
            "IoT digunakan untuk mengelola penyimpanan hasil panen dengan memonitor suhu, kelembapan, dan ventilasi, yang menjaga kualitas hasil panen agar tetap segar dan terhindar dari kerusakan.",
        },
      ],
    },
    {
      id: 10,
      category: "Pengetahuan",
      title: "Dampak Perubahan Iklim terhadap Produksi Pertanian",
      author: "Undefined",
      date: "Undefined",
      image: DampakPerubahanIklimTerhadapProduksiPertanian,
      content: [
        {
          type: "paragraph",
          text: "Perubahan iklim memiliki dampak signifikan terhadap produktivitas pertanian. Fluktuasi suhu, perubahan pola hujan, dan kejadian cuaca ekstrem seperti banjir atau kekeringan dapat mengganggu siklus pertanian, mempengaruhi hasil panen, dan meningkatkan kerugian petani. Untuk mengatasi tantangan ini, teknologi dan inovasi dalam bidang pertanian, seperti penggunaan varietas tanaman yang tahan terhadap perubahan iklim, serta penerapan sistem irigasi yang efisien, sangat penting dalam mempertahankan ketahanan pangan dan meningkatkan produktivitas.",
        },
        {
          type: "section",
          title: "Varietas",
          content:
            "Pengembangan varietas tanaman yang tahan terhadap suhu tinggi, kekeringan, atau banjir sangat penting untuk menjaga produktivitas meskipun cuaca ekstrem akibat perubahan iklim.",
        },
        {
          type: "section",
          title: "Benih",
          content:
            "Penggunaan benih yang tahan terhadap perubahan iklim, seperti padi varietas Inpari yang tahan genangan air, penting untuk mengurangi risiko kerugian akibat kondisi cuaca yang tidak menentu.",
        },
        {
          type: "section",
          title: "Pesemaian",
          content:
            "Teknologi informasi dapat membantu merencanakan waktu tanam secara lebih efektif, mengurangi risiko kerugian akibat perubahan pola cuaca yang tidak menentu.",
        },
        {
          type: "section",
          title: "Penyiapan Lahan",
          content:
            "Praktik pertanian konservasi, seperti pengolahan tanah minimum, perlu diterapkan untuk menjaga kesuburan tanah dan mencegah erosi yang diperburuk oleh hujan ekstrem.",
        },
        {
          type: "section",
          title: "Penyulaman",
          content:
            "Diversifikasi pertanian dengan berbagai jenis tanaman dan usaha peternakan dapat membantu mengurangi risiko gagal panen, meningkatkan ketahanan ekonomi, dan menjaga hasil panen.",
        },
        {
          type: "section",
          title: "Pengairan",
          content:
            "Pengelolaan air yang efisien, seperti menggunakan irigasi modern (misalnya irigasi tetes) dan membangun cadangan air melalui embung atau waduk, sangat penting untuk memastikan ketersediaan air yang cukup bagi tanaman.",
        },
        {
          type: "section",
          title: "Penyiangan",
          content:
            "Penyuluhan kepada petani mengenai teknik pengendalian hama dan penyakit yang ramah lingkungan, serta pengelolaan tanah yang baik, sangat penting untuk menjaga hasil pertanian meskipun terjadi perubahan iklim.",
        },
        {
          type: "section",
          title: "Pemupukan",
          content:
            "Pengelolaan pupuk yang tepat sesuai dengan kondisi tanah dan kebutuhan tanaman perlu diperhatikan agar tanaman tetap produktif, meskipun kondisi tanah dan iklim berubah.",
        },
        {
          type: "section",
          title: "Pengendalian Hama dan Penyakit",
          content:
            "Perubahan suhu dan kelembapan akibat perubahan iklim mendukung pertumbuhan hama dan penyakit, sehingga pemantauan dan tindakan pengendalian yang cepat dan tepat sangat dibutuhkan.",
        },
        {
          type: "section",
          title: "Panen dan Pasca Panen",
          content:
            "Teknologi informasi dan pemantauan cuaca yang akurat dapat membantu petani merencanakan waktu panen secara optimal, mengurangi kerugian dan memastikan hasil panen dapat dipertahankan dengan baik melalui teknik penyimpanan yang sesuai.",
        },
      ],
    },
  ];

  const knowledgeData = articleData.find((item) => item.id === parseInt(id));

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Baca artikel: ${knowledgeData.title}`;

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
        <h1 className="text-3xl font-bold">{knowledgeData.category}</h1>
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
            <h1 className="text-3xl font-bold mb-4">{knowledgeData.title}</h1>
            <div className="text-gray-600 mb-6">
              <p>
                {knowledgeData.author} / {knowledgeData.date}
              </p>
            </div>

            <div className="relative mb-8">
              <img
                src={knowledgeData.image}
                alt={knowledgeData.title}
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
              {knowledgeData.content.map((section, index) => (
                <div key={index} className="mb-6">
                  {section.type === "paragraph" ? (
                    <p className="mb-4">{section.text}</p>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold mb-2">
                        {section.title}
                      </h2>
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
