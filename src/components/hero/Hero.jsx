import React from 'react';
import './Hero.scss';
import pic1 from '../../assets/hero/handshake.jpg';
import pic2 from '../../assets/hero/delivery.jpg';
import pic3 from '../../assets/hero/truck.jpg';
import pic4 from '../../assets/hero/barrel.jpg';
import pic5 from '../../assets/hero/barrels.jpg';
import pic6 from '../../assets/hero/factory.jpg';
import pic7 from '../../assets/hero/lab.jpg';

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
                        <img src={pic1} alt="paintline chemical handshake" className='left' />
                        <img src={pic2} alt="paintline chemical delivery" />
                    </div>
                </div>
                <div className='hero-medium'>
                    <img src={pic3} alt="paintline chemical truck delivery" />
                    <img src={pic4} alt="paintline chemical metal barrels" />
                    <img src={pic5} alt="paintline chemical metal barrels in a storage" />
                </div>
                <div className='hero-bottom'>
                    <img src={pic6} alt="paintline chemical factory" />
                    <img src={pic7} alt="paintline chemical labaratory" className='right' />
                </div>
            </div>
        </section>
    )
}

export default Hero