import React from 'react'

import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import ArticlesNews from '../components/ArticlesNews'
import Footer from '../components/Footer'

const NewsDetails = () => {
  return (
    <div className="wrapper">
      <Header />
      <Breadcrumbs url="/newsDetails" page="NewsDetails" />
      <ArticlesNews />
      <Footer />
    </div>
  )
}

export default NewsDetails