import React, { useState } from 'react';
import classNames from 'classnames';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import SimpleBarReact from 'simplebar-react';
import Avatar from 'components/common/Avatar';
import { useEffect } from 'react';
import { quickLinks } from 'data/quickLinks';
import Link from 'next/link';
import Image from 'next/image';

const NineDotMenu = () => {
  const [show, setShow] = useState(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.innerWidth < 1200 && setShow(false);
    });
  }, []);

  return (
    <Dropdown navbar={true} as="li" show={show} onToggle={() => setShow(!show)}>
      {mount && (
        <Dropdown.Toggle
          bsPrefix="toggle"
          as={'a'}
          to="#!"
          className="nav-link px-2 nine-dots"
        >
          {/* <span className="nine-dots"></span> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="37"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#6C6E71"></circle>
            <circle cx="2" cy="8" r="2" fill="#6C6E71"></circle>
            <circle cx="2" cy="14" r="2" fill="#6C6E71"></circle>
            <circle cx="8" cy="8" r="2" fill="#6C6E71"></circle>
            <circle cx="8" cy="14" r="2" fill="#6C6E71"></circle>
            <circle cx="14" cy="8" r="2" fill="#6C6E71"></circle>
            <circle cx="14" cy="14" r="2" fill="#6C6E71"></circle>
            <circle cx="8" cy="2" r="2" fill="#6C6E71"></circle>
            <circle cx="14" cy="2" r="2" fill="#6C6E71"></circle>
          </svg>
        </Dropdown.Toggle>
      )}

      <Dropdown.Menu
        className="dropdown-menu-card dropdown-menu-end dropdown-caret dropdown-caret-bg"
        show={show}
      >
        <Card className="dropdown-menu-end shadow-none">
          <SimpleBarReact className="nav-quick-links">
            <Card.Body>
              <Row className="text-center g-0">
                {quickLinks.map((item, index) => (
                  <QuickLinkItem key={index} {...item} {...index} />
                ))}
                <Col xs={12}>
                  <Link
                    href="/"
                    className="btn btn-outline-primary btn-sm mt-4"
                  >
                    <a>Show more</a>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </SimpleBarReact>
        </Card>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const QuickLinkItem = ({ avatar, avatarText, img, title, link, hr }) => {
  return (
    <>
      {hr ? (
        <Col xs={12}>
          <hr className="my-3 mx-n3 text-200" />
        </Col>
      ) : (
        <Col xs={4}>
          <Link href={link || '#!'}>
            <a
              className="d-block hover-bg-200 px-2 py-3 rounded-3 text-decoration-none"
              target={'_blank'}
              rel="noopener noreferrer"
            >
              {avatar && <Avatar src={avatar} size="2xl" />}
              {avatarText && (
                <Avatar
                  isExact
                  name={avatarText}
                  size="2xl"
                  mediaClass="fs-2 bg-soft-primary text-primary"
                />
              )}
              {img && (
                <Image src={img} width={40} height={40} alt="In progress" />
              )}
              <p
                className={classNames(
                  'mb-0 fw-medium text-800 text-truncate fs--2',
                  {
                    'pt-1': img
                  }
                )}
              >
                {title}
              </p>
            </a>
          </Link>
        </Col>
      )}
    </>
  );
};

// QuickLinkItem.propTypes = {
//   avatar: PropTypes.string,
//   avatarText: PropTypes.string,
//   img: PropTypes.string,
//   title: PropTypes.string,
//   link: PropTypes.string,
//   hr: PropTypes.bool
// };

export default NineDotMenu;
