import one from "../assets/one-decor.png"
import three from "../assets/tri-1.png"


import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Challange() {

    useGSAP(() => {
        gsap.fromTo(".chalange__circle", {
            scale: 0.9,
        }, {
            scale: 1,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.in"
        })
        gsap.to(".chalange__tri", {
            rotate:360,
            repeat: -1,
            yoyo: true,
            ease: "linear",
            duration: 20,
        })
        gsap.to(".chalange__text h4" , {
            x: 0,
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: ".chalange__text h4"
            }
        })
        gsap.fromTo(".chalange__list",{
            x: 100
        }, {
            x:0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".chalange__list"
            }
        })
    })

    const chalangeList = [
        {
            id: 1,
            num: "14",
            head: "Years Exp.",
            para: "Excepteur sint occaecat cupidatat proi dent in sunt."
        },
        {
            id: 2,
            num: "150",
            head: "Project Done.",
            para: "Excepteur sint occaecat cupidatat proi dent in sunt."
        },
        {
            id: 3,
            num: "37",
            head: "Awards Win",
            para: "Excepteur sint occaecat cupidatat proi dent in sunt."
        },
    ]

    return (
        <div className="chalange">
            <div className="chalange__text">
                <h4>Always Ready to Take Challange</h4>
                <p>Notice ipsum dolor sit consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. enim ad minim veniam quis nostrud exercitation.</p>
                <div className="chalange__decors">
                    <img className="chalange__circle chalange__circle__scale" src={one} alt="" />
                    <img className="chalange__tri" src={three} alt="" />
                </div>
            </div>
            <div className="chalange-numbers">
                {
                    chalangeList.map(num => <div className="chalange__list" key={num.id}> 
                        <div className="number">{num.num}</div>
                        <div>
                            <h5>{num.head}</h5>
                            <p> {num.para} </p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Challange
