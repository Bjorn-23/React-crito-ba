import React from 'react'
import Button from './generics.js/Button'

import img_critoLogo from '../assets/img/header/Logotype.svg'

const NavSection = () => {
  return (

<div className="header">
    <div className="container">
        <a href="index.html"><img src={img_critoLogo} alt="Crito Logotype" /></a>
        
        <div className="menu">
            <div className="top-menu">
                <div className="contact-information">
                    <div className="content-box">
                        <i className="fa-light fa-phone-volume"></i>
                        <a href="callto:+46(8)12147050">+46 (8) 121 470 50</a>
                    </div>
                    <div className="content-box">
                        <i className="fa-light fa-envelope"></i>
                        <a
                            href="mailto:info@crito.com?subject=Hello%20World!&body=All%20your%20base%20are%20belong%20to%20us...">info@crito.com</a>
                    </div>
                    <div className="content-box last">
                        <i className="fa-light fa-location-dot"></i>
                        <a href="https://maps.app.goo.gl/JUjns7mUxx5Q5QEL8" target="_blank" rel="noreferrer">Sveavägen 31 111 34
                            Stockholm</a>
                    </div>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div className="main-menu">
                <nav>

                    <a href="index.html" className="active">Home</a>
                    <a href="services.html">Services</a>
                    <a href="news.html">News</a>
                    <a href="articles.html">Articles</a>
                    <a href="contact.html">Contact</a>
                </nav>

                <Button type="yellow" title="Login" url="/login" />
            </div>
        </div>
    </div>
</div>

 

  )
}

export default NavSection