import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Cabang from './pages/Cabang';
import Footer from './pages/Footer';
import ChatWidget from './components/ChatWidget';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedLayout from './pages/ProtectedLayout';

const HalamanUtama = () => {
  const [bukaChat, setBukaChat] = useState(false);

  return (
    <div className="bg-gray-50 relative">
      <Navbar />
      <Home onBukaChat={() => setBukaChat(true)} />
      <Services />
      <div className="bg-gray-950">
        <AboutUs />
      </div>
      <Cabang />
      <ContactUs />
      <Footer />
      <ChatWidget bukaChat={bukaChat} setBukaChat={setBukaChat} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HalamanUtama />} />
        <Route path="/internal" element={<Login />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/internal/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;