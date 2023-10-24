import React from 'react'


const TestimonialsBox = ({img, altText, name, roleComp}) => {
  return (
<div className="grid-item">
                    <p className="stars"><i className="fa-sharp fa-solid fa-star"></i><i
                            className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i
                            className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i></p>
                    <p className="-grey-txt">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero,
                        ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                    </p>
                    <div className="flex-wrapper">
                        <img src={img} alt={altText} />
                        <div>
                            <h3 className="name">{name}</h3>
                            <p className="orange-txt">{roleComp}</p>
                        </div>
                    </div>
                </div>
  )
}

export default TestimonialsBox