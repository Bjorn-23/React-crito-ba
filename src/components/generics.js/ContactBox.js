import React from 'react'

const ContactBox = () => {
    return (
        <div className="grid-item">
            <div className="icon"><i className="fa-sharp fa-solid fa-location-dot"></i></div>
            <div className="text">
                <h3>Visit us</h3>
                <a href="https://maps.app.goo.gl/qhFmkWcRb2fKbM1j7" target="_blank" rel="noreferrer">
                    <p>Sveavägen 31</p>
                    <p>111 34 Stockholm</p>
                </a>
            </div>
        </div>
    )
}

export default ContactBox
