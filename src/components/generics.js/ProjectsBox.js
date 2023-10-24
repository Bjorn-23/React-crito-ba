import React from 'react'

const ProjectsBox = ({img, altText, url, title}) => {
  return (
        <a className="grid-item-p br" href={url}>
            <img src={img} alt={altText} />
            <h3>{title}</h3>
            <div className="txt-arw">
                <span>Learn More </span>
                <i className="fa-regular fa-arrow-up-right"></i>
            </div>
        </a>
    )
}

export default ProjectsBox