import classNames from 'classnames/bind';
import styles from './SharePreview.module.scss';
import { DipIcon, FacebookIcon, LetterIcon, LinkIcon, MoreIcon, WhatAppIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function SharePreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('share-list')}>
        <div className={cx('share-item')}>
          <DipIcon className={cx('link-icon-sepa')} />
          Nhúng
        </div>
        <div className={cx('share-item')}>
          <LetterIcon className={cx('link-icon')} />
          GỬi đến bạn bè
        </div>
        <div className={cx('share-item')}>
          <FacebookIcon className={cx('link-icon')} />
          Share to Facebook
        </div>
        <div className={cx('share-item')}>
          <WhatAppIcon className={cx('link-icon')} />
          Share to WhatApps
        </div>
        <div className={cx('share-item')}>
          <LinkIcon className={cx('link-icon')} />
          Sao chép liên kết
        </div>
      </div>
      <div className={cx('more')}>
        <MoreIcon />
      </div>
    </div>
  );
}

export default SharePreview;
