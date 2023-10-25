import React from 'react'

import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Clients from '../components/Clients'
import Features from '../components/Features'
import AboutCompany from '../components/AboutCompany'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import ArticlesNews from '../components/ArticlesNews'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <Showcase />
      <Clients />
      <Features />
      <AboutCompany />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Team />
      <Testimonials />
      <ArticlesNews />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home