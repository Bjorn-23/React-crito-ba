import React from 'react'

import img_25mar from '../assets/img/articles-news/25mar.png'
import img_17mar from '../assets/img/articles-news/17mar.png'
import img_12mar from '../assets/img/articles-news/12mar.png'

const ArticlesNews = () => {
  return (
<section className="articles-news">
        <div className="container">
            <div className="top">

                <div className="top-lft">
                    <p className="orange-txt">Articles & News</p>
                    <h2>Get All Of Our Articles & News</h2>
                </div>

                <div className="top-rgt">
                    <div className="articles-btn-container">
                        <a className="btn-transparent-fat" href="news.html">Browse Articles<i
                                className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>

            </div>

            <div className="middle grid-container">
                <a className="grid-item" href="articles.html">
                    <div className="img-wrapper">
                        <img className="article-img relative" src={img_25mar}
                            alt="a woman in business suite sitting at a table in a classNameroom" />
                        <div className="date-wrapper">
                            <div className="yellow-square absolute">
                                <div className="date">25</div>
                                <p className="month">Mar</p>
                            </div>

                        </div>
                    </div>
                    <p className="subject">Business</p>
                    <h3 className="article-title">How To Use Digitalization In The classNameroom</h3>
                    <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                        libero.</p>
                </a>

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
                    <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                        libero.</p>
                </a>

                <a className="grid-item" href="news.html">
                    <div className="img-wrapper">
                        <img className="article-img relative" src={img_12mar}
                            alt="a smartphone on top of books about css and javascript" />
                        <div className="date-wrapper">
                            <div className="yellow-square absolute">
                                <div className="date">12</div>
                                <p className="month">Mar</p>
                            </div>

                        </div>
                    </div>
                    <p className="subject">Business</p>
                    <h3 className="article-title">The Guide To Support Modern CSS Design</h3>
                    <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic
                        libero.</p>
                </a>
            </div>

            <div className="bottom">
                <ol className="slide-dots">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="dot active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="dot"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="dot"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3" className="dot"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4" className="dot"></li>
                </ol>
            </div>

        </div>

    </section>

  )
}

export default ArticlesNews