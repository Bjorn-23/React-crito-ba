import React from 'react'

const ArticlesBox = () => {
    return (

        <a className="grid-item" href="news.html">
            <div className="img-wrapper">
                <img className="article-img relative" src={img_17mar}
                    alt="a screen displaying 3 columns: examples, capabilities and limitations" />
                <div className="date-wrapper">
                    <div className="yellow-square absolute">
                        <div className="date">17</div>
                        <p className="month">Mar</p>
                    </div>
                </div>
            </div>
            <p className="subject">Business</p>
            <h3 className="article-title">How To Implement Chat GPT In Your Projects</h3>
            <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        </a>

    )
}

export default ArticlesBox