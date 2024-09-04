// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import { useState } from "react"
import mainLogo from '../assets/logo/logo-no-background.png'



function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }; 

    return (
        <div>
            <div className="header">
                <div className = "header__row">
                    <div className="logo"> <img src={mainLogo} alt="" /> </div>
                    <div onClick={toggleMenu}>
                        {
                            isOpen ? 
                            <div className="close">
                                <ion-icon name="close-outline"></ion-icon>
                            </div>
                            :
                            <div className = "open">
                                <ion-icon name="menu-outline"></ion-icon>
                            </div>
                        }
                    </div>
                    <ul className ={isOpen ? "navbar active" : "navbar"}>
                        <li><a className="nav__items" href="">Home</a></li>
                        <li><a className="nav__items" href="">About</a></li>
                        <li><a className="nav__items" href="">Contact</a></li>
                        <li><a className="nav__items" href="">Rooms</a></li>
                        <li><a className="nav__items" href="">Prices</a></li>
                        <li><a className="nav__items" href="">Gallery</a></li>
                    </ul>
                    <div className={isOpen ? "btn__explore active" : "btn__explore"}>
                        
                        <button>Book</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Header
