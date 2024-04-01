/* eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
// import { getProductsQuantity } from 'helpers/utils';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';

const CartNotification = () => {
  const [mount, setMount] = useState(false);
  const cartItems = [1];

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Nav.Item as="li" className="d-none d-sm-block">
      <Link href="/e-commerce/shopping-cart">
        <a
          className={classNames('px-0', {
            'notification-indicator notification-indicator-warning position-relative notification-indicator-fill nav-link': 2
          })}
        >
          {true && (
            <span className="notification-indicator-number">
              {/* {getProductsQuantity(cartItems)} */}2
            </span>
          )}
          {mount && (
            <FontAwesomeIcon
              icon="shopping-cart"
              transform="shrink-7"
              className="fs-4"
            />
          )}
        </a>
      </Link>
      {/* <Nav.Link
        as={Link}
        to="/e-commerce/shopping-cart"
        className={classNames('px-0', {
          'notification-indicator notification-indicator-warning position-relative notification-indicator-fill':
            getProductsQuantity(cartItems) 
        })}
      >
        {cartItems.length > 0 && (
          <span className="notification-indicator-number">
            {getProductsQuantity(cartItems)}
          </span>
        )}
        <FontAwesomeIcon
          icon="shopping-cart"
          transform="shrink-7"
          className="fs-4"
        />
      </Nav.Link> */}
    </Nav.Item>
  );
};

export default CartNotification;
