import About from "./pages/About/About"
import Bennar from "./pages/Bennar/Bennar"
import Footer from "./pages/Footer/Footer"
import Navbar from "./pages/Navbar/Navbar"
import Roadmap from "./pages/Roadmap/Roadmap"
import Telegram from "./pages/Telegram/Telegram"
import Tokenomics from "./pages/Tokenomics/Tokenomics"
import Whytoken from "./pages/WhyToken/Whytoken"

function App() {


  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Bennar></Bennar>
        <Telegram></Telegram>
        <About></About>
        <Tokenomics></Tokenomics>
        <Whytoken></Whytoken>
        <Roadmap></Roadmap>
        <Footer></Footer>

      </div>
    </>
  )
}

export default App
