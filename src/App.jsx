import Header from "./components/header"
import Hero from "./components/Hero"
import About from "./components/About"
import Challange from "./components/Challange"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"


function App() {

  useGSAP(() => {
    gsap.to(".main__content", {
      delay: 1.5,
      duration: 1,
      opacity: 1,
    })

    gsap.fromTo(".cube", {
      yPercent: -20,
      duration: 0.2,
      opacity: 1,
      stagger: .1,
      ease: "power1.inOut",
    },{
      yPercent: 20,
      duration: 0.2,
      stagger: .1,
      ease: "power1.inOut",
      opacity: 0,
    })
  })

  return (
    <>
      <div className="main__loader">
          <div className="loader">
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
              <div className="cube"></div>
          </div>
      </div>
      <div className="main__content">
        <Header />
        <Hero />
        <About />
        <Challange />
      </div>
    </>
  )
}

export default App
