import React from 'react'

// styles
import "./styles/style.css"

const Menu = () => (
    <div className="hero-header">
        <header className="nav-menu-container">
            <ul className="nav-menu">
                <li>Home</li>
                <li>Contact us</li>
                <li>About</li>
                <li>Blog</li>
            </ul>
        </header>
        <div className="hero-container">
            <div className="slogan-container">
                <h1>
                    The go to option for schooling 
                    and translation services
                </h1>
                <h2>
                    We got you covered with English classes or translation
                    services. 
                </h2>
                <button>
                    See our services
                </button>
            </div>
            <img className="company-logo" src="icons/main_logo.png"/>
        </div>
        <div className="scroll-wrapper">
            <img className="scroll-arrow" src="icons/navigation_arrow.png"/>
        </div>
    </div>
)

export default Menu