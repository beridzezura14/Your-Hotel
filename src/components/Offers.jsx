import img1 from "../assets/offer-img-1.jpg"
import img2 from "../assets/offer-img-2.jpg"
import img3 from "../assets/offer-img-3.jpg"

import one from "../assets/one-decor.png"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



function Offers() {

    useGSAP(() => {

        gsap.to(".offers__text h4" , {
            x: 0,
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: ".offers__text h4"
            }
        })
        gsap.fromTo(".absolute__tri", {
            scale: 1,
        }, {
            scale: 1.2,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.in"
        })

        gsap.fromTo(".offer__img", {
            scale: 0,
        }, {
            scale: 1,
            duration: 0.5,
            ease: "power1.in",
            scrollTrigger: {
                trigger: ".offer__img"
            }

        })
        gsap.fromTo(".offers__text p", {
            opacity: 0,
            duration: 1,
        },{
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".offers__text p"
            }
        })


        gsap.fromTo(".offer__flex",{
            x: -100,
            opacity: 0,
        }, {
            x:0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".offer__flex"
            }
        })
    })

    const offersList = [
        {
            id: 1,
            num: "30%",
            price: "$50.00",
            head: "Honeymoon Package",
            para: "Excepteur sint occaecat cupidatat proi dent in sunt."
        },
        {
            id: 2,
            num: "30%",
            price: "$50.00",
            head: "Free Prackfast Package",
            para: "Excepteur sint occaecat cupidatat proi dent in sunt."
        },
        {
            id: 3,
            num: "30%",
            price: "$50.00",
            head: "Facial treatmant",
            para: "Excepteur sint occaecat cupidatat proi dent in sunt."
        },
    ]
    return (
        <div className="offers">
            <div className="offers__content">
                <div className="offers__text">
                    <div>
                        <h4>Hotera Special Offers</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    </div>
                    <div className="button button-offer">
                        <button className="btn anim-h-p" >Book Now</button>              
                    </div>
                </div>
                <div className="offers__gallery">
                    <div className="offers__item">
                        {
                        offersList.map(item => 
                            <div className="offer__flex" key={item.id}>
                                <div className="percentage">{item.num} OFF</div>
                                <div className="offer__object">
                                    <div>Start From <span>{item.price}</span></div>
                                    <h5>{item.head}</h5>
                                    <p>{item.para}</p>
                                </div>
                            </div>
                        ) 
                        }
                    </div>
                    <img className="img__2" src={img2} alt="" />

                    <div className="mobile__off">
                        <img className="offer__img offer__img__1" src={img2} alt="" />
                        <img className="offer__img offer__img__2" src={img1} alt="" />
                        <img className="offer__img offer__img__3" src={img3} alt="" />

                        <img src={one} alt="" className="absolute__tri" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers
