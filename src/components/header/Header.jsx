import React from 'react';
import './Header.scss';
import logo from '../../assets/Images/white-logo.png';
import { TbBrandTelegram, TbBrandInstagram, TbBrandYoutube, TbBrandWhatsapp, TbPhoneCall, TbMenu } from "react-icons/tb";
import Navbar from '../navbar/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <div className="header-wrapper">
          <div className='header-navbar-logo__wrapper'>
            <NavLink to={'/'} className='header-logo'><img src={logo} alt="logo" width={119} /></NavLink>
            <Navbar />
          </div>
          <div className='social-media-wrapper'>
            <a href="https://www.instagram.com/xom_ashyo?igsh=end3ODhrdTg4a3N4&utm_source=qr" target={'_blank'}><TbBrandInstagram className='social-media__icon' /></a>
            <a href="https://t.me/paintlinechemical" target={"_blank"}><TbBrandTelegram className='social-media__icon' /></a>
            <a href="https://wa.me/qr/PG7TYXQMALFPG1" target={"_blank"}><TbBrandWhatsapp className='social-media__icon' /></a>
            <a href="https://youtube.com/shorts/321sSKXmMO4?si=3mHDs0klV_c9tf0A" target={"_blank"}><TbBrandYoutube className='social-media__icon' /></a>
          </div>
          <div className='header__btn-contacts'>
            <a href='mailto:paintlinechemical@mail.ru' target={'_blank'} className='gmail-btn'>paintlinechemical@mail.ru</a>
            <a href="tel:+998995201133" target={"_blank"} className='phone-number-btn'><TbPhoneCall />+998995201133</a>
          </div>
        </div>
        <div className="burger">
          <NavLink to={'/'} className='header-logo'><img src={logo} alt="logo" width={119} /></NavLink>
          <TbMenu className='burger-icon' />
        </div>
      </div>
    </header>
  )
}

export default Header