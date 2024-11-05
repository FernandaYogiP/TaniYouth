import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Header from './Components/Header';
import News from './Pages/news';
import Forum from './Pages/Forum';
import Knowledge from './Pages/Articles/Knowledge';
import Cultivation from './Pages/Articles/Cultivation';
import Solutions from './Pages/Articles/Solutions';
import Chatbot from './Components/Chatbot';

const App = () => {
    return (
        <Router>
            <div className="bg-green-900 text-white relative min-h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/articles/knowledge" element={<Knowledge />} />
                    <Route path="/articles/solutions" element={<Solutions />} />
                    <Route path="/articles/cultivation" element={<Cultivation />} />
                    {/* Add other routes here */}
                </Routes>
                <Footer />
                <Chatbot />
            </div>
        </Router>
    );
};

export default App;