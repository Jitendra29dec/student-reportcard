import React, { useState } from 'react';
import { Button, Card, CloseButton } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import image from 'assets/img/icons/spot-illustrations/navbar-vertical.png';
import Image from 'next/image';
import Link from 'next/link';

const PurchaseCard = () => {
  const [show, setShow] = useState(true);
  return (
    show && (
      <div className="settings my-3">
        <Card className="p-0 bg-white rounded-2 position-relative">
          <div
            className="position-absolute"
            style={{ right: '3px', top: '3px' }}
          >
            {/* <FalconCloseButton
              size="sm"
              noOutline
              onClick={() => setShow(false)}
            /> */}
            <CloseButton
              className="fs--1"
              size="sm"
              nooutline="true"
              onClick={() => setShow(false)}
            />
          </div>
          <Card.Body className="text-center">
            <div>
              {' '}
              <Image src={image} alt="In progress" width="80" height="105" />
            </div>
            <p className="fs--2 mt-2">
              Loving what you see?
              <br />
              Get your copy of <Link href="#!">Falcon</Link>
            </p>
            <div className="d-grid gap-2">
              <Button
                as={'a'}
                href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template-react/"
                target="_blank"
                size="sm"
                className="btn-purchase"
              >
                Purchase
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  );
};

export default PurchaseCard;
