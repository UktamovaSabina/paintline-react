import React from 'react';
import './AboutComponent.scss';
import { useTranslation } from 'react-i18next';

const AboutComponent = ({ heading }) => {
  const { t } = useTranslation();

  return (
    <section className='about-section'>
      <div className="container about-container">
        <div className='about-wrapper'>
          <h2>{heading}</h2>
          <p>{t("about.desc1")}</p>
          <p>{t("about.desc2")}</p>
          <p>{t("about.desc3")}</p>
        </div>
        <div className='youtube-video-wrapper'>
          <iframe
            className='youtube-video'
            width="510"
            height="340"
            src="https://www.youtube.com/embed/321sSKXmMO4?si=YcDyD1kOKuMKfpUK&rel=0"
            title="Paintline Chemical"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent