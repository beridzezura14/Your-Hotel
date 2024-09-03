// just img
import top from "../assets/top.png"
import bottom from "../assets/bottom.png"
import aboutImg from "../assets/about.jpg"
// decoration
import one from "../assets/one-decor.png"
import two from "../assets/two-decor.png"
import three from "../assets/tri-1.png"

// animation gsap
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



function About() {

    useGSAP(() => {
        gsap.to(".about__head",{
            x: 0,
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: ".about__head"
            }
        })

        gsap.fromTo(".about__text p", {
            opacity: 0,
            duration: 1,
        },{
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".about__text p"
            }
        })
        gsap.fromTo(".decor__circle", {
            scale: 0.8,
        }, {
            scale: 1.1,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.in"
        })
        gsap.to(".tringle__decor", {
            rotate:360,
            repeat: -1,
            yoyo: true,
            ease: "linear",
            duration: 20,
        })
    })

    return (
        <div className="main__about">
            <img className="top__img" src={top} alt="" />
            <div className="about">
                <div className="about__content">
                    <div className="about__img">
                        <img className="img__pool" src={aboutImg} alt="" />
                        <p className="exp">14 Years of Exp.</p>
                        
                        <img src={two} alt="" className="decor__img__two decor__circle" />
                    </div> 
                    <div className="about__text"> 
                        <h3 className="about__head">Quality Holidays With Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="button">
                            <button className="btn" >Book Now</button>              
                        </div>
                    </div>   
                </div>  
                
                <div className="about__decors">
                    <img className="sircle__decor decor__circle" src={one} alt="" />
                    <img className="tringle__decor" src={three} alt="" />
                </div>

            </div>
            <img className="bottom__img" src={bottom} alt="" />
        </div>
    )
}

export default About
