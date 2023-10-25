import React from 'react'

import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import ArticlesNewsFull from '../components/ArticlesNewsFull'
import Footer from '../components/Footer'

const News = () => {
  return (
    <div className="wrapper">
      <Header />
      <Breadcrumbs url="/News" page="News" />
      <ArticlesNewsFull />
      <Footer />
    </div>

  )
}

export default News