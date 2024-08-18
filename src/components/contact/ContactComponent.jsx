import React from 'react';
import './ContactComponent.scss';
import { SiWhatsapp } from "react-icons/si";
import { LiaTelegramPlane } from "react-icons/lia";
import { useTranslation } from 'react-i18next';

const ContactComponent = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container contacts-container">
        <h2></h2>
        <ul className='contacts-wrapper'>
          <li>
            <h4>{t("contacts.address")}:</h4>
            <p>{t("contacts.address-name")}</p>
          </li>
          <li>
            <h4>{t("contacts.admin")}:</h4>
            <p>+998(93)332-41-14</p>
          </li>
          <li>
            <h4>{t("contacts.sale")}:</h4>
            <p>+998(99)520-11-33</p>
          </li>
          <li>
            <h4>{t("contacts.email")}:</h4>
            <p>paintlinechemical@mail.ru</p>
          </li>
        </ul>
        <div>
          <iframe
            className='location'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.461905215491!2d72.34842549999999!3d40.7518644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcecdbfddc4169%3A0xe0faf38b1994c325!2z0JDQvdC00LjQttCw0L0sINCQ0L3QtNC40LbQsNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2s!4v1722400817968!5m2!1sru!2s"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='tg-whatsup-wrapper'>
          <a href="https://t.me/paintlinechemical" target={'_blank'} className='telegram'><LiaTelegramPlane className='icon' />t.me/paintlinechemical</a>
          <a href="https://wa.me/qr/PG7TYXQMALFPG1" target={'_blank'} className='whatsup'><SiWhatsapp className='icon' /> +998 (99) 520-11-33</a>
        </div>
      </div>
    </section>
  )
}

export default ContactComponent