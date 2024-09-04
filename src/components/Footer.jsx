import logo from "../assets/logo/logo-white.png"


import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Footer() {


    useGSAP(() => {
        gsap.fromTo(".anim_f", {
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
                trigger: ".anim_f"
            }
        })
    })
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__logo anim_f">
                    <img src={logo} className="f__logo" alt="f__logo" />
                </div>
                <div className="services__f anim_f">
                    <h4>Services</h4>
                    <ul className="footer__menu">
                        <li><a className="footer_items" href="">Home</a></li>
                        <li><a className="footer_items" href="">About</a></li>
                        <li><a className="footer_items" href="">Contact</a></li>
                        <li><a className="footer_items" href="">Rooms</a></li>
                        <li><a className="footer_items" href="">Prices</a></li>
                        <li><a className="footer_items" href="">Gallery</a></li>
                    </ul>
                </div>
                <div className="anim_f">
                    <h4>contact</h4>
                    <div className="contact__f">
                        <p>Flat 55, Reynolds Neck, North Helenaville, FV7007 14WS</p>
                        <p>+2(305) 587-3456</p>
                        <p>info@yourhotel.com</p>
                        <div className="icons">
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-instagram"></ion-icon>
                            <ion-icon name="logo-youtube"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="anim_f">
                    <h4>Newslatters</h4>
                    <div className="newslatter__f">
                        <p>Stay update with us</p>
                        <form>
                            <input className="input__email" type="text" placeholder="Enter Email" />
                            <div className="button button-footer">
                                <button className="btn btn__f" >Send</button>              
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
