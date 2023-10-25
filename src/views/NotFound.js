import React from 'react'
import Footer from '../components/Footer'
import Button from '../components/generics.js/Button'

import img_lost from '../assets/img/not-found/lost-1.jpg'

const NotFound = () => {
  return (
    <div className="wrapper">
      
      <div className="pageNotFound">
        <img src={img_lost} className="imgLost" />
        <h1>404 Page Not Found</h1>
        <Button type="yellow" title="Back" url="/" />
      </div>    
      <Footer />

    </div>
  )
}

export default NotFound
