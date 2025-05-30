import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disable = false,
  rounded = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
  className,
  ...postProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...postProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props.key === 'function') {
        delete props.key;
      }
    });
  }
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disable,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  text: PropTypes.bool,
  disable: PropTypes.bool,
  rounded: PropTypes.bool,
  large: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
export default Button;
