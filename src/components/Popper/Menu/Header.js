import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
//content
const cx = classNames.bind(styles);
function Header({ title, onBack }) {
  return (
    <header className={cx('header')} onClick={onBack}>
      <button className={cx('button-btn')}>
        <FontAwesomeIcon icon={faChevronLeft} />
        <h4 className={cx('header-title')}>{title}</h4>
      </button>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};
export default Header;
