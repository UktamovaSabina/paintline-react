import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className='navbar'>
      <NavLink to={'/about'}>{t("navbar.about")}</NavLink>
      <NavLink to={'/groups'}>{t("navbar.products")}</NavLink>
      <NavLink to={'/contact'}>{t("navbar.contacts")}</NavLink>
    </nav>
  )
}

export default Navbar