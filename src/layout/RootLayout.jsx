import React, { useState } from 'react';
import './RootLayout.scss';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { QrContext } from '../context/QrContext.js';
import { QRCodeSVG } from 'qrcode.react';
import { LiaWindowCloseSolid } from "react-icons/lia";
import { useLocation } from 'react-router-dom';

const RootLayout = () => {
  const [qrShow, setQrShow] = useState(false);
  const [qrLink, setQrLink] = useState('');
  const closeQrCode = () => {
    setQrShow(false)
  }
  const { t } = useLocation();

  return (
    <QrContext.Provider value={{ setQrShow, setQrLink }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {
        qrShow ? <div className='qr-code'>
          <LiaWindowCloseSolid fontSize={50} className='qr-close-btn' onClick={closeQrCode} />
          <QRCodeSVG value={qrLink} />
          <a href={qrLink} target={'_blank'}>{localStorage.getItem("lang") === "en" ? "Visit the link" : "Перейти"}</a>
        </div> : <></>
      }
    </QrContext.Provider>
  )
}

export default RootLayout