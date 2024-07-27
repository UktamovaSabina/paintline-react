import React from 'react';
import './Hero.scss';
import gif1 from '../../assets/gifs/asdas.gif';
import gif2 from '../../assets/gifs/boss_worker.gif';
import gif3 from '../../assets/gifs/donation.gif';
import gif4 from '../../assets/gifs/labaratory.gif';
import gif5 from '../../assets/gifs/postman.gif';
import gif6 from '../../assets/gifs/stock.gif';

const Hero = () => {
    return (
        <section>
            <div className='container hero-container'>
                <div className='hero-top'>
                    <div className='hero-top__description'>
                        <h1>Paintline Chemical</h1>
                        <p>Мы сконцентрировали свою деятельность на импорте химического сырья от крупнейших европейских и азиатских производителей. Основные конкурентные преимущества <strong>«Paintline Chemical»</strong> – ассортимент поставляемой продукции, выгодные финансовые условия и качественная логистика.</p>
                    </div>
                    <div className='hero-top__imgs'>
                        <img src={gif1} alt="" />
                        <img src={gif2} alt="" />
                    </div>
                </div>
                <div className='hero-medium'>
                    <img src={gif3} alt="" />
                    <img src={gif4} alt="" />
                    <img src={gif5} alt="" />
                </div>
                <div className='hero-bottom'>
                    <img src={gif6} alt="" className='left' />
                    <img src={gif1} alt="" className='right' />
                </div>
            </div>
        </section>
    )
}

export default Hero