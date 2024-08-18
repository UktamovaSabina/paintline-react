import React from 'react';
import AboutComponent from '../components/about/AboutComponent';
import ContactComponent from '../components/contact/ContactComponent';
import Hero from '../components/hero/Hero';
import ProductsGroup from '../components/groups/ProductsGroup';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsGroup heading={"Группы Продуктов"}/>
      <AboutComponent heading={'Коротко о нашей компании'} />
      <ContactComponent />
    </>
  )
}

export default Home