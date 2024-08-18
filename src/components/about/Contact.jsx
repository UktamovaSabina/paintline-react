import React, { useContext } from 'react';
import telegram from '../../assets/Images/telegram.svg';
import whatsup from '../../assets/Images/whatsup.svg';
import consultant from '../../assets/Images/consultant.svg';
import { TbPhoneCall } from 'react-icons/tb';
import { QrContext } from '../../context/QrContext.js';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { setQrShow, setQrLink } = useContext(QrContext);
    const showQrCode = (link) => {
        setQrShow(true)
        setQrLink(link)
    }
    const { t } = useTranslation();

    return (
        <>
            <section>
                <div className="container about__contact-container">
                    <div className='consulting-wrapper'>
                        <img src={consultant} alt="consultant icon" width={114} />
                        <div className='consulting-info'>
                            <p>{t("about.consulting")}</p>
                            <a href="tel:+998995201133" target={"_blank"} className='phone-number-btn'><TbPhoneCall />+998995201133</a>
                        </div>
                    </div>
                    <div className='scoial-media-icons'>
                        <div className='telegram-icon-wrapper' onClick={() => { showQrCode('https://t.me/paintlinechemical') }}>
                            <img src={telegram} alt="telegram icon" />
                        </div>
                        <div onClick={() => { showQrCode('https://wa.me/qr/PG7TYXQMALFPG1') }}>
                            <img src={whatsup} alt="whatsup icon" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact