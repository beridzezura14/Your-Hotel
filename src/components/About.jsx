// just img
import top from "../assets/top.png"
import bottom from "../assets/bottom.png"
import aboutImg from "../assets/about.jpg"
// decoration
import one from "../assets/one-decor.png"
import two from "../assets/two-decor.png"
import three from "../assets/tri-1.png"
// import { useGSAP } from "@gsap/react"

// animation 

function About() {



    return (
        <>
            <img className="top__img" src={top} alt="" />
            <div className="about">

                <div className="about__content">
                    <div className="about__img">
                        <img className="img__pool" src={aboutImg} alt="" />
                        <p className="exp">14 Years of Exp.</p>
                        
                        <img src={two} alt="" className="decor__img__two" />
                    </div> 
                    <div className="about__text"> 
                        <h3>
                            Quality Holidays With Us
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="button">
                            <button className="btn" >Book Now</button>              
                        </div>
                    </div>   
                </div>  
                
                <div className="about__decors">
                    <img className="sircle__decor" src={one} alt="" />
                    <img className="tringle__decor" src={three} alt="" />
                </div>

            </div>
            <img className="bottom__img" src={bottom} alt="" />
        </>
    )
}

export default About
