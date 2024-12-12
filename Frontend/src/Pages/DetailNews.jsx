import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { RiDownloadLine, RiWhatsappLine, RiFacebookBoxLine, RiTwitterXLine } from 'react-icons/ri';
import { Berita1, Berita2, Berita3, Berita4, Berita5, Berita6, Berita7, Berita8, Berita9, GambarBerita, WatermarkLong } from '../assets/image';

const DetailNews = () => {
    const { id } = useParams();

    const newsData = [
        {
            id: 1,
            category: "BERITA",
            title: "Panas Ekstrem Terus Berlanjut, Krisis Air Mengancam Separuh Hasil Pertanian di Dunia",
            author: "Aris Kurniawan",
            date: "Jumat, 25 Oktober 2024",
            image: Berita1,
            content: [
                { type: "paragraph", text: "SIDNEY - Jika manusia tidak bertindak lebih berani dan segera, siklus air yang semakin tidak seimbang akan mendatangkan malapetaka pada perekonomian dan masyarakat di seluruh dunia ." },
                { type: "paragraph", text: "Menurut laporan bertajuk, Ekonomi Air: Menilai Siklus Hidrologi sebagai Kebaikan Bersama Global, krisis air mengancam lebih dari separuh produksi pangan dunia pada tahun 2050, lapor Xinhua. " },
                { type: "paragraph", text: "Krisis ini juga mengancam negara-negara di seluruh dunia dengan kerugian rata-rata 8 persen PDB pada tahun 2050, dengan kerugian sebesar 15 persen di negara-negara berpendapatan rendah dan dampak ekonomi yang lebih besar setelahnya, menurut laporan Komisi Global Ekonomi Air." },
                { type: "paragraph", text: "Laporan ini menekankan bahwa kelemahan ekonomi, kerusakan penggunaan lahan, dan kesalahan pengelolaan sumber daya air yang tidak efisien telah memperburuk krisis iklim, sehingga menyebabkan siklus air global berada di bawah tekanan yang belum pernah terjadi sebelumnya. " },
                { type: "paragraph", text: "Hampir 3 miliar orang dan lebih dari separuh produksi pangan dunia berada di wilayah yang mengalami kekeringan, atau tren ketersediaan air yang tidak stabil. Selain itu, beberapa kota juga tenggelam karena hilangnya air bawah tanah, menurut laporan tersebut. " },
                { type: "paragraph", text: "“Saat ini, separuh populasi dunia menghadapi kelangkaan air. Ketika sumber daya penting ini semakin langka, ketahanan pangan dan pembangunan manusia berada dalam risiko – dan kami membiarkan hal ini terjadi,” kata Johan Rockstroem, direktur Potsdam Institute for Climate Impact Penelitian dan a dari empat ketua bersama Komisi. " },
                { type: "paragraph", text: "“Untuk pertama kalinya dalam sejarah manusia, kita telah membuat siklus air global menjadi tidak seimbang. Curah hujan, sumber utama dari semua air tawar, tidak dapat lagi diandalkan karena perubahan iklim dan penggunaan lahan yang disebabkan oleh manusia, sehingga mempengaruhi fondasinya. kesejahteraan manusia serta perekonomian global,” katanya." },
            ]
        },
        {
            id: 2,
            category: "BERITA",
            title: "Ekspor Pertanian Capai Rp552,4 Triliun Menjadi Andalan Perekonomian Nasional",
            author: "Aris Kurniawan",
            date: "Jumat, 25 Oktober 2024",
            image: Berita2,
            content: [
                { type: "paragraph", text: "JAKARTA - Kinerja sektor pertanian Indonesia terus menunjukkan performa yang gemilang. Berdasarkan data Badan Pusat Statistik (BPS), ekspor pertanian pada 2023 berhasil mencapai Rp552,4 triliun. Hal ini menjadi bukti kuatnya potensi ekspor produk pertanian Indonesia di pasar internasional. Capaian ini mencakup produk pertanian segar maupun olahan yang terus diminati di pasar global.  " },
                { type: "paragraph", text: "Menanggapi nilai impor pertanian yang mencapai USD 7,58 miliar pada Agustus 2024, Kepala Biro Humas dan Informasi Publik Kementan Moch. Arief Cahyono menjelaskan,sebagian besar impor ini didominasi oleh komoditas yang tumbuh optimal di negara sub tropis seperti biji gandum atau yang masih belum mencukupi produksinya seperti kedelai. Gandum sebagai bahan baku utama roti dan mi, serta kedelai yang digunakan untuk produksi tempe dan tahu. " },
                { type: "paragraph", text: "Arief menegaskan bahwa hal ini tidak menurunkan kinerja sektor pertanian secara keseluruhan. “Angka impor USD 7,58 miliar ini, jika dirupiahkan, hanya setara dengan sekitar Rp117,4 triliun, jauh lebih kecil dibandingkan ekspor pertanian kita yang mencapai Rp552,4 triliun pada tahun 2023. Hal ini menunjukkan bahwa meskipun ada impor untuk komoditas tertentu, sektor pertanian kita masih mampu menghasilkan surplus dari ekspor produk unggulan, seperti kopi, kakao, rempah-rempah, serta minyak kelapa sawit,” tuturnya. " },
                { type: "paragraph", text: "Menurut Arief, pertanian di bawah komando Menteri Pertanian Andi Amran Sulaiman tidak hanya fokus pada peningkatan produksi pangan, tetapi juga konsisten mendorong hilirisasi produk pertanian agar dapat meningkatkan nilai tambah dari komoditas yang diekspor. Dengan fokus pada produk olahan yang memiliki nilai jual lebih tinggi, ekspor pertanian diharapkan terus tumbuh dan memperkuat posisi Indonesia di pasar global. " },
                { type: "paragraph", text: "“Ke depan Pak Mentan ingin kita tidak hanya mengekspor bahan mentah, tetapi juga memperkuat produk olahan yang memiliki nilai tambah lebih tinggi. Langkah ini penting untuk meningkatkan daya saing produk pertanian Indonesia di pasar internasional dan mengurangi ketergantungan pada impor,” kata Arief. " },
                { type: "paragraph", text: "Indonesia memiliki berbagai komoditas unggulan yang masih dapat terus ditingkatkan value nya agar berkontribusi lebih tinggi lagi bagi perekonomian nasional, misalnya minyak sawit yang menjadi nomor satu di dunia yang potensinya dapat ditingkatkan hingga 70 juta ton atau Rp959,8 trilliun pada tahun 2029. Kelapa nomor dua di dunia dengan potensi 3,75 juta ton atau Rp60 trilliun, begitupun untuk komoditas ekspor lainnya. " },
                { type: "paragraph", text: "Dengan pendekatan yang komprehensif antara hulu dan hilir, Kementerian Pertanian optimis bahwa sektor pertanian Indonesia akan terus berkontribusi besar terhadap perekonomian nasional, baik melalui peningkatan ekspor maupun pengembangan industri pangan dalam negeri yang lebih kuat. " },
                { type: "paragraph", text: "“Ekspor pertanian tetap menjadi andalan dan terus menunjukkan tren yang positif. Kami akan terus memastikan agar sektor ini berkembang secara berkelanjutan dan mampu bersaing di kancah global,” ucapnya. " },
                { type: "paragraph", text: "Sementara itu, Plt. Kepala BPS Amalia Adininggar Widyasanti mengungkapkan, secara kumulatif nilai ekspor CPO dan turunannya adalah US$1,38 miliar atau setara Rp21,4 triliun (kurs Rp 15.515) pada September 2024. Di sisi lain, Amalia mengatakan dari sisi harga CPO dan turunannya sendiri di tingkat global pada September 2024 mengalami peningkatan menjadi US$932,05 per ton dari bulan sebelumnya sebesar US$898,90 per ton." },
                { type: "paragraph", text: "Di tengah neraca perdagangan Indonesia yang tercatat surplus sebesar USD3,26 miliar pada September 2024, Kepala Badan Kebijakan Fiskal (BKF) Kementerian Keuangan Febrio Kacaribu mengatakan, konsistensi tren surplus tersebut membuktikan daya tahan ekonomi Indonesia di tengah stagnasi ekonomi global." },
                { type: "paragraph", text: "Capaian tersebut memperpanjang tren surplus neraca perdagangan Indonesia menjadi 53 bulan secara berturut-turut sejak Mei 2020. Hingga September 2024, akumulasi surplus tercatat mencapai USD21,98 miliar. " },
                { type: "paragraph", text: "“Hal tersebut juga mencerminkan ekonomi kita yang berorientasi pada penciptaan nilai tambah menunjukkan hasil positif. Tentunya hal ini menjadi modal yang baik untuk masa yang akan datang,” kata Kepala BKF dalam keterangan tertulisnya pada Selasa (15/10/2024). " },
                { type: "paragraph", text: "Lebih lanjut, Kepala BKF menyampaikan aktivitas ekspor Indonesia pada September 2024 masih tercatat sebesar USD22,08 miliar di tengah tekanan Purchasing Managers’ Index (PMI) manufaktur global yang masih terkontraksi 48,8 pada September 2024." },
                { type: "paragraph", text: "Secara sektoral, pertumbuhan terbesar pada sektor pertanian sebesar 38,76 persen (yoy), diikuti sektor pertambangan dan lainnya sebesar 9,03 persen (yoy), dan juga sektor industri pengolahan sebesar 7,11 persen (yoy). " },
                { type: "paragraph", text: "Tiongkok, Amerika Serikat, dan Jepang tetap menjadi negara mitra utama dengan kontribusi ketiganya sebesar 43,57 persen terhadap total ekspor nonmigas Indonesia. Secara kumulatif, total ekspor pada periode Januari hingga September 2024 tercatat mencapai USD192,85 miliar." },
            ]
        },
        {
            id: 3,
            category: "BERITA",
            title: "Mentan Amran Tegaskan Tidak Ada Toleransi untuk Korupsi di Kementerian Pertanian",
            author: "Aris Kurniawan",
            date: "Jumat, 25 Oktober 2024",
            image: Berita3,
            content: [
                { type: "paragraph", text: "JAKARTA - Menteri Pertanian (Mentan) Andi Amran Sulaiman berkomitmen penuh untuk memberantas praktik korupsi, nepotisme, dan kolusi di lingkungan Kementerian Pertanian (Kementan). Penandatanganan pakta integritas oleh pejabat Eselon I di lingkup Kementan menjadi wujud nyata komitmen seluruh jajaran Kementan dalam menjaga integritas dan transparansi sebagai dasar pelaksanaan tugas. " },
                { type: "paragraph", text: "Selain penandatanganan pakta integritas, Kementan juga menyelenggarakan penandatanganan Komitmen Penerapan Core Values ASN BerAKHLAK dan Employer Branding 'Bangga Melayani Bangsa'. Kegiatan ini dihadiri oleh mitra pertanian, termasuk pengusaha, sebagai wujud dukungan dalam mengembalikan kepercayaan publik terhadap institusi dan menciptakan tata kelola yang bersih di sektor pertanian. " },
                { type: "paragraph", text: "Mentan Amran menggarisbawahi bahwa pemberantasan korupsi bukan sekadar jargon, tetapi langkah konkret untuk memastikan akuntabilitas di Kementan. " },
                { type: "paragraph", text: "“Kita tidak boleh bermain-main. Sesuai arahan Bapak Presiden, kita harus melakukan pencegahan dan menghentikan praktik korupsi, nepotisme, dan kolusi. Itu semua tidak boleh terjadi,” ujarnya saat memberikan arahan di Kantor Pusat Kementan, Jakarta, Selasa (29/10/2024) " },
                { type: "paragraph", text: "Menurutnya, pakta integritas bukan hanya simbol, tetapi janji seluruh pejabat dan pegawai Kementan untuk bekerja dengan jujur, transparan, dan berorientasi pada pelayanan publik. Mentan Amran juga menekankan pentingnya mengambil tindakan tegas terhadap segala bentuk penyalahgunaan wewenang dan praktik percaloan dalam proyek atau pengadaan. " },
                { type: "paragraph", text: "“Tidak boleh ada yang menggoda Kementan, dan Kementan juga tidak boleh tergoda untuk bermain-main. Kami berharap Kementan dapat mencapai swasembada pangan secara terhormat,” ujarnya menegaskan. " },
                { type: "paragraph", text: "Mentan Amran juga memberikan peringatan kepada para pengusaha, “Bagi pengusaha yang membawa calo, akan saya blacklist,” katanya. " },
                { type: "paragraph", text: "Ia menegaskan bahwa integritas adalah kunci dalam mencapai ketahanan pangan nasional, dan aparatur yang berintegritas tinggi akan memberikan kontribusi lebih besar terhadap pencapaian visi Kementan. " },
                { type: "paragraph", text: "“Saya menginginkan komitmen penuh dari seluruh jajaran Kementan untuk bekerja secara profesional dan menghindari praktik korupsi. Harta yang berlimpah tidak ada artinya jika kehormatan kita ternoda. Kita harus bekerja sama untuk membangun reputasi yang baik bagi anak cucu kita di masa depan,” tutur Mentan Amran. " },
                { type: "paragraph", text: "Dengan pakta integritas ini, Kementan bertekad untuk terus meningkatkan kepercayaan masyarakat melalui pelayanan publik yang bersih dan berintegritas, serta membangun tata kelola yang lebih transparan di masa depan. " },
                { type: "paragraph", text: "Sebelumnya, Mentan Amran telah mengambil langkah tegas dengan mencopot seorang pejabat Eselon II di Kementan yang terbukti terlibat dalam praktik korupsi. Langkah ini diambil sebagai upaya menegakkan integritas dan transparansi di sektor pertanian, sejalan dengan arahan Presiden Prabowo Subianto untuk memberantas korupsi di seluruh jajaran pemerintahan." },
            ]
        },
        {
            id: 4,
            category: "BERITA",
            title: "Asuransi Pertanian Rp6 Juta Per Hektare, Solusi Ahmad HM Ali untuk Petani Sulteng",
            author: "Aris Kurniawan",
            date: "Jumat, 25 Oktober 2024",
            image: Berita4,
            content: [
                { type: "paragraph", text: "BANGGAI - Calon Gubernur (Cagub) Sulawesi Tengah (Sulteng) nomor urut 1, Ahmad HM Ali melanjutkan kampanye terbatasnya di Desa Serese, Kecamatan Masama, Kabupaten Banggai, Jumat (18/10/224) malam. Dalam kampanye tersebut, ia menyoroti pentingnya perhatian serius dari pemerintah terhadap nasib para petani di provinsi itu. " },
                { type: "paragraph", text: "Ahmad Ali mengatakan, sektor pertanian di Sulteng harus mendapatkan dukungan maksimal, terutama dalam akses terhadap pupuk dan obat-obatan pertanian yang sering kali menjadi kendala utama bagi petani. " },
                { type: "paragraph", text: "“Insyaallah, jika saya terpilih, saya akan memastikan para petani di Sulteng tidak menghadapi kesulitan dalam memperoleh pupuk dan obat-obatan pertanian saat musim tanam,” tegasnya di hadapan ratusan warga Desa Serese yang hadir. " },
                { type: "paragraph", text: "Sebagai politisi dari Partai NasDem, Ahmad Ali memiliki visi besar untuk menjadikan Sulteng sebagai salah satu penyokong utama kebutuhan pangan nasional, terutama bagi Ibu Kota Nusantara (IKN) yang baru di Kalimantan Timur. " },
                { type: "paragraph", text: "Mantan Anggota DPR RI dua periode tersebut menyampaikan pentingnya Sulteng berperan sebagai pemasok utama bahan pangan dan pemain utama dalam sektor logistik untuk mendukung pembangunan dan keberlanjutan IKN. " },
                { type: "paragraph", text: "Untuk mewujudkan hal tersebut, Ahmad Ali memprioritaskan distribusi benih unggul kepada para petani di Sulteng. Tidak hanya itu, ia juga menegaskan, para petani harus mendapatkan perlindungan dari negara melalui program asuransi pertanian. " },
                { type: "paragraph", text: "“Setiap jengkal tanah petani harus diasuransikan oleh pemerintah,” ungkapnya. " },
                { type: "paragraph", text: "Ahmad Ali menjelaskan, melalui program asuransi ini, para petani tidak akan dirugikan jika terjadi gagal panen. " },
                { type: "paragraph", text: "“Per hektare lahan petani akan kami asuransikan sebesar Rp6 juta. Petani yang gagal panen dipastikan tidak akan rugi,” ujarnya. " },
                { type: "paragraph", text: "Program tersebut diharapkan dapat memberikan ketenangan dan jaminan bagi para petani dalam menghadapi risiko-risiko yang sering kali tidak terduga, seperti bencana alam atau gagal panen akibat perubahan cuaca." },
                { type: "paragraph", text: "Ahmad Ali menambahkan, dengan adanya asuransi senilai Rp6 juta per hektare, negara akan hadir untuk melindungi petani, sehingga mereka merasa didukung dan mampu bekerja lebih produktif.  " },
                { type: "paragraph", text: "“Petani harus semakin berdaya di masa depan. Saat ini, mereka belum cukup kuat karena masih menghadapi kesulitan dalam mendapatkan pupuk dan kebutuhan lainnya saat musim tanam,” ujarnya. " },
                { type: "paragraph", text: "Menurutnya, dukungan pemerintah terhadap petani adalah kunci untuk memperkuat sektor pertanian di Sulteng dan menjadikan daerah ini sebagai salah satu lumbung pangan nasional. " },
                { type: "paragraph", text: "“Dengan dukungan penuh dari pemerintah, saya yakin petani di Sulteng akan semakin berjaya, dan kontribusi besar dalam memenuhi kebutuhan pangan nasional, terutama di IKN, bisa terwujud,” katanya. " },
                { type: "paragraph", text: "Ahmad Ali juga mengungkapkan bahwa bersama pasangannya, Abdul Karim Aljufri (AKA), ia berkomitmen untuk menghadirkan pemerintahan yang pro-petani dan pro-kesejahteraan rakyat. " },
                { type: "paragraph", text: "Mereka berdua didukung oleh koalisi 10 partai politik dalam Pemilihan Kepala Daerah (Pilkada) Sulteng tahun ini. Dukungan dari pelbagai partai itu memperlihatkan betapa kuatnya kepercayaan terhadap visi dan misi yang mereka usung.  " },
                { type: "paragraph", text: "Menutup kampanyenya, Ahmad Ali mengajak masyarakat Desa Serese untuk berpartisipasi aktif dalam Pilkada pada 27 November 2024 mendatang. " },
                { type: "paragraph", text: "Ia berharap, masyarakat dapat memilih pemimpin yang benar-benar peduli terhadap nasib rakyat kecil, terutama petani yang menjadi tulang punggung perekonomian daerah. " },
                { type: "paragraph", text: "“Kami siap menghadirkan perubahan nyata untuk Sulteng yang lebih maju dan sejahtera,” ucapnya. " },
                { type: "paragraph", text: "Dengan program yang jelas dan konkret untuk memajukan sektor pertanian serta dukungan luas dari partai politik, Ahmad Ali optimistis dapat membawa Sulteng menuju era kemakmuran yang lebih baik, di mana para petani akan menjadi pilar utama dalam pembangunan daerah dan nasional." },
                { type: "paragraph", text: "Salah satu warga, Burhan Rauf mengaku, program yang ditawarkan Ahmad Ali sangat didukung petani di Desa Serese. Oleh karena itu, ia berharap, program tersebut tidak hanya sekadar janji. " },
                { type: "paragraph", text: "“Biasanya kan kalau kampanye calon-calon itu menebar janji. Semoga janji Ahmad Ali itu benar-benar diwujudkan,” harap Burhan. " },
                { type: "paragraph", text: "Warga lainnya, Rahmi menilai, program yang ditawarkan Ahmad Ali sangat dibutuhkan warga. " },
                { type: "paragraph", text: "“Mana ada pemerintah selama ini mau tanggung kalau kita gagal panen. Saya senang sekali dengar program Ahmad Ali. Jelas saya dukung beliau biar petani betul-betul diperhatikan,” tutupnya." },
            ]
        },
        {
            id: 5,
            category: "BERITA",
            title: "Krisis Pangan Dunia Menghadang, Perlu Pembaruan Teknologi Pertanian",
            author: "Aris Kurniawan",
            date: "Jumat, 25 Oktober 2024",
            image: Berita5,
            content: [
                { type: "paragraph", text: "JEMBER - Krisis pangan di masa depan bakal memengaruhi kualitas penduduk dunia. Sejumlah antisipasi pencegahan dilakukan termasuk di bidang teknologi pertanian . " },
                { type: "paragraph", text: "“Dunia saat ini mengalami permasalahan pangan yang miris. Terdapat beberapa data yang diperoleh, Indonesia saat ini menjadi salah satu negara yang mengalami permasalahan pangan,” kata Kepala Badan Penyuluhan dan Pengembangan Sumber Daya Manusia Pertanian Kementan RI (BPPSDMP) Dr. Idha Widhi Arsanti, SP., MP., sebagai narasumber International Conferences on Agriculture and Life Sciences (ICALS) 2024 ke-6 di Gedung Auditorium UNEJ, Selasa 30 Juli 2024. " },
                { type: "paragraph", text: "Sebanyak 59 negara mengalami tingkat kelaparan serius dan terdapat 900 juta penduduk di dunia mengalami kelaparan. Di Indonesia, sebut Idha, tecatat 8,5 persen penduduk Indonesia kurang gizi dan lebih dari 30 persen anak mengalami stunting. " },
                { type: "paragraph", text: "Kondisi tersebut, menurutnya, memerlukan sebuah kebijakan tentang peningkatan produksi pangan. Bentuk kebijakan tadi terutama dalam upaya antisipasi darurat pangan untuk mengatasi beberapa masalah pangan yang terjadi di dunia saat ini. " },
                { type: "paragraph", text: "Jika tidak diantisipasi secara dini, maka permasalahan tadi akan berdampak pada konflik sosial dan politik. “Krisis pangan ini merupakan kasus yang sangat penting dan serius. Tidak hanya itu, krisis pangan juga akan berdampak kepada permasalahan sosial dan politik. Kasus ini tidak hanya terjadi di Indonesia, namun telah terjadi juga di luar negeri seperti Amerika,” kata Idha. " },
                { type: "paragraph", text: "Krisis Pangan Krisis pasokan pangan akan menyebabkan warga pengalami kelaparan. Dampak lanjutannya menimbulkan kerusuhan, serta harga pangan akan menjadi lebih mahal yang berdampak juga pada perekonomian bangsa. " },
                { type: "paragraph", text: "Oleh karena itu Kementerian Pertanian RI merancang program strategis untuk meminimalisasi kasus yang terjadi. Program tersebut di antaranya optimalisasi lahan rawa 400 ribu hektare, pompanisasi sawah tadah hujan 1 juta hektare, transformasi pertanian tradisional menuju modern, pengembangan pertanian modern, peningkatan kompetensi SDM pertanian, penguatan pendampingan penyuluh pertanian serta regenerasi petani. " },
                { type: "paragraph", text: "Program pemerintah tadi memerlukan dukungan penuh dari para akademisi. Bentuknya berupa komitmen kerja sama dengan Fakultas Pertanian dari berbagai universitas di Indonesia untuk menciptakan ide inovatif. " },
                { type: "paragraph", text: "“Dengan adanya konferensi dalam forum seperti ini pasti ada banyak update secara keilmuan scientific, dalam bidang ilmu yang relatif linier. Sehingga kolaborasi ini kedepan agar lebih jauh direalisasikan dalam bentuk kerja real misal dalam bentuk penelitian, produk pertanian, maupun realisasi untuk MBKM bagi adik-adik mahasiswa kita,” kata Wakil Rektor Bidang Kemahasiswaan dan Alumni Dr. Fendi Setyawan, S.H., M.H." },
                { type: "paragraph", text: "Riset bersama di bidang pertanian menjadi investasi jangka panjang bagi negara. Hal tersebut diwujudkan melalui kolaborasi antarkampus, salah satunya tergabung dalam Forum Komunikasi Perguruan Tinggi Pertanian Indonesia (FKPTPI). " },
                { type: "paragraph", text: "Chairman of FKPTPI Eastern Region Ir. Lily Ishak menjelaskan, FKPTPI sebagai forum dengan cakupan wilayah timur, yaitu Jawa Timur, Jawa Tengah bergabung dengan Sulawesi, separuh Kalimantan, Maluku, Maluku Utara, Nusa Tenggara, Bali dan Papua. Forum ini sebagai wadah untuk bisa mengomunikasikan segala hal terkait kurikulum, program pendidikan pembelajaran, riset, dan kerja sama. " },
                { type: "paragraph", text: "“Saya mengapresiasi kemajuan bidang pertanian. Kami akan melanjutkan konferensi dengan pertemuan forum Dekan dan Wakil Dekan untuk membahas bentuk signifikan kerja sama yang telah dituangkan tadi,” ujar Dekan Fakultas Pertanian Universitas Khairun ini. " },
                { type: "paragraph", text: "Konferensi bidang pertanian ini sekaligus untuk ajang pembaruan keilmuan saintifik atau ilmiah yang relatif linier. Realisasi ke program pertanian pemerintah kemudian diwujudkan dalam bentuk penelitian, produk pertanian,maupun kurikulum ajar bagi mahasiswa fakultas pertanian." },
            ]
        },
        {
            id: 6,
            category: "BERITA",
            title: "Mentan Minta Mahasiswa Ciptakan Inovasi dan Lapangan Kerja dalam Sektor Pertanian",
            author: "Aris Kurniawan",
            date: "Jumat, 25 Oktober 2024",
            image: Berita6,
            content: [
                { type: "paragraph", text: "TANGERANG - Menteri Pertanian (Mentan) Andi Amran Sulaiman mengajak mahasiswa Politeknik Enjinering Pertanian Indonesia (PEPI) untuk menjadi penggerak utama inovasi dan pencipta lapangan kerja di sektor pertanian modern. " },
                { type: "paragraph", text: "Dalam kuliah umum yang diadakan di Kampus PEPI pada Rabu, 12 Juni 2024, Mentan menekankan pentingnya peran mahasiswa sebagai ujung tombak masa depan bangsa, dengan kemampuan menciptakan teknologi baru yang dapat menjadi acuan bagi pertanian global. " },
                { type: "paragraph", text: "“Hilangkan pikiran mencari kerja, tetapi usahakan agar kita yang membuka lapangan kerja. Latih kemampuan dari sekarang, kita sebagai mahasiswa Indonesia bisa membuat sparepart Alsintan sendiri,” ujar Mentan. " },
                { type: "paragraph", text: "Amran mendorong mahasiswa untuk menghasilkan inovasi yang tidak hanya mendukung swasembada pangan nasional tetapi juga menciptakan lapangan kerja baru. " },
                { type: "paragraph", text: "Selain itu Mentan juga berharap bahwa mahasiswa, terutama yang berkecimpung di sektor pertanian, harus bekerja keras mewujudkan Indonesia sebagai lumbung pangan dunia. Hal ini bisa dicapai melalui kolaborasi dengan berbagai pihak, baik swasta maupun pemerintah, termasuk dari negara-negara maju seperti Jepang. " },
                { type: "paragraph", text: "“Kita bisa membangun kerjasama dengan Jepang dan negara-negara lain, baik swasta maupun lembaga pemerintah, untuk memperkuat sektor pertanian Indonesia. Ke depan, kita bisa memproduksi apa saja yang dibutuhkan petani,” katanya. " },
                { type: "paragraph", text: "Dalam kuliah umum tersebut, Mentan juga mengajak para pengajar di PEPI untuk memberikan tugas-tugas yang menantang bagi mahasiswa, sehingga mereka mampu menghadapi tantangan pertanian masa depan dan sejajar dengan negara-negara maju. Menurutnya, semangat juang dan ketekunan adalah kunci keberhasilan. " },
                { type: "paragraph", text: "“Tolong kasih PR yang paling susah. Jangan beri kesempatan mereka main-main. Bung Karno dulu dengan sedikit orang bisa gegerkan republik ini dan dunia karena spirit luar biasa. Semangat kita harus seperti itu, tidak pernah mengeluh dan pantang menyerah,” tegas Amran. " },
                { type: "paragraph", text: "Mentan berharap mahasiswa PEPI mampu menguasai seluruh aspek pertanian, mulai dari produksi hingga hilirisasi. Ia mengajak mahasiswa untuk terlibat langsung dalam program upaya khusus (Upsus) atau perluasan areal tanam di Merauke dan memaksimalkan program merdeka belajar. “Dengan begitu, mahasiswa PEPI ke depannya mampu menguasai berbagai bidang di sektor pertanian,” jelasnya. " },
                { type: "paragraph", text: "Dalam acara tersebut, Mentan juga mengapresiasi upaya PEPI dalam mendorong inovasi di sektor pertanian. Ia berharap lebih banyak mahasiswa terlibat dalam penelitian dan pengembangan alat mesin pertanian, sehingga Indonesia bisa menjadi contoh bagi pertanian dunia. " },
            ]
        },
        {
            id: 7,
            category: "BERITA",
            title: "Adaptasi Perubahan Iklim, Kementan Siap Tingkatkan Produktivitas Pertanian",
            author: "Aris Kurniawan",
            date: "Jumat, 25 Oktober 2024",
            image: Berita7,
            content: [
                { type: "paragraph", text: "JAKARTA - Perubahan iklim global yang terjadi saat ini menjadi tantangan tersendiri bagi sektor pertanian dalam mencapai ketahanan pangan. Sektor ini diharapkan dapat ikut berkontribusi dalam menghadapi perubahan iklim, khususnya dalam upaya menurunkan emisi Gas Rumah Kaca (GRK). " },
                { type: "paragraph", text: "Menteri Pertanian (Mentan), Andi Amran Sulaiman mengatakan dampak perubahan iklim menjadi tanggung jawab bersama. Untuk itu, Amran meminta jajarannya agar terus bersinergi dengan berbagai pihak terkait demi memitigasi dampak perubahan iklim yang begitu ekstrem, khususnya di sektor pertanian maupun perkebunan. " },
                { type: "paragraph", text: "“Kami mengimbau kepada sahabat petani seluruh Indonesia, jangan melakukan pembakaran pada penyiapan lahan perkebunan,” ujarnya, Sabtu (27/4/2024). " },
                { type: "paragraph", text: "Kepala Badan Penyuluhan dan Pengembangan SDM Pertanian (BPPSDMP), Dedi Nursyamsi pada acara Mentan Sapa Petani Penyuluh (MSPP) Volume 13, Jumat (26/04/2024) di AOR BPPSDMP mengatakan bahwa emisi GRK di bumi harus dikurangi. Emisi terbesar perubahan lahan dari hutan menjadi bukan hutan, kemudian adalah industri, pembakaran, dan selanjutnya adalah dari sektor pertanian. " },
                { type: "paragraph", text: "“Maka, kita harus mempunyai varietas yang toleran terhadap pertanian, produktivitas yang rendah, tingkat kesuburan yang rendah”, jelasnya. Karena kenaikan produktivitas menghasilkan pangan. " },
                { type: "paragraph", text: "Dedi mengimbau agar kita dapat beradaptasi dengan perubahan iklim supaya terjadi penurunan emisi atau mitigasi. “Diperlukannya komitmen dan implementasi terhadap penerapan standar untuk aksi adaptasi mendukung peningkatan produktivitas padi dan jagung,” jelasnya. " },
                { type: "paragraph", text: "Kepala Balai Pengujian Standar Instrumen Agroklimat dan Hidrologi Pertanian, Rima Purnamayani mengatakan bahwa akibat perubahan iklim global diproyeksi dalam periode 2020–2049 sebagian besar wilayah Indonesia panjang musim hujannya berkurang 10-20 hari. Bahkan di beberapa wilayah akan semakin mundur dan pendeknya musim tanam. " },
                { type: "paragraph", text: "“Saat ini posisi sektor pertanian dalam perubahan iklim adalah sebagai korban dari perubahan iklim, sebagai sumber emisi, namun berpeluang berkontribusi dalam penurunan emisi atau sekuestrasi,” paparnya. Baca Juga Mentan Amran: Fenomena Cuaca Aneh Mulai Ganggu Sektor Pertanian Dia menambahkan, selanjutnya dampak dari perubahan iklim dalam sektor pertanian yaitu peningkatan suhu global dan kekeringan semakin sering. Selain terjadi kerugian ekonomi dan peningkatan musim kemarau juga perubahan fisiologis tanaman padi yang meningkatkan potensi penurunan produksi tanaman padi." },
            ]
        },
        {
            id: 8,
            category: "BERITA",
            title: "Respons Melody Laksani Diusulkan Jadi Duta Petani Milenial: Aku Sarjana Pertanian",
            author: "Aris Kurniawan",
            date: "Jumat, 25 Oktober 2024",
            image: Berita8,
            content: [
                { type: "paragraph", text: "JAKARTA - Melody Laksani diusulkan menjadi Duta Petani Milenial usai kerap membagikan kegiatannya di lahan pertanian lewat Instagram hingga viral di media sosial. " },
                { type: "paragraph", text: "Menanggapi usulan netizen untuk menjadi Duta Petani Milenial , Melody pun mengaku tidak keberatan. Terlebih, ia memang memiliki latar belakang akan hal tersebut. " },
                { type: "paragraph", text: "Diketahui bahwa mantan anggota JKT48 ini merupakan lulusan Universitas Padjadjaran jurusan Agroteknologi. " },
                { type: "paragraph", text: "“Sebenernya nggak apa-apa juga, karena menurut aku, aku kan sarjana pertanian juga ya. Jadi ya nggak apa-apa kalau misalnya orang memanggil aku duta petani atau Melodi petani, it's okay,” kata Melody dikutip dari kanal YouTube Populer Seleb, Minggu (24/11/2024)." },
            ]
        },
        {
            id: 9,
            category: "BERITA",
            title: "Dinobatkan sebagai Bapak Petani Milenial, Wamentan Yakin Sektor Pertanian Menjanjikan",
            author: "Aris Kurniawan",
            date: "Jumat, 25 Oktober 2024",
            image: Berita9,
            content: [
                { type: "paragraph", text: "JAKARTA - Wakil Menteri Pertanian (Wamentan) Sudaryono dinobatkan sebagai Bapak Petani Milenial . Julukan tersebut lantaran semangat Sudaryono dalam meningkatkan regenerasi petani muda. " },
                { type: "paragraph", text: "Gelar ini disepakati oleh ratusan petani muda dalam Konsolidasi Nasional Petani Milenial yang digelar di Kota Semarang, Jawa Tengah. " },
                { type: "paragraph", text: "Sudaryono menyampaikan, dirinya selalu meyakinkan generasi muda bahwa pertanian adalah sektor yang menjanjikan. Sudaryono mengaku optimistis dapat menumbuhkan kembali semangat mengelola sektor pertanian kepada generasi mendatang. “Bagi saya, kami punya perhatian terhadap itu. Kita punya bonus demografi, kita punya anak muda,” ujar Sudaryono, Sabtu (16/11/2024). " },
                { type: "paragraph", text: "Menurut Sudaryono, sektor pertanian merupakan sektor yang mudah dikelola. Sektor ini juga memiliki fokus-fokus bidang yang luas, yang dapat diisi oleh banyak tenaga generasi muda Indonesia. " },
                { type: "paragraph", text: "“Tentu saja bertani itu tidak melulu menanam padi, kedelai, dan jagung. Walaupun kita harapkan juga kalau bisa mengarah ke sana untuk swasembada pangan itu bisa lebih baik. Petani Milenial itu bisa juga ke holtikultura, buah-buahan, cabai-cabaian, terong, dan sayur,” jelasnya. " },
                { type: "paragraph", text: "Sudaryono melanjutkan sektor pertanian juga memilki dua jenis kegiatan yang bisa ditekuni, yakni on-farm dan off-farm. On-farm merupakan kegiatan yang dilakukan di lahan pertanian, seperti usaha tani tanaman pangan, hortikultura, usaha ternak, usaha ikan, dan usaha perkebunan. " },
                { type: "paragraph", text: "Sementara, off-farm adalah kegiatan yang dilakukan di luar lahan pertanian, seperti pemrosesan dan pengemasan tanaman pangan dan ternak. “Sektor on-farm itu di lahan, off-farm itu pengolahannya, packaging-nya, ekspor dan lain-lain. Itu juga menjanjikan,” katanya.  " },
                { type: "paragraph", text: "Sudaryono mengungkapkan sejauh ini Kementan juga telah mengambil peran untuk mengedukasi dan membina petani muda agar tidak hanya berkutat bertani di lahan, tetapi bisa mencoba menggeluti sektor pertanian di luar lahan." },
                { type: "paragraph", text: "“Sudah kita bina, ada yang ekspor pengolahan gula aren, ekspor kelapa, itu program pertanian di sisi off-farm. Kemudian dari sisi on-farm ada yang budidaya jahe, pala, lada. Jadi yang on-farmmaupun off-farm itu menjanjikan,” paparnya. " },
                { type: "paragraph", text: "Selain membina petani on-farm, Kementan juga berkomitmen membina pelaku pertanian off-farm agar dapat meningkatkan skala bisnisnya. ADVERTISEMENT " },
                { type: "paragraph", text: "“Saya lagi minta kepada Kepala Badan Pendidikan Kementan untuk memonitor. Harus ada dua indikator prestasinya yaitu jumlah petani mudanya bertambah, plus existing yang sudah ada secara kalkulasi perekonomian, bisnisnya harus naik. Omzet harus naik, laba harus naik. Kita harus bina ke sana,” pungkasnya." },
            ]
        },
    ];

    const newsItem = newsData.find(item => item.id === parseInt(id));

    const handleShare = (platform) => {
        const url = window.location.href;
        const text = `Baca Berita: ${newsItem.title}`;

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
        // Implement download functionality here if needed
    };

    return (
        <div className="bg-white text-[#114232] font-poppins min-h-screen flex flex-col justify-between">
            <div className="bg-[#114232] text-white text-center py-4">
                <h1 className="text-3xl font-bold">{newsItem.category}</h1>
            </div>

            <div className="p-8">
                <h1 className="text-2xl font-bold">{newsItem.title}</h1>
                <p className="text-sm text-gray-500">{newsItem.date} | {newsItem.author}</p>
                <div className="relative mb-8">
                    <img 
                        src={newsItem.image} 
                        alt={newsItem.title} 
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
                    {newsItem.content.map((section, index) => (
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
    );
};

export default DetailNews;