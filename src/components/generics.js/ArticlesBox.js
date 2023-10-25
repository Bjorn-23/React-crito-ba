import React from 'react'

const ArticlesBox = ({url, img, altText, date, month, category, title, text}) => {
    return (

        <a className="grid-item" href={url}>
            <div className="img-wrapper">
                <img className="article-img relative" src={img}
                    alt={altText} />
                <div className="date-wrapper">
                    <div className="yellow-square absolute">
                        <div className="date">{date}</div>
                        <p className="month">{month}</p>
                    </div>
                </div>
            </div>
            <p className="subject">{category}</p>
            <h3 className="article-title">{title}</h3>
            <p className="lorem">{text}</p>
        </a>

    )
}

export default ArticlesBox