import React from 'react'

import ContactBox from './generics.js/ContactBox'

const ContactInfo = () => {
    return (
        <>
            <section className="contact">
                <div className="container">

                    <div className="grid-container">

                        <div className="grid-item">
                            <div className="icon"><i className="fa-sharp fa-solid fa-location-dot"></i></div>
                            <div className="text">
                                <h3>Visit us</h3>
                                <a href="https://maps.app.goo.gl/qhFmkWcRb2fKbM1j7" target="_blank">
                                    <p>Sveavägen 31</p>
                                    <p>111 34 Stockholm</p>
                                </a>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="icon"><i className="fa-solid fa-phone"></i></div>
                            <div className="text">
                                <h3>Call us</h3>
                                <a href="callto:+46(8)12147050">
                                    <p>+46 (8) 121 470 50</p>
                                </a>
                                <a href="callto:+46(8)12147051">
                                    <p>+46 (8) 121 470 51</p>
                                </a>

                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="icon"><i className="fa-light fa-envelope"></i></div>
                            <div className="text">
                                <h3>Email us</h3>
                                <a href="mailto:info@crito.com">
                                    <p>info@crito.com</p>
                                </a>
                                <a href="mailto:supporto@crito.com">
                                    <p>support@crito.com</p>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="message-us" id="#message-us">

                        <h2 className="message-title">Leave us a message for any information.</h2>
                        <form id="contactForm" method="get" action="form-results.html">

                            <label htmlFor="c_fullName" className="c_labels visually-hidden-focusable" tabIndex="0">Your Name</label>
                            <input id="c_fullName" type="text" name="fullname" placeholder="Name...*" autoComplete="none"
                                required />

                            <label htmlFor="c_email" className="c_labels visually-hidden-focusable" tabIndex="0">Your E-mail</label>
                            <input id="c_email" type="email" name="email" placeholder="Email...*" autoComplete="none"
                                required />

                            <label htmlFor="c_message" className="c_labels visually-hidden-focusable" tabIndex="0">Your Message</label>
                            <textarea id="c_message" type="text" rows="5" name="message" placeholder="Your Message...*"
                                required></textarea>

                            <button id="c_submit" type="submit" className="submit btn-yellow">Send Message<i
                                className="fa-solid fa-arrow-up-right"></i></button>
                        </form>
                    </div>

                </div>
            </section>

            <section className="map">
                <div className="container-fluid">
                    <div className="google-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13299.173483270846!2d18.047397112850533!3d59.335248767174505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c842903003!2sSveav%C3%A4gen%2031%2C%20111%2034%20Stockholm!5e0!3m2!1sen!2sse!4v1694788672912!5m2!1sen!2sse"
                            width="100%" height="620" style={{border:''}} loading="lazy" allowFullScreen=""
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactInfo