import mainBaner from "../assets/chair-umbrella.png"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
function Hero() {


    useGSAP(() => {
        gsap.to(".hero__img__ambrella", {
            delay: 2,
            opacity: 1
        })
    })



    const slogan = "Where Comfort Meets Luxury"
    const lastWord = slogan.split(" ").slice(-1)
    const removeLastWord = slogan.split(" ").map((item) => item).slice(0, -1).join(" ")
    // const people = [1,2,3,4,5]


    return (
        <div className="hero">
            <div className="hero__content">
                <div className="hero__part__first">
                    <p className="mini__slogan">this is your choice</p>
                    <div className="hero__slogan">
                        {
                            removeLastWord.split(" ").map((item, i) => <h1 key={i}> {item} </h1> )
                        }
                            <h1 className="color__last__word">{lastWord}</h1>
                    </div>
                    <p className="header__p">
                    There are everything what you may need. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt molestiae maxime, laboriosam cumque magnam totam cum quidem ullam eum vero dolorum accusantium ducimus placeat officiis? there are everything whhat you may need
                    </p>  
                    <div className="button">
                        <button className="btn" >Book Now</button>              
                    </div>
                </div>
                <div className="hero__part__second hero__img">
                    <img className="hero__img__ambrella" src={mainBaner} alt="" />
                    {/* <div className="spaces"></div> */}
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Hero
