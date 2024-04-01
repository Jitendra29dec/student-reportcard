import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import team3 from 'assets/img/team/3.jpg';
import Avatar from 'components/common/Avatar';
import axios from 'axios';
import { useRouter } from 'next/router';
const ProfileDropdown = () => {
  const router = useRouter();
  const [mount, setMount] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const handleLogout = async () => {
    try {
      const confirmed = window.confirm("Are you sure you want to logout?");
      
      if (confirmed) {
        setLoading(true);
        const token = sessionStorage.getItem('token');
        const userId = sessionStorage.getItem('user_id');

        const response = await axios.post('http://localhost/student-report-api/index.php/login/logout', { user_id: userId }, {
          // headers: { Authorization: `Bearer ${token}` }
        });
        console.log('dsfsd==>',response.data.status);
        if (response.status === 200) {
          sessionStorage.clear();
          router.push('/');  
        } else {
          console.error('Logout failed:', data.error);
        }
        setLoading(false);
      }
    } catch (error) {
      console.error('Error logging out:', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

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
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
