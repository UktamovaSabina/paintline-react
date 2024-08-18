import React from 'react';
import AboutComponent from '../components/about/AboutComponent';
import Contact from '../components/about/Contact';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation()
  return (
    <div>
      <AboutComponent heading={t('about.heading')} />
      <Contact />
    </div>
  )
}

export default About