import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Cabang from "./pages/Cabang";
import Footer from "./pages/Footer";
import ChatWidget from "./components/ChatWidget";
import Login from "./pages/Login";
import Dashboard from "./pages/internal/Dashboard";
import ProtectedLayout from "./pages/ProtectedLayout";
import Tracking from "./pages/Tracking";
import CekOngkir from "./pages/CekOngkir";

const HalamanUtama = () => {
  const [bukaChat, setBukaChat] = useState(false);

  return (
    <div className="bg-gray-50 relative">
      <Navbar />
      <Home onBukaChat={() => setBukaChat(true)} />
      <div className="w-full mx-auto">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="w-full lg:w-1/2 outline px-10 shadow-2xl rounded-lg">
            <Tracking />
          </div>
          <div className="w-full lg:w-1/2 px-10 bg-black shadow-2xl">
            <CekOngkir />
          </div>
        </div>
      </div>
      <div className="">
        <Services />
      </div>
      <div className="bg-gray-950">
        <AboutUs />
      </div>
      <div className="shadow-2xl">
        <Cabang />
      </div>
      <ContactUs onBukaChat={() => setBukaChat(true)} />
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
