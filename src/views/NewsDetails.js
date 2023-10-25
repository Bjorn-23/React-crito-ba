import React from 'react'

import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import ArticlesNewsFull from '../components/ArticlesNewsFull'

const NewsDetails = () => {
  return (
    <div className="wrapper">
      <Header />
      <Breadcrumbs url="/NewsDetails" page="NewsDetails" />
      <ArticlesNewsFull />
      <Footer />
    </div>
  )
}

export default NewsDetails