import React, { useEffect, useState } from 'react';
import { isIterableArray } from 'helpers/utils/array';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from './Flex';
import classNames from 'classnames';
import Image from 'next/image';

const Avatar = ({
  size,
  rounded,
  src,
  name,
  emoji,
  className,
  mediaClass,
  isExact,
  icon,
  priority = false
}) => {
  const [mount, setMount] = useState(false);
  const classNames = ['avatar', `avatar-${size}`, className].join(' ');
  const mediaClasses = [
    rounded ? `rounded-${rounded}` : 'rounded',
    mediaClass
  ].join(' ');

  useEffect(() => {
    setMount(true);
  }, []);

  const getAvatar = () => {
    if (src?.src) {
      if (isIterableArray(src.src)) {
        return (
          <div className={`${mediaClasses} overflow-hidden h-100 d-flex`}>
            <div className="w-50 border-right">
              <Image
                src={src[0]}
                alt="In progress"
                className="rounded-circle"
                {...priority}
              />
            </div>
            <div className="w-50 d-flex flex-column">
              <Image
                src={src[1]}
                alt="In progress"
                className="h-50 border-bottom"
              />
              <Image src={src[2]} alt="In progress" className="h-50" />
            </div>
          </div>
        );
      } else {
        return (
          <Image
            className="rounded-circle"
            src={src.src}
            alt="In progress"
            width={32}
            height={32}
          />
        );
      }
    }

    if (name) {
      return (
        <div className={`avatar-name ${mediaClasses}`}>
          <span>{isExact ? name : name.match(/\b\w/g).join('')}</span>
        </div>
      );
    }

    if (mount && icon) {
      return (
        <Flex className={`avatar-name ${mediaClasses}`}>
          <FontAwesomeIcon icon={icon} />
        </Flex>
      );
    }

    return (
      <div className={`avatar-emoji ${mediaClasses}`}>
        <span role="img" aria-label="Emoji">
          {emoji}
        </span>
      </div>
    );
  };

  return <div className={classNames}>{getAvatar()}</div>;
};

export const AvatarGroup = ({ children, dense, className }) => {
  return (
    <div
      className={classNames(className, 'avatar-group', {
        'avatar-group-dense': dense
      })}
    >
      {children}
    </div>
  );
};

// Avatar.propTypes = {
//   size: PropTypes.oneOf(['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl']),
//   rounded: PropTypes.string,
//   src: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
//   name: PropTypes.string,
//   emoji: PropTypes.string,
//   className: PropTypes.string,
//   mediaClass: PropTypes.string,
//   isExact: PropTypes.bool,
//   icon: PropTypes.string
// };

// Avatar.defaultProps = {
//   size: 'xl',
//   rounded: 'circle',
//   emoji: '😊',
//   isExact: false
// };

// AvatarGroup.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
//   dense: PropTypes.bool
// };

export default Avatar;
