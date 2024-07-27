import React from 'react';
import './ContactComponent.scss';
import { SiWhatsapp } from "react-icons/si";
import { LiaTelegramPlane } from "react-icons/lia";

const ContactComponent = () => {
  return (
    <section>
      <div className="container contacts-container">
        <h2>Контакты</h2>
        <ul className='contacts-wrapper'>
          <li>
            <h4>Адрес:</h4>
            <p>г. Андижан, ул. Машраб, дом 28</p>
          </li>
          <li>
            <h4>Админстрация:</h4>
            <p>+998(93)332-41-14</p>
          </li>
          <li>
            <h4>Отдел продаж:</h4>
            <p>+998(99)520-11-33</p>
          </li>
        </ul>
        <div>
          <iframe
            className='location'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96678.76778807599!2d72.3196454!3d40.77936435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc901d6b13d4ef%3A0xfc45bcaa7973dfac!2z0JDQvdC00LjQttCw0L0sINCQ0L3QtNC40LbQsNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2s!4v1722109669070!5m2!1sru!2s"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='tg-whatsup-wrapper'>
          <a href="https://t.me/paintlinechemical" className='telegram'><LiaTelegramPlane className='icon' />t.me/paintlinechemical</a>
          <a href="https://wa.me/qr/PG7TYXQMALFPG1" className='whatsup'><SiWhatsapp className='icon' /> +998 (99) 520-11-33</a>
        </div>
      </div>
    </section>
  )
}

export default ContactComponent