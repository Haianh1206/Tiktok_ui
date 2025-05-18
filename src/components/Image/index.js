import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
function Image({ src, alt, className, fallback: customFallBack = images.noImage, ...props }, ref) {
  const [fallback, setFallBack] = useState('');
  const handleError = () => {
    setFallBack(images.noImage);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      {...props}
      alt={alt}
      onError={handleError}
    />
  );
}
Image.prototype = {
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
  src: PropTypes.string,
};
export default forwardRef(Image);
