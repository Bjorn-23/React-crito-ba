import React from 'react'

const ServiceBox = ({title, description, url}) => {
  return (

    <a className="grid-item" href={url}>
        <div className="box-line">_______</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="btn-arw-r"><i className="fa-light fa-arrow-right"></i></div>
    </a>
  )
}

export default ServiceBox