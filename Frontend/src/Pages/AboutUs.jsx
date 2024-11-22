import { HomeImage, UsImage, OurFocus } from '../assets/image';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                <img 
                    src={HomeImage} 
                    alt="Hero Background" 
                    className="w-full h-full object-cover object-center animate-kenburns"
                />
                <div className="absolute top-1/3 right-32 bg-[#1E1E1E] bg-opacity-50 p-8 rounded-lg backdrop-blur-sm transform transition-all duration-700 hover:scale-105">
                    <h1 className="text-white text-center md:text-left">
                        <span className="text-xl md:text-2xl font-normal">Tentang Kami</span> <br />
                        <span className="text-3xl md:text-4xl font-bold">Profil Petani GO</span>
                    </h1>
                </div>
            </section>

            {/* Tentang Kami Section */}
            <section className="p-4 md:p-6 lg:p-8 bg-[#114232] text-white">
                <div className="flex flex-col md:flex-row items-center md:space-x-8 max-w-6xl mx-auto space-y-6 md:space-y-0">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img 
                            src={UsImage} 
                            alt="Farmer in a field" 
                            className="rounded-full w-3/4 max-w-[350px] min-w-[200px] object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Tentang Kami</h2>
                        <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                            Platform edukasi yang berdedikasi untuk menciptakan
                            ruang belajar dan berbagi pengetahuan di dunia pertanian.
                            Melalui pendekatan yang modern dan interaktif, kami hadir
                            sebagai mitra yang andal bagi siapa saja yang ingin
                            berkembang di sektor pertanian. Kami berkomitmen untuk
                            menyediakan informasi dan wawasan yang bermanfaat,
                            sehingga setiap individu dapat berkontribusi dalam
                            membangun masa depan pertanian yang lebih baik
                            dan berkelanjutan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Fokus Kami Section */}
            <section className="relative py-12 md:py-16 lg:py-20 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(${OurFocus})` }}>
                <div className="absolute inset-0 md:w-1/2" style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.5) 100%)'
                }}></div>
                <div className="relative w-full px-4 md:px-0">
                    <div className="w-full md:w-[45%] md:ml-4 lg:ml-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#114232] text-center md:text-left">
                            Fokus Kami
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-[#114232] text-center md:text-left">
                            Platform edukasi yang berdedikasi untuk menciptakan
                            ruang belajar dan berbagi pengetahuan di dunia pertanian.
                            Melalui pendekatan yang modern dan interaktif, kami hadir
                            sebagai mitra yang andal bagi siapa saja yang ingin
                            berkembang di sektor pertanian. Kami berkomitmen untuk
                            menyediakan informasi dan wawasan yang bermanfaat,
                            sehingga setiap individu dapat berkontribusi dalam
                            membangun masa depan pertanian yang lebih baik
                            dan berkelanjutan.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;