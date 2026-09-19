import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import Cabang from "./pages/Cabang"
import Footer from "./pages/Footer"

function App() {
  return (
    <>
      <div className="bg-gray-50">
            <Navbar />
            <Home />
            <Services />
            <div className="bg-gray-950">
              <AboutUs />
            </div>
            <Cabang />
            <ContactUs />
        <div className=" bg-gray-50">
        </div>
            <Footer />
      </div>
    </>
  )
}

export default App
