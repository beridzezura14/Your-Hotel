import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function Rooms() {

    useGSAP(() => {
        gsap.fromTo(".item__box", {
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
                trigger: ".item__box"
            }
        })
        gsap.to(".rooms__text h4" , {
            x: 0,
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: ".rooms__text h4"
            }
        })

        gsap.fromTo(".rooms__text p", {
            opacity: 0,
            duration: 1,
        },{
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".rooms__text p"
            }
        })
    })

    return (
        <div className="rooms">
            <div className="rooms__text">
                <h4>Room & Suites</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
            </div>
            <div className="items">
                <div className="item__box">
                    <div className="item item-1">
                        <div className="more__description">
                            <h5>Balcony Room</h5>
                            <div className="price__star">
                                <p>FROM <span>$50.00</span></p>
                                <div className="stars"> 
                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>
                                    <div><ion-icon name="star"></ion-icon></div>
                                </div>
                            </div>
                            <p className="price-p">Excepteur sint occaecat cupidatat pro dent in sun in culpa qui officia deserunt mollit anim.</p>
                            <div className="button ">
                                <button className="btn anim-h-p" >Book Now</button>              
                            </div>
                        </div>  
                        <div className="room__price">
                            <p>FROM <span>$50.00</span></p>
                            <h5>Balcony Room</h5>
                        </div>
                    </div>
                </div>
                <div className="item__box">
                    <div className="item item-2">
                    <div className="more__description">
                            <h5>Balcony Room</h5>
                            <div className="price__star">
                                <p>FROM <span>$50.00</span></p>
                                <div className="stars"> 
                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>
                                    <div><ion-icon name="star"></ion-icon></div>
                                </div>
                            </div>
                            <p className="price-p">Excepteur sint occaecat cupidatat pro dent in sun in culpa qui officia deserunt mollit anim.</p>
                            <div className="button ">
                                <button className="btn anim-h-p" >Book Now</button>              
                            </div>
                        </div> 
                        <div className="room__price">
                            <p>FROM <span>$50.00</span></p>
                            <h5>Sea View Room</h5>
                        </div>
                    </div>
                </div>
                <div className="item__box item__box__3">
                    <div className="item item-3">
                    <div className="more__description">
                            <h5>Balcony Room</h5>
                            <div className="price__star">
                                <p>FROM <span>$50.00</span></p>
                                <div className="stars"> 
                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>
                                    <div><ion-icon name="star"></ion-icon></div>
                                </div>
                            </div>
                            <p className="price-p">Excepteur sint occaecat cupidatat pro dent in sun in culpa qui officia deserunt mollit anim.</p>
                            <div className="button ">
                                <button className="btn anim-h-p" >Book Now</button>              
                            </div>
                        </div> 
                        <div className="room__price">
                            <p>FROM <span>$50.00</span></p>
                            <h5>Superior Room</h5>
                        </div>
                    </div>
                </div>
                <div className="item__box">
                    <div className="item item-4">
                    <div className="more__description">
                            <h5>Balcony Room</h5>
                            <div className="price__star">
                                <p>FROM <span>$50.00</span></p>
                                <div className="stars"> 
                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>
                                    <div><ion-icon name="star"></ion-icon></div>
                                </div>
                            </div>
                            <p className="price-p">Excepteur sint occaecat cupidatat pro dent in sun in culpa qui officia deserunt mollit anim.</p>
                            <div className="button ">
                                <button className="btn anim-h-p" >Book Now</button>              
                            </div>
                        </div> 
                        <div className="room__price">
                            <p>FROM <span>$50.00</span></p>
                            <h5>Delux Room</h5>
                        </div>
                    </div>
                </div>
                <div className="item__box">
                    <div className="item item-5">
                    <div className="more__description">
                            <h5>Balcony Room</h5>
                            <div className="price__star">
                                <p>FROM <span>$50.00</span></p>
                                <div className="stars"> 
                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>                                    <div><ion-icon name="star"></ion-icon></div>
                                    <div><ion-icon name="star"></ion-icon></div>
                                </div>
                            </div>
                            <p className="price-p">Excepteur sint occaecat cupidatat pro dent in sun in culpa qui officia deserunt mollit anim.</p>
                            <div className="button ">
                                <button className="btn anim-h-p" >Book Now</button>              
                            </div>
                        </div> 
                        <div className="room__price">
                            <p>FROM <span>$50.00</span></p>
                            <h5>Luxury Suite Room</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms
