import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarTopDropDownMenus from 'components/navbar/top/NavbarTopDropDownMenus';
import LandingRightSideNavItem from './LandingRightSideNavItem';
import { topNavbarBreakpoint } from 'config';
import { AppContext } from 'context/AppContext';

const NavbarStandard = () => {
  const {
    config: { isDark }
  } = useContext(AppContext);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      let alpha = (scrollTop / windowHeight) * 2;
      alpha >= 1 && (alpha = 1);
      document.getElementsByClassName(
        'navbar-theme'
      )[0].style.backgroundColor = `rgba(11, 23, 39, ${alpha})`;
    });
    return () =>
      window.removeEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        let alpha = (scrollTop / windowHeight) * 2;
        alpha >= 1 && (alpha = 1);
        document.getElementsByClassName(
          'navbar-theme'
        )[0].style.backgroundColor = `rgba(11, 23, 39, ${alpha})`;
      });
  }, []);

  return (
    <Navbar
      variant={isDark ? 'light' : 'dark'}
      fixed="top"
      expand={topNavbarBreakpoint}
      className={classNames('navbar-standard navbar-theme', {
        'bg-100': !navbarCollapsed && isDark,
        'bg-dark': !navbarCollapsed && !isDark
      })}
    >
      <Container>
        <Navbar.Brand className="text-white dark__text-white" as={'a'} href="/">
          Falcon
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
        <Navbar.Collapse className="scrollbar">
          <Nav>
            <NavbarTopDropDownMenus setNavbarCollapsed={setNavbarCollapsed} />
          </Nav>
          <LandingRightSideNavItem />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
