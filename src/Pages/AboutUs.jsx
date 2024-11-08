import { HomeImage, UsImage, OurFocus } from '../assets/image';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] overflow-hidden">
                <img 
                    src={HomeImage} 
                    alt="Hero Background" 
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-1/3 right-32 bg-[#1E1E1E] bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
                    <h1 className="text-white">
                        <span className="text-2xl font-normal">Tentang Kami</span> <br />
                        <span className="text-4xl font-bold">Profil Petani GO</span>
                    </h1>
                </div>
            </section>

            {/* Tentang Kami Section */}
            <section className="p-8 bg-[#114232] text-white">
                <div className="flex items-center space-x-8 max-w-6xl mx-auto">
                    <div className="w-1/2 flex justify-center">
                        <img 
                            src={UsImage} 
                            alt="Farmer in a field" 
                            className="rounded-full w-3/4 max-w-[350px] min-w-[200px] object-cover"
                        />
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
                        <p className="text-lg leading-relaxed">
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
            <section 
                className="relative py-20 min-h-[600px]"
                style={{
                    backgroundImage: `url(${OurFocus})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto px-8">
                    <div className="w-1/2 pl-0">
                        <h2 className="text-3xl font-bold mb-6 text-[#114232]">Fokus Kami</h2>
                        <p className="text-lg leading-relaxed text-[#114232]">
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