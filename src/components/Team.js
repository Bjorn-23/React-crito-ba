import React from 'react'
import TeamBox from './generics/TeamBox'
import SectionTitle from './generics/SectionTitle'
import Button from './generics/Button'

import img_Kristine from '../assets/img/team/k-palmer.png'
import img_Mark from '../assets/img/team/m-aubri.png'
import img_Kimberley from '../assets/img/team/k-hansen.png'
import img_Justin from '../assets/img/team/j-willoman.png'

const Team = () => {
  return (
<section className="team">
        <div className="container">

            <div className="top-wrapper">
                <div className="team-title">
                    <SectionTitle title='Experienced Team Members' orangeText="Meet Our Team" />
                </div>
                <div className="btn-team-wrapper">
                    <Button type='team' title='Browse Team' url='#' className="btn-team" />
                </div>
            </div>

            <div className="slide-wrapper">
                <div id="myCarousel" className="carousel slide">


                    <div className=" carousel-inner">

                    <div className="item">

                        <TeamBox img={img_Kristine} altText='Kristine Palmer, the chief operations officer at Crito' name='Kristine Palmer' role='Chief Operations Officer' />
                        <TeamBox img={img_Mark} altText='Mark Aubri, senior consultant of Crito' name='Mark Aubri' role='Senior Consultant' />
                        <TeamBox img={img_Kimberley} altText='Kimberley Hansen, senior consultant of Crito' name='Kimberley Hansen' role='Senior Consultant' />
                        <TeamBox img={img_Justin} altText='Justin Willoman, senior tech consultant of Crito' name='Justin Willoman' role='Senior Tech Consultant' />

                    </div>

                </div>
            </div>

        </div>

        <ol className="slide-dots">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="dot active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" className="dot"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" className="dot"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3" className="dot"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4" className="dot"></li>
        </ol>

        </div>
    </section>

  )
}

export default Team