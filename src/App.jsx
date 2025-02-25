// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header.jsx';
import { Footer } from './components/footer.jsx';
import HomePage from './pages/home/home.jsx';
import AboutPage from './pages/home/about.jsx';
import './assets/css/home.css';

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        {/* Aqui está associando o endereço com a página */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
