import React from 'react'
import Button from './generics.js/Button'
import ServiceBox from './generics.js/ServiceBox'
import SectionTitle from './generics.js/SectionTitle'
import img_ServiceLines from '../assets/img/services/white-squiggly-lines-services.svg'

const Services = () => {
    return (
        <section className="our-services">

            <div className="design-lines-services">
                <img src={img_ServiceLines} alt="" />
            </div>

            <div className="container">

                <div className="c-top">
                    <div className="top-wrapper">
                        <SectionTitle title="We Provide The Best Service For Consulting" orangeText="Our Services" />
                    </div>

                    <div className="spacer-rgt"></div>
                </div>

                <div className="c-middle">
                    <div className="grid-container">

                        <ServiceBox title="Business Advice" url="/Services" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                        <ServiceBox title="Startup Business" url="/Services" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                        <ServiceBox title="Financial Advice" url="/Services" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                        <ServiceBox title="Risk Management" url="/Services" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                        
                    </div>

                    <div className="c-btm">
                        <Button type="transparent-fat" title="Browse Service" url="/Services" />
                    </div>

                </div>
            </div>       

        </section>
    )
}

export default Services