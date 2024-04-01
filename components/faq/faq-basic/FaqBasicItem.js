import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FaqBasicItem = ({ faq, isLast }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
      <h6>
        <Link href="#!">
          <a>
            {faq.title}
            {mount && <FontAwesomeIcon icon="caret-right" className="ms-2" />}
          </a>
        </Link>
      </h6>
      <p className="fs--1 mb-0">{faq.description}</p>
      {!isLast && <hr className="my-3" />}
    </>
  );
};

FaqBasicItem.propTypes = {
  isLast: PropTypes.bool,
  faq: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default FaqBasicItem;
