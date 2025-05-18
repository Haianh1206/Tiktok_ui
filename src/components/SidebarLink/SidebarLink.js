/* eslint-disable react/jsx-no-comment-textnodes */
import classNames from 'classnames/bind';
import styles from './SidebarLink.module.scss';

const cx = classNames.bind(styles);

function SidebarLink() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('link-list')}>
        <a className={cx('link-item')}>Giới thiệu</a>
        <a className={cx('link-item')}>Bảng tin</a>
        <a className={cx('link-item')}>Liên hệ</a>
        <a className={cx('link-item')}>Sự nghiệp</a>
        <a className={cx('link-item')}>ByteDance</a>
      </div>
      <div className={cx('link-list')}>
        <a className={cx('link-item')}>Tiktok for Good</a>
        <a className={cx('link-item')}>Quảng cáo</a>
        <a className={cx('link-item')}>Developers</a>
        <a className={cx('link-item')}>Minh bạch</a>
      </div>
      <div className={cx('link-list')}>
        <a className={cx('link-item')}>Trợ giúp</a>
        <a className={cx('link-item')}>An toàn</a>
        <a className={cx('link-item')}>Điều khoản</a>
        <a className={cx('link-item')}>Quyền riêng tư</a>
      </div>
      <div className={cx('link-list')}>
        <a className={cx('link-item')}>Thêm</a>
      </div>
      <div className={cx('link-list')}>
        <a className={cx('link-item')}>@2023 Tiktok - Clone by Haianh</a>
      </div>
    </div>
  );
}

export default SidebarLink;
