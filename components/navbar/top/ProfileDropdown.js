import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import team3 from 'assets/img/team/3.jpg';
import Avatar from 'components/common/Avatar';

const ProfileDropdown = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Dropdown navbar={true} as="li">
      {mount && (
        <Dropdown.Toggle
          bsPrefix="toggle"
          as={'a'}
          to="#!"
          className="pe-0 ps-2 nav-link"
        >
          <Avatar src={team3} rounded="circle" priority={true} />
        </Dropdown.Toggle>
      )}

      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
        <div className="bg-white rounded-2 py-2 dark__bg-1000">
          <Dropdown.Item className="fw-bold text-warning" href="#!">
            {mount && <FontAwesomeIcon icon="crown" className="me-1" />}
            <span>Go Pro</span>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#!">Set status</Dropdown.Item>
          <Dropdown.Item to="/user/profile">
            Profile &amp; account
          </Dropdown.Item>
          <Dropdown.Item href="#!">Feedback</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item to="/user/settings">Settings</Dropdown.Item>
          <Dropdown.Item to="/authentication/card/logout">Logout</Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
