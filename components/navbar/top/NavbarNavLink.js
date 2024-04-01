import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppContext } from 'context/AppContext';
import Link from 'next/link';

const NavbarNavLink = ({ title, route }) => {
  const {
    config: { navbarCollapsed, showBurgerMenu },
    setConfig
  } = useContext(AppContext);

  const handleClick = () => {
    if (navbarCollapsed) {
      setConfig('navbarCollapsed', !navbarCollapsed);
    }
    if (showBurgerMenu) {
      setConfig('showBurgerMenu', !showBurgerMenu);
    }
  };
  return (
    <>
      {title ? (
        <p
          className={classNames('fw-medium nav-link', {
            'text-500': !route?.active,
            'text-700 mb-0 fw-bold': title,
            'py-1': !title,
            'link-600': !title && route?.active
          })}
          onClick={handleClick}
        >
          {title}
        </p>
      ) : (
        <Link href={route?.to || '/'} onClick={handleClick}>
          <a
            className={classNames('fw-medium nav-link cursor-pointer', {
              'text-500': !route?.active,
              'text-700 mb-0 fw-bold': title,
              'py-1': !title,
              'link-600': !title && route?.active
            })}
          >
            {title ? title : route.name}
          </a>
        </Link>
      )}
    </>
  );
};

NavbarNavLink.propTypes = {
  title: PropTypes.string,
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    active: PropTypes.bool
  })
};

export default NavbarNavLink;
