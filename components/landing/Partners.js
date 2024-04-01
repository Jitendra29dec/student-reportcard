import React from 'react';
import partnerList from 'data/partner/partnerList';
import Section from 'components/common/Section';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const Partner = props => (
  <Col xs={3} sm="auto" className="my-1 my-sm-3 px-card">
    <Image
      className="landing-cta-img"
      {...props}
      width={120}
      height={50}
      alt="Partner"
    />
  </Col>
);

const Partners = () => {
  return (
    <Section bg="light" className="py-3 shadow-sm">
      <Row className="flex-center">
        {partnerList.map((partner, index) => (
          <Partner key={index} {...partner} />
        ))}
      </Row>
    </Section>
  );
};

export default Partners;
