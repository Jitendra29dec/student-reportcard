/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import classNames from 'classnames';
import { AppContext } from 'context/AppContext';
import Logo from 'components/common/Logo';
import SearchBox from './SearchBox';
import NavbarTopDropDownMenus from './NavbarTopDropDownMenus';
import { navbarBreakPoint, topNavbarBreakpoint } from 'config';
import autoCompleteInitialItem from 'data/autocomplete/autocomplete';
import TopNavRightSideNavItem from './TopNavRightSideNavItem';
import { useRouter } from 'next/router';
// import { useLocation } from 'react-router';

const NavbarTop = () => {
  const {
    config: { showBurgerMenu, navbarPosition, navbarCollapsed },
    setConfig
  } = useContext(AppContext);

  const router = useRouter();
  const { pathname } = router;
  const isChat = pathname.includes('chat');

  const [showDropShadow, setShowDropShadow] = useState(false);

  const handleBurgerMenu = () => {
    navbarPosition === 'top' && setConfig('navbarCollapsed', !navbarCollapsed);
    (navbarPosition === 'vertical' || navbarPosition === 'combo') &&
      setConfig('showBurgerMenu', !showBurgerMenu);
  };

  const setDropShadow = () => {
    const el = document.documentElement;
    if (el.scrollTop > 0) {
      setShowDropShadow(true);
    } else {
      setShowDropShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setDropShadow);
    return () => window.removeEventListener('scroll', setDropShadow);
  }, []);

  return (
    <Navbar
      className={classNames('navbar-glass  fs--1 navbar-top sticky-kit', {
        'navbar-glass-shadow': showDropShadow
      })}
      expand={
        navbarPosition === 'top' || navbarPosition === 'combo'
          ? topNavbarBreakpoint
          : true
      }
    >
      <Navbar.Toggle
        className={classNames('toggle-icon-wrapper me-md-3 me-2', {
          'd-lg-none': navbarPosition === 'top',
          [`d-${navbarBreakPoint}-none`]:
            navbarPosition === 'vertical' || navbarPosition === 'combo'
        })}
        as="div"
      >
        <button
          className="navbar-toggler-humburger-icon btn btn-link d-flex flex-center"
          onClick={handleBurgerMenu}
          id="burgerMenu"
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </button>
      </Navbar.Toggle>

      <Logo at="navbar-top" width={40} id="topLogo" />

      {navbarPosition === 'top' || navbarPosition === 'combo' ? (
        <Navbar.Collapse
          in={navbarCollapsed}
          className="scrollbar pb-3 pb-lg-0"
        >
          <Nav navbar>
            <NavbarTopDropDownMenus />
          </Nav>
        </Navbar.Collapse>
      ) : (
        <Nav
          navbar
          className={`align-items-center d-none d-${topNavbarBreakpoint}-block`}
          as="ul"
        >
          <Nav.Item as="li">
            <SearchBox autoCompleteItem={autoCompleteInitialItem} />
          </Nav.Item>
        </Nav>
      )}

      <TopNavRightSideNavItem />
    </Navbar>
  );
};

export default NavbarTop;
