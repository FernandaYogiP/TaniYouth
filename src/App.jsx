import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Header from './Components/Header';
import News from './Pages/news';
import Forum from './Pages/Forum';
import Knowledge from './Pages/Articles/Knowledge';
import Cultivation from './Pages/Articles/Cultivation';
import Solutions from './Pages/Articles/Solutions';
import Chatbot from './Components/Chatbot';
import DetailKnowledge from './Pages/Articles/DetailKnowledge';
import DetailSolutions from './Pages/Articles/DetailSolutions';
import DetailCultivation from './Pages/Articles/DetailCultivation';
import Book from './Pages/Module/Book';
import Video from './Pages/Module/Video';
const App = () => {
    return (
        <Router>
            <div className="bg-green-900 text-white relative min-h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/articles/knowledge" element={<Knowledge />} />
                    <Route path="/articles/solutions" element={<Solutions />} />
                    <Route path="/articles/cultivation" element={<Cultivation />} />
                    <Route path="/articles/knowledge/:id" element={<DetailKnowledge />} />
                    <Route path="/articles/solutions/:id" element={<DetailSolutions />} />
                    <Route path="/articles/cultivation/:id" element={<DetailCultivation />} />
                    <Route path="/modules/edukasi-buku" element={<Book />} />
                    <Route path="/modules/edukasi-video" element={<Video />} />
                    {/* Add other routes here */}
                </Routes>
                <Footer />
                <Chatbot />
            </div>
        </Router>
    );
};

export default App;