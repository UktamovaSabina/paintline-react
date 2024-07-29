import React from 'react';
import AboutComponent from '../components/about/AboutComponent';
import ContactComponent from '../components/contact/ContactComponent';
import Hero from '../components/hero/Hero';
import ProductsGroup from '../components/products-group/ProductsGroup';
import Products from '../components/products/Products';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsGroup />
      <Products />
      <AboutComponent heading={'Коротко о нашей компании'} />
      <ContactComponent />
    </>
  )
}

export default Home