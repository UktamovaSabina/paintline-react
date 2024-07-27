import React from 'react';
import './AboutComponent.scss';

const AboutComponent = ({ heading }) => {

  return (
    <section className='about-section'>
      <div className="container about-container">
        <div className='about-wrapper'>
          <h2>{heading}</h2>
          <p>Мы сконцентрировали свою деятельность на импорте химического сырья от крупнейших европейских и азиатских производителей. Основные конкурентные преимущества «Paintline Chemical» – ассортимент поставляемой продукции, выгодные финансовые условия и качественная логистика</p>
          <p>Мы поставляем сырье для различных направлений химической промышленности, включая: полимеры, ПВХ, полиуретаны, адгезивы, композитные материалы, строительную химию, сырье для производства ЛКМ, каучук и химию для РТИ, сырье для нефтегазодобычи, смазочные материалы, сырье для моющих средств, общехимическое сырье, а также текстильные волокна, нити и пряжу.</p>
          <p>Мы делаем всё, чтобы нашим клиентам было удобно работать с нами.</p>
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