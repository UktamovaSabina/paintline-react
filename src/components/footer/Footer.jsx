import React from 'react';
import "./Footer.scss";
import logoFooter from '../../assets/Images/logo.png';
import Navbar from '../navbar/Navbar';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className='footer'>
      <footer>
        <div className='container footer-container'>
          <div className='footer-top'>
            <img src={logoFooter} alt="logo" width={114} />
            <p>{t("footer")}</p>
          </div>
          <Navbar />
        </div>
      </footer>
      <div className='container footer-bottom'>
        <span>Copyright @ {new Date().getFullYear()}</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer