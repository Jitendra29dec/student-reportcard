import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logo from 'assets/img/illustrations/falcon.png';
import Image from 'next/future/image';
import Link from 'next/link';

const Logo = ({ at, className, textClass, ...rest }) => {
  return (
    <Link href="/" {...rest}>
      <a
        className={classNames(
          'text-decoration-none',
          { 'navbar-brand text-left': at === 'navbar-vertical' },
          { 'navbar-brand text-left': at === 'navbar-top' }
        )}
      >
        <div
          className={classNames(
            'd-flex',
            {
              'align-items-center py-3': at === 'navbar-vertical',
              'align-items-center': at === 'navbar-top',
              'flex-center fw-bolder mb-4': at === 'auth'
            },
            className
          )}
        >
          <Image
            className="me-2 falcon-logo"
            src={logo}
            alt="Logo"
            width="47"
            height="39"
            layout="raw"
          />
          <span className={classNames('font-sans-serif', textClass)}>
            falcon
          </span>
        </div>
      </a>
    </Link>
  );
};

Logo.propTypes = {
  at: PropTypes.oneOf(['navbar-vertical', 'navbar-top', 'auth']),
  width: PropTypes.number,
  className: PropTypes.string,
  textClass: PropTypes.string
};

Logo.defaultProps = { at: 'auth', width: 58 };

export default Logo;
