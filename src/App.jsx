import Header from "./components/header"
import Hero from "./components/Hero"
import About from "./components/About"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"


function App() {

  useGSAP(() => {
    gsap.to(".main__content", {
      delay: 1.5,
      duration: 1,
      opacity: 1,
    })

      gsap.to(".cube", {
      yPercent: 100,
      duration: 0.2,
      opacity: 1,
      stagger: .3,
      ease: "power1.inOut",
      rotation: 360,
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
          </div>
        </div>
      <div className="main__content">
        <Header />
        <Hero />
        <About />
      </div>
    </>
  )
}

export default App
