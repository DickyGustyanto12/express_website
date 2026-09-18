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
      <div className="">
            <Navbar />
            <Home />
            <Services />
            <AboutUs />
            <Cabang />
        <div className="px-30 bg-gray-50">
          <div className=" min-h-screen">
            <ContactUs />
          </div>
        </div>
            <Footer />
      </div>
    </>
  )
}

export default App
