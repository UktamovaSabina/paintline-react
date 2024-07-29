import React from 'react';
import telegram from '../../assets/Images/telegram.svg';
import whatsup from '../../assets/Images/whatsup.svg';
import consultant from '../../assets/Images/consultant.svg';
import { TbPhoneCall } from 'react-icons/tb';

const Contact = () => {
    return (
        <section>
            <div className="container about__contact-container">
                <div className='consulting-wrapper'>
                    <img src={consultant} alt="consultant icon" width={114} />
                    <div className='consulting-info'>
                        <p>Хотите получить консультация от специалиста?</p>
                        <a href="tel:+998995201133" target={"_blank"} className='phone-number-btn'><TbPhoneCall />+998995201133</a>
                    </div>
                </div>
                <div className='scoial-media-icons'>
                    <div className='telegram-icon-wrapper'>
                        <img src={telegram} alt="telegram icon" />
                    </div>
                    <div>
                        <img src={whatsup} alt="whatsup icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact