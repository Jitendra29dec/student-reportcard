import Image from 'next/image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { topNavbarBreakpoint } from 'config';
import { Card, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { capitalize } from 'helpers/utils/string';
import { breakpoints } from 'helpers/utils/screen';
import AuthCornerImage from 'assets/img/illustrations/authentication-corner.png';

const NavbarDropdown = ({ title, children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Dropdown
      show={dropdownOpen}
      onToggle={() => setDropdownOpen(!dropdownOpen)}
      onMouseOver={() => {
        let windowWidth = window.innerWidth;
        if (windowWidth >= breakpoints[topNavbarBreakpoint]) {
          setDropdownOpen(true);
        }
      }}
      onMouseLeave={() => {
        let windowWidth = window.innerWidth;
        if (windowWidth >= breakpoints[topNavbarBreakpoint]) {
          setDropdownOpen(false);
        }
      }}
    >
      {mount && (
        <Dropdown.Toggle as={'a'} to="#!" className="nav-link fw-semi-bold">
          {capitalize(title)}
        </Dropdown.Toggle>
      )}
      <Dropdown.Menu className="dropdown-menu-card mt-0 dropdown-caret">
        {/* {children} */}
        <Card
          className={classNames('shadow-none dark__bg-1000 cursor-pointer', {
            'navbar-card-app': title === 'app',
            'navbar-card-pages': title === 'pages',
            'navbar-card-components': title === 'modules'
          })}
        >
          <Card.Body
            className={classNames('scrollbar max-h-dropdown', {
              'p-0 py-2': title === 'dashboard' || title === 'documentation'
            })}
          >
            {title !== 'dashboard' && title !== 'documentation' && (
              <div className="in-progress-image-wrapper">
                <Image
                  src={AuthCornerImage}
                  alt="In progress"
                  className="img-dropdown"
                  width={130}
                  height={100}
                />
              </div>
            )}
            {children}
          </Card.Body>
        </Card>
      </Dropdown.Menu>
    </Dropdown>
  );
};

NavbarDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default NavbarDropdown;
