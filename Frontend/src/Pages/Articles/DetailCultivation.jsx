import { useParams, Link } from "react-router-dom";
import {
  RiDownloadLine,
  RiWhatsappLine,
  RiFacebookBoxLine,
  RiTwitterXLine,
  RiSearchLine,
} from "react-icons/ri";
import {
    CaraTebarBenihPadiYangTepat,
    PanduanLengkapUntukHasilOptimal,
    BudidayaPadiOrganikMenjagaKeseimbanganAlam,
    BudidayaPadiDiLahanGambut,
    BudidayaPadiPadaLahanSempit,
    BudidayaPadiDiLahanPasir,
    BudidayaPadiDiLahanTerendam,
    BudidayaPadiDenganMetodeTanamJajarLegowo,
    BudidayaPadiDenganTeknologiDrone,
    BudidayaPadiDenganTeknikTanamTumpangSari,
  WatermarkLong,
} from "../../assets/image";

// halaman ini bersifat sementara
const DetailCultivation = () => {
  const { id } = useParams();

  const articleData = [
    {
        id: 1,
        category: "ARTIKEL BUDIDAYA TANI",
        title: "Cara Tebar Benih Padi yang Tepat",
        author: "pustaka.setjen.pertanian",
        date: "Januari 18, 2022",
        image: CaraTebarBenihPadiYangTepat, // Ganti dengan path gambar yang sesuai
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
    },
    {
        id: 2,
        category: "ARTIKEL BUDIDAYA TANI",
        title: "Panduan Lengkap untuk Hasil Optimal",
        author: "pustaka.setjen.pertanian",
        date: "Januari 18, 2022",
        image: PanduanLengkapUntukHasilOptimal, // Ganti dengan path gambar yang sesuai
        content: [
            {
                type: "paragraph",
                text: "Padi adalah salah satu komoditas utama dalam pertanian Indonesia. Sebagai sumber pangan utama, padi memiliki peran yang sangat vital dalam kehidupan masyarakat. Untuk mendapatkan hasil yang optimal, petani harus menerapkan teknik budidaya yang tepat, mulai dari persiapan lahan, pemilihan bibit unggul, hingga pengendalian hama. Artikel ini akan membahas cara-cara terbaik dalam membudidayakan padi agar dapat memperoleh hasil yang maksimal dan berkelanjutan."
            },
            {
                type: "section",
                title: "Langkah-langkah dalam Budidaya Padi yang Efektif",
                content: [
                    "1. Pemilihan Bibit Padi Unggul",
                    "2. Persiapan Lahan yang Baik",
                    "3. Teknik Penanaman Padi",
                    "4. Pengelolaan Irigasi yang Efisien",
                    "5. Pengendalian Hama dan Penyakit Padi"
                ]
            },
            {
                type: "section",
                title: "Faktor-Faktor yang Mempengaruhi Hasil Budidaya Padi",
                content: [
                    {
                        title: "1. Kondisi Iklim",
                        content: " - Iklim yang cocok sangat penting untuk pertumbuhan padi. Tanaman padi membutuhkan suhu yang stabil dan curah hujan yang cukup. Oleh karena itu, pemilihan waktu tanam yang tepat berdasarkan musim sangat penting agar tanaman padi tumbuh dengan baik."
                    },
                    {
                        title: "2. Kualitas Tanah",
                        content: " - Tanah yang subur dengan kandungan unsur hara yang cukup sangat mendukung pertumbuhan padi. Analisis tanah secara berkala membantu petani mengetahui kekurangan unsur hara tertentu yang dapat dipenuhi dengan pemberian pupuk yang tepat."
                    },
                    {
                        title: "3. Penyiraman yang Tepat",
                        content: " - Penyiraman yang teratur sangat penting, tetapi padi juga harus ditanam di lahan yang dapat mengalirkan air dengan baik. Genangan air yang berlebihan dapat menyebabkan akar padi busuk, sedangkan kekeringan dapat menghambat pertumbuhan."
                    },
                    {
                        title: "4. Pemupukan yang Tepat",
                        content: " - Padi membutuhkan berbagai unsur hara untuk tumbuh dengan baik, termasuk nitrogen, fosfor, dan kalium. Pemberian pupuk yang tepat pada waktu yang tepat sangat penting untuk mendukung pertumbuhan padi dan memastikan hasil yang maksimal."
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        category: "ARTIKEL BUDIDAYA TANI",
        title: "Budidaya Padi Organik Menjaga Keseimbangan Alam",
        author: "pustaka.setjen.pertanian",
        date: "Januari 18, 2022",
        image: BudidayaPadiOrganikMenjagaKeseimbanganAlam, // Ganti dengan path gambar yang sesuai
        content: [
            {
                type: "paragraph",
                text: "Padi organik semakin populer di kalangan petani yang peduli terhadap keberlanjutan dan kesehatan lingkungan. Budidaya padi organik tidak hanya mengurangi ketergantungan pada bahan kimia, tetapi juga mendukung kelestarian tanah dan ekosistem pertanian. Dalam artikel ini, kita akan membahas bagaimana cara menanam padi secara organik, manfaatnya, dan langkah-langkah untuk berhasil dalam budidaya padi organik."
            },
            {
                type: "section",
                title: "Langkah-langkah dalam Budidaya Padi Organik",
                content: [
                    "1. Persiapan Lahan dengan Metode Organik",
                    "2. Pemilihan Bibit Padi Organik",
                    "3. Pengelolaan Irigasi yang Alami",
                    "4. Pengendalian Hama dan Penyakit Secara Organik",
                    "5. Pemupukan Organik"
                ]
            },
            {
                type: "section",
                title: "Manfaat Budidaya Padi Organik",
                content: [
                    {
                        title: "1. Meningkatkan Kesehatan Tanah",
                        content: "Tanah yang diberi pupuk organik memiliki struktur yang lebih baik, meningkatkan kemampuan tanah dalam menyimpan air, dan mengurangi erosi. Tanah organik juga kaya akan mikroorganisme yang mendukung kehidupan tanaman."
                    },
                    {
                        title: "2. Meningkatkan Keanekaragaman Hayati",
                        content: "Budidaya padi organik mendukung keberagaman hayati di lahan pertanian, karena tidak menggunakan bahan kimia berbahaya yang dapat merusak flora dan fauna tanah. Ini juga mendukung keberadaan serangga dan organisme lain yang penting dalam ekosistem pertanian."
                    },
                    {
                        title: "3. Menghasilkan Beras yang Lebih Sehat",
                        content: "Padi yang dibudidayakan secara organik lebih bebas dari bahan kimia, sehingga beras yang dihasilkan juga lebih sehat untuk dikonsumsi. Beras organik cenderung memiliki kandungan nutrisi yang lebih tinggi dan lebih aman bagi kesehatan jangka panjang."
                    },
                    {
                        title: "4. Mendukung Keberlanjutan Pertanian",
                        content: "Dengan mengurangi penggunaan bahan kimia, budidaya padi organik mendukung keberlanjutan pertanian. Pertanian organik menjaga kesuburan tanah dalam jangka panjang dan membantu melindungi sumber daya alam."
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        category: "ARTIKEL BUDIDAYA TANI",
        title: "Budidaya Padi di Lahan Gambut",
        author: "pustaka.setjen.pertanian",
        date: "Januari 18, 2022",
        image: BudidayaPadiDiLahanGambut, // Ganti dengan path gambar yang sesuai
        content: [
            {
                type: "paragraph",
                text: "Lahan gambut di Indonesia merupakan salah satu sumber daya alam yang potensial untuk pertanian, termasuk budidaya padi. Namun, lahan gambut memiliki tantangan tersendiri dalam budidaya padi, seperti masalah drainase, kekurangan unsur hara, dan kerentanan terhadap kebakaran. Oleh karena itu, dibutuhkan teknik khusus dan pengelolaan yang bijaksana untuk menjadikan lahan gambut sebagai media yang optimal bagi pertumbuhan padi. Artikel ini akan membahas cara-cara yang tepat untuk budidaya padi di lahan gambut serta solusi untuk mengatasi berbagai tantangan yang ada."
            },
            {
                type: "section",
                title: "Langkah-langkah dalam Budidaya Padi di Lahan Gambut",
                content: [
                    "1. Persiapan Lahan Gambut yang Tepat",
                    "2. Pemilihan Varietas Padi yang Tahan terhadap Lahan Gambut",
                    "3. Pengelolaan Air dan Irigasi yang Baik",
                    "4. Pemupukan untuk Meningkatkan Kesuburan Tanah Gambut",
                    "5. Pengendalian Hama dan Penyakit yang Efektif"
                ]
            },
            {
                type: "section",
                title: "Manfaat :",
                content: [
                    {
                        title: "1. Produktivitas Tinggi",
                        content: "Dengan pengelolaan yang tepat, lahan gambut dapat memberikan hasil padi yang melimpah, bahkan lebih tinggi dibandingkan dengan lahan biasa."
                    },
                    {
                        title: "2. Sumber Daya Alam yang Terbarukan",
                        content: "Lahan gambut memiliki potensi untuk pertanian berkelanjutan jika dikelola dengan bijaksana, mengingat kemampuannya dalam menyimpan air dan bahan organik."
                    },
                    {
                        title: "3. Peningkatan Pendapatan Petani",
                        content: "Hasil panen yang lebih baik dan terkontrol dapat meningkatkan pendapatan petani yang membudidayakan padi di lahan gambut."
                    }
                ]
            },
            {
                type: "section",
                title: "Tantangan :",
                content: [
                    {
                        title: "1. Kerentanan Terhadap Kebakaran",
                        content: "Salah satu masalah terbesar dalam budidaya padi di lahan gambut adalah kerentanannya terhadap kebakaran, terutama pada musim kemarau. Petani harus berhati-hati dalam mengelola irigasi dan pembersihan lahan agar kebakaran tidak terjadi."
                    },
                    {
                        title: "2. Asamnya Tanah Gambut",
                        content: "Tanah gambut cenderung asam, yang dapat menghambat pertumbuhan tanaman jika tidak dikelola dengan benar. Oleh karena itu, pengelolaan pH tanah sangat penting."
                    },
                    {
                        title: "3. Keterbatasan Nutrisi",
                        content: "Tanah gambut seringkali kekurangan unsur hara yang diperlukan oleh tanaman padi, sehingga pemupukan yang tepat sangat diperlukan untuk meningkatkan kesuburan tanah."
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        category: "ARTIKEL BUDIDAYA TANI",
        title: "Budidaya Padi pada Lahan Sempit",
        author: "pustaka.setjen.pertanian",
        date: "Januari 18, 2022",
        image: BudidayaPadiPadaLahanSempit, // Ganti dengan path gambar yang sesuai
        content: [
            {
                type: "paragraph",
                text: "Dengan semakin terbatasnya lahan pertanian, terutama di daerah perkotaan, banyak petani mencari cara untuk dapat menanam padi meskipun dengan lahan yang terbatas. Budidaya padi di lahan sempit menjadi pilihan yang menarik, tidak hanya untuk memenuhi kebutuhan pangan, tetapi juga sebagai solusi dalam mengoptimalkan pemanfaatan ruang terbatas. Artikel ini akan membahas cara-cara efektif untuk menanam padi pada lahan sempit, serta solusi untuk mencapai hasil yang optimal meskipun dengan keterbatasan lahan."
            },
            {
                type: "section",
                title: "Langkah-langkah dalam Budidaya Padi pada Lahan Sempit",
                content: [
                    "1. Pemilihan Lokasi yang Tepat",
                    "2. Penggunaan Teknik Hidroponik untuk Padi",
                    "3. Pemilihan Varietas Padi yang Tumbuh Cepat dan Kompak",
                    "4. Pengelolaan Air yang Efisien",
                    "5. Penggunaan Media Tanam Vertikal"
                ]
            },
            {
                type: "section",
                title: "Manfaat Budidaya Padi pada Lahan Sempit",
                content: [
                    {
                        title: "1. Efisiensi Ruang",
                    },
                    {
                        title: "2. Mengurangi Ketergantungan pada Pangan Impor",
                    },
                    {
                        title: "3. Keberlanjutan Pertanian",
                    }
                ]
            },
            {
                type: "section",
                title: "Tantangan Budidaya Padi pada Lahan Sempit",
                content: [
                    {
                        title: "1. Keterbatasan Ruang dan Sumber Daya",
                        content: "Salah satu tantangan terbesar adalah keterbatasan ruang yang dapat mengurangi jumlah hasil panen. Selain itu, sumber daya lain seperti air dan pupuk harus dikelola dengan bijaksana."
                    },
                    {
                        title: "2. Ketergantungan pada Teknologi",
                        content: "Budidaya padi pada lahan sempit seringkali memerlukan teknologi seperti hidroponik atau sistem irigasi otomatis, yang memerlukan investasi awal dan pemahaman teknis dari petani."
                    },
                    {
                        title: "3. Penyakit dan Hama",
                        content: "Pada lahan terbatas, penyebaran hama dan penyakit bisa lebih cepat. Oleh karena itu, pengendalian hama dan penyakit secara organik menjadi penting untuk menjaga keberhasilan panen."
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        category: "ARTIKEL BUDIDAYA TANI",
        title: "Budidaya Padi di Lahan Pasir",
        author: "pustaka.setjen.pertanian",
        date: "Januari 18, 2022",
        image: BudidayaPadiDiLahanPasir, // Ganti dengan path gambar yang sesuai
        content: [
            {
                type: "paragraph",
                text: "Lahan pasir biasanya dianggap kurang ideal untuk budidaya padi karena tekstur tanahnya yang tidak mampu menyimpan air dengan baik dan kekurangan unsur hara. Namun, dengan teknologi pertanian yang tepat, lahan pasir juga dapat digunakan untuk budidaya padi, meskipun memerlukan usaha lebih dalam pengelolaannya. Artikel ini akan membahas bagaimana cara-cara mengelola lahan pasir untuk budidaya padi dan tantangan yang mungkin dihadapi, serta solusi yang dapat diterapkan."
            },
            {
                type: "section",
                title: "Langkah-langkah dalam Budidaya Padi di Lahan Pasir",
                content: [
                    "1. Pengolahan Tanah yang Optimal",
                    "2. Penerapan Sistem Irigasi yang Efisien",
                    "3. Pemilihan Varietas Padi yang Tahan Terhadap Kondisi Kering",
                    "4. Pemupukan yang Tepat",
                    "5. Pengelolaan Tanaman dan Pengendalian Hama"
                ]
            },
            {
                type: "section",
                title: "Manfaat Budidaya Padi di Lahan Pasir",
                content: [
                    {
                        title: "1. Pemanfaatan Lahan yang Lebih Luas",
                        content: "Dengan teknologi dan pengelolaan yang tepat, lahan pasir yang biasanya tidak digunakan dapat dimanfaatkan untuk budidaya padi, membuka peluang pertanian baru di daerah-daerah yang memiliki lahan pasir."
                    },
                    {
                        title: "2. Meningkatkan Ketahanan Pangan",
                        content: "Budidaya padi di lahan pasir dapat berkontribusi pada ketahanan pangan lokal, terutama di daerah yang kekurangan lahan subur untuk pertanian. Dengan memanfaatkan lahan ini, petani dapat memproduksi lebih banyak beras untuk memenuhi kebutuhan pangan."
                    },
                    {
                        title: "3. Diversifikasi Sumber Pendapatan Petani",
                        content: "Petani yang mengelola lahan pasir untuk padi dapat meningkatkan pendapatan mereka melalui peningkatan produksi. Dengan pendekatan yang benar, hasil panen yang tinggi akan memberikan keuntungan yang lebih besar."
                    }
                ]
            },
            {
                type: "section",
                title: "Tantangan Budidaya Padi di Lahan Pasir",
                content: [
                    {
                        title: "1. Kekurangan Air",
                        content: "Meskipun lahan pasir memiliki drainase yang baik, lahan ini cepat kehilangan air. Oleh karena itu, pengelolaan air yang baik menjadi tantangan utama untuk menjaga kelembaban tanah agar tanaman padi dapat tumbuh dengan baik."
                    },
                    {
                        title: "2. Keterbatasan Unsur Hara",
                        content: "Tanah pasir biasanya miskin akan unsur hara, sehingga membutuhkan pemupukan yang lebih intensif dan penggunaan bahan organik agar tanaman padi dapat tumbuh dengan sehat."
                    },
                    {
                        title: "3. Ketahanan Terhadap Hama dan Penyakit",
                        content: "Lahan pasir yang terpapar sinar matahari langsung bisa meningkatkan kerentanannya terhadap serangan hama dan penyakit, sehingga pengendalian yang tepat sangat penting untuk menjaga hasil panen tetap optimal."
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        category: "ARTIKEL BUDIDAYA TANI",
        title: "Budidaya Padi di Lahan Terendam",
        author: "pustaka.setjen.pertanian",
        date: "Januari 18, 2022",
        image: BudidayaPadiDiLahanTerendam, // Ganti dengan path gambar yang sesuai
        content: [
            {
                type: "paragraph",
                text: "Lahan terendam merupakan salah satu jenis lahan yang banyak ditemukan di kawasan pertanian padi, terutama di dataran rendah dan daerah irigasi. Lahan terendam memiliki kondisi tanah yang selalu tergenang air, yang dapat menjadi tantangan bagi banyak tanaman. Namun, padi adalah tanaman yang sangat adaptif terhadap kondisi terendam dan seringkali lebih produktif di lahan jenis ini. Artikel ini akan membahas teknik dan solusi yang tepat untuk mengelola budidaya padi di lahan terendam agar hasil yang diperoleh optimal."
            },
            {
                type: "section",
                title: "Langkah-langkah dalam Budidaya Padi di Lahan Terendam",
                content: [
                    "1. Pengelolaan Sistem Irigasi yang Baik",
                    "2. Pemilihan Varietas Padi Tahan Air",
                    "3. Pengolahan Tanah yang Tepat",
                    "4. Pemupukan yang Tepat",
                    "5. Pengendalian Hama dan Penyakit"
                ]
            },
            {
                type: "section",
                title: "Manfaat Budidaya Padi di Lahan Terendam",
                content: [
                    {
                        title: "1. Optimalisasi Penggunaan Lahan",
                        content: "Lahan terendam seringkali merupakan area yang sulit digunakan untuk jenis tanaman lain. Namun, dengan budidaya padi, lahan ini dapat dimanfaatkan secara maksimal untuk menghasilkan pangan yang dibutuhkan masyarakat."
                    },
                    {
                        title: "2. Peningkatan Ketahanan Pangan",
                        content: "Padi yang ditanam di lahan terendam dapat membantu meningkatkan ketahanan pangan, terutama di daerah yang memiliki banyak lahan terendam dan sangat bergantung pada produksi beras."
                    },
                    {
                        title: "3. Peningkatan Pendapatan Petani",
                        content: "Dengan pengelolaan yang baik, hasil panen padi di lahan terendam dapat memberikan keuntungan yang lebih besar bagi petani, terutama jika menggunakan varietas padi unggul yang memiliki hasil panen tinggi."
                    }
                ]
            },
            {
                type: "section",
                title: "Tantangan Budidaya Padi di Lahan Terendam",
                content: [
                    {
                        title: "1. Risiko Kekurangan Air",
                        content: "Meskipun lahan terendam cenderung memiliki cukup air, pada musim kemarau atau ketika sistem irigasi tidak optimal, lahan bisa mengalami kekurangan air yang berdampak pada pertumbuhan padi."
                    },
                    {
                        title: "2. Masalah Drainase yang Buruk",
                        content: "Drainase yang buruk dapat menyebabkan kelebihan air yang merusak akar tanaman padi. Oleh karena itu, pengelolaan air yang tepat harus dilakukan untuk mencegah kerusakan akibat genangan air yang terlalu lama."
                    },
                    {
                        title: "3. Serangan Hama dan Penyakit",
                        content: "Lahan terendam yang lembab menjadi tempat yang ideal bagi perkembangan hama dan penyakit. Pengendalian hama secara teratur dan penggunaan varietas padi yang tahan terhadap penyakit menjadi hal yang sangat penting."
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        category: "ARTIKEL BUDIDAYA TANI",
        title: "Budidaya Padi dengan Metode Tanam Jajar Legowo",
        author: "pustaka.setjen.pertanian",
        date: "Januari 18, 2022",
        image: BudidayaPadiDenganMetodeTanamJajarLegowo, // Ganti dengan path gambar yang sesuai
        content: [
            {
                type: "paragraph",
                text: "Metode tanam jajar legowo merupakan salah satu teknik budidaya padi yang diterapkan untuk meningkatkan hasil panen. Teknik ini melibatkan pola tanam padi dengan barisan yang lebih teratur, memberikan ruang yang cukup bagi setiap tanaman untuk tumbuh dengan optimal. Dalam artikel ini, kita akan membahas bagaimana cara menerapkan metode jajar legowo, manfaatnya, serta keunggulan yang dapat diperoleh petani."
            },
            {
                type: "section",
                title: "Langkah-langkah dalam Menerapkan Metode Tanam Jajar Legowo",
                content: [
                    "1. Persiapan Lahan",
                    "2. Penanaman Padi dengan Pola Legowo",
                    "3. Pemupukan yang Sesuai",
                    "4. Pengelolaan Air yang Baik",
                    "5. Pengendalian Hama dan Penyakit"
                ]
            },
            {
                type: "section",
                title: "Manfaat Metode Tanam Jajar Legowo",
                content: [
                    {
                        title: "1. Meningkatkan Hasil Panen",
                        content: "Dengan memberikan ruang lebih banyak bagi setiap tanaman untuk berkembang, metode jajar legowo dapat meningkatkan produksi padi secara signifikan."
                    },
                    {
                        title: "2. Efisiensi Pemanfaatan Sumber Daya",
                        content: "Pola tanam yang teratur dan terencana dalam jajar legowo memungkinkan pemanfaatan air, sinar matahari, dan nutrisi tanah secara lebih efisien."
                    },
                    {
                        title: "3. Mengurangi Kerusakan Tanah",
                        content: "Metode jajar legowo juga berperan dalam mengurangi kerusakan tanah akibat pemadatan atau genangan air yang berlebihan."
                    },
                    {
                        title: "4. Mengurangi Penggunaan Pupuk",
                        content: "Dengan penerapan metode ini, penggunaan pupuk menjadi lebih efisien karena pemupukan dapat dilakukan dengan tepat pada waktu dan dosis yang sesuai dengan kebutuhan tanaman."
                    }
                ]
            },
            {
                type: "section",
                title: "Tantangan Metode Tanam Jajar Legowo",
                content: [
                    {
                        title: "1. Biaya Pengolahan Lahan yang Lebih Tinggi",
                        content: "Meskipun metode jajar legowo menawarkan banyak keuntungan, pengolahan lahan dan pengaturan barisan tanaman membutuhkan waktu dan tenaga lebih, yang bisa meningkatkan biaya produksi."
                    },
                    {
                        title: "2. Pengelolaan Irigasi yang Lebih Rumit",
                        content: "Karena lahan harus dipersiapkan dengan lebih hati-hati dan pengaturan kedalaman air menjadi penting, pengelolaan irigasi dapat menjadi lebih kompleks dibandingkan dengan metode tanam tradisional."
                    },
                    {
                        title: "3. Perlu Peralatan yang Tepat",
                        content: "Untuk menanam dengan pola jajar legowo yang teratur, petani perlu memiliki alat atau teknologi yang memungkinkan mereka untuk menanam dengan tepat. Tanpa alat yang tepat, pengaturan jarak antar tanaman bisa menjadi lebih sulit."
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        category: "ARTIKEL BUDIDAYA TANI",
        title: "Budidaya Padi dengan Teknologi Drone",
        author: "pustaka.setjen.pertanian",
        date: "Januari 18, 2022",
        image: BudidayaPadiDenganTeknologiDrone, // Ganti dengan path gambar yang sesuai
        content: [
            {
                type: "paragraph",
                text: "Teknologi drone dalam pertanian semakin populer, terutama untuk meningkatkan efisiensi dan produktivitas dalam budidaya padi. Penggunaan drone memungkinkan petani untuk memantau kondisi tanaman secara real-time, serta mengoptimalkan penggunaan air, pupuk, dan pestisida. Artikel ini akan membahas bagaimana drone dapat diterapkan dalam budidaya padi, serta manfaat yang dapat diperoleh dari penggunaannya."
            },
            {
                type: "section",
                title: "Langkah-langkah Penerapan Teknologi Drone dalam Budidaya Padi",
                content: [
                    "1. Pemantauan Lahan dengan Drone.",
                    "2. Penyemprotan Pupuk dan Pestisida Menggunakan Drone.",
                    "3. Penilaian Kesehatan Tanaman dengan Pencitraan Multispektral.",
                    "4. Pemantauan Irigasi dengan Drone.",
                    "5. Pemetaan Lahan dengan Drone."
                ]
            },
            {
                type: "section",
                title: "Manfaat Penggunaan Drone dalam Budidaya Padi",
                content: [
                    {
                        title: "1. Meningkatkan Efisiensi Kerja",
                        content: "Dengan penggunaan drone, proses pemantauan dan pengelolaan lahan menjadi lebih cepat dan efisien. Drone dapat menggantikan tenaga manusia dalam memeriksa lahan secara manual, sehingga petani dapat menghemat waktu dan tenaga."
                    },
                    {
                        title: "2. Presisi dalam Pengelolaan Sumber Daya",
                        content: "Penggunaan drone memungkinkan petani untuk menerapkan pupuk, pestisida, dan air hanya pada area yang membutuhkan, sehingga mengurangi pemborosan dan meningkatkan efisiensi sumber daya."
                    },
                    {
                        title: "3. Deteksi Dini Masalah Tanaman",
                        content: "Drone dilengkapi dengan teknologi pencitraan canggih yang memungkinkan deteksi dini masalah seperti penyakit, hama, atau kekurangan air. Dengan mendeteksi masalah lebih awal, petani dapat mengambil tindakan cepat untuk mencegah kerusakan lebih lanjut."
                    },
                    {
                        title: "4. Mengurangi Dampak Lingkungan",
                        content: "Dengan penggunaan drone untuk penyemprotan yang lebih presisi, penggunaan bahan kimia dapat dikurangi, sehingga dampaknya terhadap lingkungan menjadi lebih kecil."
                    },
                    {
                        title: "5. Mengoptimalkan Penggunaan Lahan",
                        content: "Drone dapat membantu petani dalam merencanakan tata letak lahan dengan lebih baik. Dengan data pemetaan yang akurat, petani dapat mengatur area yang lebih produktif, meminimalkan kerugian akibat erosi atau kurangnya kesuburan tanah."
                    }
                ]
            },
            {
                type: "section",
                title: "Tantangan Penggunaan Drone dalam Budidaya Padi",
                content: [
                    {
                        title: "1. Biaya Awal yang Tinggi",
                        content: "Investasi awal untuk teknologi drone dan pelatihan penggunaannya bisa sangat tinggi."
                    },
                    {
                        title: "2. Keterampilan Teknologi yang Diperlukan",
                        content: "Petani perlu memiliki keterampilan teknologi untuk mengoperasikan drone dan menganalisis data yang dihasilkan."
                    },
                    {
                        title: "3. Keterbatasan dalam Cuaca Ekstrem",
                        content: "Penggunaan drone dapat terhambat oleh kondisi cuaca yang buruk, seperti hujan lebat atau angin kencang."
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        category: "ARTIKEL BUDIDAYA TANI",
        title: "Budidaya Padi dengan Teknik Tanam Tumpang Sari",
        author: "pustaka.setjen.pertanian",
        date: "Januari 18, 2022",
        image: BudidayaPadiDenganTeknikTanamTumpangSari, // Ganti dengan path gambar yang sesuai
        content: [
            {
                type: "paragraph",
                text: "Teknik tanam tumpang sari adalah metode bertani yang menggabungkan dua atau lebih jenis tanaman dalam satu lahan yang sama pada waktu yang bersamaan. Dalam konteks padi, teknik ini dapat digunakan untuk menanam padi bersama dengan tanaman lain, seperti jagung, kedelai, atau sayuran, untuk meningkatkan produktivitas lahan dan keuntungan petani. Teknik ini tidak hanya memanfaatkan ruang dengan lebih efisien, tetapi juga dapat memberikan manfaat lingkungan yang besar. Artikel ini akan membahas cara-cara penerapan teknik tanam tumpang sari dalam budidaya padi serta manfaatnya bagi petani."
            },
            {
                type: "section",
                title: "Langkah-langkah Penerapan Teknik Tanam Tumpang Sari dengan Padi",
                content: [
                    "1. Pemilihan Tanaman Tumpangsari yang Tepat",
                    "2. Persiapan Lahan yang Tepat",
                    "3. Penanaman Secara Bersamaan",
                    "4. Pengelolaan Air yang Baik",
                    "5. Pemupukan yang Efisien"
                ]
            },
            {
                type: "section",
                title: "Manfaat Teknik Tanam Tumpang Sari dalam Budidaya Padi",
                content: [
                    {
                        title: "1. Mengoptimalkan Penggunaan Lahan",
                        content: "Dengan menggabungkan beberapa jenis tanaman, lahan dapat dimanfaatkan secara lebih efisien."
                    },
                    {
                        title: "2. Meningkatkan Pendapatan Petani",
                        content: "Diversifikasi tanaman dapat meningkatkan hasil dan pendapatan petani."
                    },
                    {
                        title: "3. Meningkatkan Keanekaragaman Tanaman",
                        content: "Teknik ini mendukung keanekaragaman hayati dan keberlanjutan ekosistem."
                    },
                    {
                        title: "4. Mengurangi Risiko Erosi Tanah",
                        content: "Tanaman yang berbeda dapat membantu menjaga struktur tanah dan mencegah erosi."
                    },
                    {
                        title: "5. Memperbaiki Kesehatan Tanah",
                        content: "Penggunaan berbagai jenis tanaman dapat meningkatkan kesuburan tanah."
                    }
                ]
            },
            {
                type: "section",
                title: "Tantangan Teknik Tanam Tumpang Sari",
                content: [
                    {
                        title: "1. Pengelolaan yang Lebih Kompleks",
                        content: "Menanam dua jenis tanaman yang berbeda dalam satu lahan membutuhkan keterampilan pengelolaan yang lebih kompleks."
                    },
                    {
                        title: "2. Potensi Kompetisi Sumber Daya",
                        content: "Tanaman padi dan tanaman tumpang sari mungkin memiliki persaingan dalam hal cahaya, air, dan nutrisi."
                    },
                    {
                        title: "3. Penyakit dan Hama yang Beragam",
                        content: "Menggabungkan beberapa jenis tanaman dapat meningkatkan risiko serangan hama atau penyakit."
                    }
                ]
            }
        ]
    },
  ];

  const cultivationData = articleData.find((item) => item.id === parseInt(id));

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Baca artikel: ${cultivationData.title}`;

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
        <h1 className="text-3xl font-bold">{cultivationData.category}</h1>
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
            <h1 className="text-3xl font-bold mb-4">{cultivationData.title}</h1>
            <div className="text-gray-600 mb-6">
              <p>
                {cultivationData.author} / {cultivationData.date}
              </p>
            </div>

            <div className="relative mb-8">
              <img
                src={cultivationData.image}
                alt={cultivationData.title}
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
            {cultivationData.content.map((section, index) => (
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
