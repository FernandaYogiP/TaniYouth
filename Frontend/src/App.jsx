import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Header from './Components/Header';
import News from './Pages/News';
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
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import DetailNews from './Pages/DetailNews';
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';


// Wrapper component untuk mengecek path
function AppContent() {
    const location = useLocation();
    const excludedPages = ['/Pages/Login', '/Pages/SignUp']; // klo gamau pake header sama footer
    const showHeaderFooter = !excludedPages.includes(location.pathname);

    return (
        <div className="bg-green-900 text-white relative min-h-screen font-poppins">
            {showHeaderFooter && <Header />}
            <ToastContainer />

            
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
                <Route path="/Pages/Login" element={<Login />} />
                <Route path="/Pages/SignUp" element={<SignUp />} />
                <Route path="/Pages/DetailNews" element={<DetailNews />} />
            </Routes>

            {showHeaderFooter && <Footer />}
            {showHeaderFooter && <Chatbot />}
        </div>
    );
}

const App = () => {
    return (
        <GoogleOAuthProvider clientId='622871264591-lpkikd659631n72aa7afmbp14s6g00eg.apps.googleusercontent.com'>
        <Router>
            <AppContent />
        </Router>
        </GoogleOAuthProvider>

    );
};

export default App;