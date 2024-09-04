import top from "../assets/top.png"
import news1 from "../assets/news-image-1.jpg"
import news2 from "../assets/news-image-2.jpg"
import news3 from "../assets/news-image-3.jpg"


import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Update() {



    useGSAP(() => {
        gsap.fromTo(".item__obj", {
            y: 150,
            stagger: .1,
            duration: .1,
            opacity: 0
        },{
            y: 0,
            stagger: 0.1,
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: ".item__obj"
            }
        })
        gsap.to(".update__text h4" , {
            x: 0,
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: ".update__text h4"
            }
        })

        gsap.fromTo(".update__text p", {
            opacity: 0,
            duration: 1,
        },{
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".update__text p"
            }
        })
    })

    const updateList = [
        {
            id: 1,
            img: news1,
            para: "on 2 Sep, 2024 / by admin",
            head: "Disclosing the Secrets of Success in Hotera.",
        },
        {
            id: 2,
            img: news2,
            para: "on 3 Sep, 2024 / by admin",
            head: "The Top Hotel Trends to Watch in 2024.",
        },
        {
            id: 3,
            img: news3,
            para: "on 4 Sep, 2024 / by admin",
            head: "Seven Best Things To Do In Buckeye Arizona.",
        },
    ]


    return (
        <div className="update">
            <img src={top} className="top__img" alt="decor" />
            <div className="update__content">
                <div className="update__objects">
                    <div className="update__text">
                        <h4>Stay Update with Our Hotel</h4>
                        <div>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                            <div className="button update__btn">
                                <button className="btn btn__discover" >Discover New</button>              
                            </div>
                        </div>
                    </div>
                    <div className="updates__items">
                        {
                            updateList.map(item => 
                            <div className="item__obj" key={item.id}> 
                                <img src={item.img} alt={item.head} />
                                <p>{item.para}</p>
                                <h5>{item.head}</h5>
                                <div className="vector"> &rarr; </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update
