import React from 'react'

export const Navbar = () => {
    // Toggle hamburger
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");

    const closeMenu = () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    const mobileMenu = () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }


    navLink.forEach(n => n.addEventListener("click", closeMenu));
    return (
        <header className="header">
            <nav className="navbar">
                {/* Logo */}
                <a href="/#" className="nav-logo">
                    <img src={process.env.PUBLIC_URL + "/img/bonsai_logo.svg"} alt="" />
                </a>
                {/* Menu */}
                <ul className="nav-menu">
                    <li className="nav-item" >
                        <a href="/#" className="nav-link">Product</a>
                    </li>
                    <li className="nav-item" >
                        <a href="/#" className="nav-link">Templates</a>
                    </li>
                    <li className="nav-item" >
                        <a href="/#" className="nav-link">Pricing</a>
                    </li>
                    <li className="nav-item" >
                        <a href="/#" className="nav-link">Reviews</a>
                    </li>
                    <button className="login" onClick={closeMenu}>LOG IN</button>
                    <button className="startFree" onClick={closeMenu}>START FREE</button>
                </ul>
                {/* Hamburger */}
                <div className="hamburger" onClick={mobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    )
}
