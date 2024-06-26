import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';
import { HashLink } from 'react-router-hash-link';

import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' }
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [languageToggle, setLanguageToggle] = useState(false);

  const showHideLanguageContainer = () => {
    console.log("Show or hide languageSelector: " + languageToggle);
    setLanguageToggle(!languageToggle);
  }

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
          <img
            src={logotext}
            alt="logo"
            className="sm:w-[200px] sm:h-[90px] w-[180px] h-[85px] -ml-[0.6rem] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-blue'
              } hover:text-taupe-n text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <HashLink to={`/#${nav.id}`}>{t('navbar.'+nav.title)}</HashLink>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-blue'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`/#${nav.id}`}>{t('navbar.'+nav.title)}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>

      <div>
        <div className='language-select' onClick={() => showHideLanguageContainer()}>
          {(i18n.language === "es-ES" || i18n.language === "en-EN") ? i18n.language.substring(0,2) : i18n.language}
        </div>
        <div className={`${
                      (languageToggle) ? 'show' : 'hide'
                    } language-container`}>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} className='text-blue text-[14px] font-bold font-mova uppercase tracking-[1px] cursor-pointer' type="submit" onClick={() => {i18n.changeLanguage(lng); showHideLanguageContainer();}}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
