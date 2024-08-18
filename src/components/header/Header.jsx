import React, { useEffect, useState } from 'react';
import './Header.scss';
import logo from '../../assets/Images/white-logo.png';
import { TbHome2, TbBrandTelegram, TbBrandInstagram, TbBrandLinkedin, TbBrandWhatsapp, TbPhoneCall, TbMenu } from "react-icons/tb";
import Navbar from '../navbar/Navbar';
import { NavLink, useLocation, Link } from 'react-router-dom';
import HeaderMobile from './HeaderMobile';

const Header = () => {
  const [trackLocation, setTrackLocation] = useState('')
  const [menu, setMenu] = useState(false)
  const location = useLocation();

  useEffect(() => {
    let locationName = location.pathname;

    if (locationName.includes('about')) {
      setTrackLocation('О нас');
      return;
    } else if (locationName.includes('groups')) {
      setTrackLocation('Продукции');
      return;
    } else if (locationName.includes('contact')) {
      setTrackLocation('Контакты');
      return;
    } else {
      setTrackLocation('');
      return;
    }
  }, [location])

  const showMenu = () => {
    setMenu(true)
  }

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
            <a href="https://www.linkedin.com/in/paintline-chemical" target={"_blank"}><TbBrandLinkedin className='social-media__icon' /></a>
          </div>
          <div className='header__btn-contacts'>
            <a href='mailto:paintlinechemical@mail.ru' target={'_blank'} className='gmail-btn'>paintlinechemical@mail.ru</a>
            <a href="tel:+998995201133" target={"_blank"} className='phone-number-btn'><TbPhoneCall />+998995201133</a>
          </div>
        </div>
        <div className="burger" onClick={showMenu}>
          <NavLink to={'/'} className='header-logo'><img src={logo} alt="logo" width={119} /></NavLink>
          <TbMenu className='burger-icon' />
        </div>
       {
        menu ?  <HeaderMobile setMenu={setMenu}/> : <></>
       }

        {
          location.pathname === '/' ? <></> : <p className='location-tracker'>
            <Link to={'/'}><TbHome2 /> Главная</Link>
            <Link to={location.pathname} className='track'><span>// {trackLocation}</span></Link>
          </p>
        }
      </div>
    </header>
  )
}

export default Header