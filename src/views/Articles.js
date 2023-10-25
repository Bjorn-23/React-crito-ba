import React from 'react'

import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import ArticlesNewsFull from '../components/ArticlesNewsFull'

const Articles = () => {
  return (
    <div className="wrapper">
    <Header />
    <Breadcrumbs url="/articles" page="Articles"  />
    <ArticlesNewsFull />
    <Footer />
  </div>
  )
}

export default Articles