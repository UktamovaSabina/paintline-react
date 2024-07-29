import React from 'react';
import AboutComponent from '../components/about/AboutComponent';
import Contact from '../components/about/Contact';

const About = () => {
  return (
    <div>
      <AboutComponent heading={'О нас'} />
      <Contact />
    </div>
  )
}

export default About