import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import { CommentIcon, FavoriteIcon, LikeIcon, MusicIcon, ShareIcon } from '~/components/Icon';
import { icon } from '@fortawesome/fontawesome-svg-core';
import Button from '~/components/Button';
import Tippy from '@tippyjs/react';
import { Wrapper as PropperWrapper } from '~/components/Popper/index';
import SharePreview from './SharePreview/SharePreview';

const cx = classNames.bind(styles);

function HomeItem() {
  const renderPreview = () => {
    return (
      <PropperWrapper>
        <SharePreview />
      </PropperWrapper>
    );
  };
  return (
    <div className={cx('video-item')}>
      <Image
        className={cx('avatar')}
        src="data:image/jpeg;base64,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"
        alt="haianh"
      />
      <div className={cx('info')}>
        <a href="" className={cx('name')}>
          Hai_anh
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </a>
        <span className={cx('username')}>Haianh123</span>
        <div className={cx('title')}>Hello</div>
        <div className={cx('name-music')}>
          <MusicIcon className={cx('music-icon')} />
          <span>Making My Way</span>
        </div>
        <Button className={cx('button-follow')} outline>
          Follow
        </Button>

        <div className={cx('video')}>
          <video
            className={cx('video-info')}
            src="https://www.w3schools.com/html/mov_bbb.mp4" // Thay bằng link video của bạn
            controls
            autoPlay
            muted
            loop
          />
          <div className={cx('button-icon-list')}>
            <button className={cx('button-icon')} type="button">
              <span>
                <LikeIcon />
              </span>
            </button>
            <strong className={cx('value')}>567.8k</strong>
            <button className={cx('button-icon')} type="button">
              <span>
                <CommentIcon />
              </span>
            </button>
            <strong className={cx('value')}>37.4k</strong>
            <button className={cx('button-icon')} type="button">
              <span>
                <FavoriteIcon />
              </span>
            </button>
            <strong className={cx('value')}>10.2k</strong>

            <div>
              <Tippy
                interactive
                placement="top-start"
                offset={[-25, 15]}
                arrow="round"
                delay={[800, 0]}
                render={renderPreview}
              >
                <div>
                  <button className={cx('button-icon')} type="button">
                    <span>
                      <ShareIcon />
                    </span>
                  </button>
                  <strong className={cx('value')}>5.9k</strong>
                </div>
              </Tippy>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeItem;
