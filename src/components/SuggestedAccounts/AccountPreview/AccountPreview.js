import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img className={cx('avatar')} alt={data.nickname} src={data.avatar} />
        <div>
          <Button className={cx('follow-btn')} primary>
            Follow
          </Button>
        </div>
      </header>
      <div className={cx('body')}>
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>{data.nickname}</strong>
            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
          </p>
          <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
          <p className={cx('anlytics')}>
            <strong className={cx('value')}>{data.followers_count} </strong>
            <span className={cx('label')}>Followers</span>
            <strong className={cx('value')}>{data.likes_count} </strong>
            <span className={cx('label')}>Likes</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountPreview;
