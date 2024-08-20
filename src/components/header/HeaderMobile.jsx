import React from 'react';
import { TbBrandInstagram, TbBrandTelegram, TbBrandWhatsapp, TbBrandLinkedin } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import './HeaderMobile.scss';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
import i18n from '../../language/i18next';

const HeaderMobile = ({ setMenu }) => {
    const { t } = useTranslation();
    return (
        <div className='header-mobile' onClick={() => { setMenu(false) }}>
            <RiCloseLargeLine className='close-header-mobile' onClick={() => { setMenu(false) }} />
            <nav className='navbar-mobile'>
                <NavLink to={'/about'}>{t("navbar.about")} <MdOutlineKeyboardArrowRight /></NavLink>
                <NavLink to={'/groups'}>{t("navbar.products")} <MdOutlineKeyboardArrowRight /></NavLink>
                <NavLink to={'/contact'}>{t("navbar.contacts")} <MdOutlineKeyboardArrowRight /></NavLink>
            </nav>
            <p className='language-btns'>
                <span style={localStorage.getItem("lang") === "ru" ? { color: "#05223A" } : null} onClick={() => { i18n.changeLanguage("ru") }}>RU</span>
                |
                <span style={localStorage.getItem("lang") === "en" ? { color: "#05223A" } : null} onClick={() => { i18n.changeLanguage("en") }}> ENG</span>
            </p>
            <div className='mobile__social-media-wrapper'>
                <a href="https://www.instagram.com/xom_ashyo?igsh=end3ODhrdTg4a3N4&utm_source=qr" target={'_blank'}><TbBrandInstagram className='social-media__icon' /></a>
                <a href="https://t.me/paintlinechemical" target={"_blank"}><TbBrandTelegram className='social-media__icon' /></a>
                <a href="https://wa.me/998995201133" target={"_blank"}><TbBrandWhatsapp className='social-media__icon' /></a>
                <a href="https://www.linkedin.com/in/paintline-chemical" target={"_blank"}><TbBrandLinkedin className='social-media__icon' /></a>
            </div>
        </div>
    )
}

export default HeaderMobile