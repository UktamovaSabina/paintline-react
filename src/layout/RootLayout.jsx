import React, { useState } from 'react';
import './RootLayout.scss';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { QrContext } from '../context/QrContext.js';
import { QRCodeSVG } from 'qrcode.react';
import { LiaWindowCloseSolid } from "react-icons/lia";

const RootLayout = () => {
  const [qrShow, setQrShow] = useState(false);
  const [qrLink, setQrLink] = useState('');
  const closeQrCode = () => {
    setQrShow(false)
  }

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
          <a href={qrLink} target={'_blank'}>Перейти</a>
        </div> : <></>
      }
    </QrContext.Provider>
  )
}

export default RootLayout