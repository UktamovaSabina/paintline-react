import React from 'react';
import AboutComponent from '../components/about/AboutComponent';
import ContactComponent from '../components/contact/ContactComponent';
import Hero from '../components/hero/Hero';
import ProductsGroup from '../components/groups/ProductsGroup';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <ProductsGroup heading={t("group-products.title1")} />
      <AboutComponent heading={t("about.heading2")} />
      <ContactComponent />
    </>
  )
}

export default Home