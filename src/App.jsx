import About from "./pages/About/About"
import Bennar from "./pages/Bennar/Bennar"
import Footer from "./pages/Footer/Footer"
import Navbar from "./pages/Navbar/Navbar"
import Roadmap from "./pages/Roadmap/Roadmap"
import Telegram from "./pages/Telegram/Telegram"
import Tokenomics from "./pages/Tokenomics/Tokenomics"
import Whytoken from "./pages/WhyToken/Whytoken"
import { cubicBezier, motion } from "framer-motion";
import './App.css'

function App() {
  const transition = {
    duration: 1.4,
    ease: cubicBezier(0.6, 0.01, -0.05, 0.9)
    // ease: [0.6, 0.01, -0.05, 0.9],
  }

  return (
    <>
      <div className="">
        <motion.div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#menu-target"
          animate={{ top: "-100vh", transition: { ...transition, delay: 5 } }}
          className="preloader"
        >
          <div className="preloader__wrapper">
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__left"
            >
              {/* <img src="svg/adeola-logo-left.svg" alt="adeola logo" /> */}
            </motion.div>
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__right"
            >
              <p className="preloader__text">Welcome to</p>
              <p className="preloader__text">FATAO<sub>BD</sub> </p>
              <p className="preloader__text">A life changer plateform</p>
            </motion.div>
          </div>
        </motion.div>
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
