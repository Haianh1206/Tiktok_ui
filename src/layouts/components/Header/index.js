import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCoins,
  faEarthAfrica,
  faEllipsisVertical,
  faGears,
  faKeyboard,
  faPlus,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icon';
import Image from '~/components/Image';
import Search from './Search';
import { Link } from 'react-router-dom';
import config from '~/config';

//
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAfrica} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];
function Header() {
  const currentUser = true;

  //Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language ':
        break;
      default:
    }
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View Profile',
      to: '/@123',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGears} />,
      title: 'Setting',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/Logout',
      separate: true,
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <button className={cx('action-btn')}>
                <Button text>
                  <FontAwesomeIcon className={cx('icon-btn')} icon={faPlus} />
                  Upload
                </Button>
              </button>

              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} offset={[0, 8]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>
                <FontAwesomeIcon className={cx('icon-btn')} icon={faPlus} />
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                alt="Nguyen Hai Anh"
                src="data:image/jpeg;base64,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"
                fallback="data:image/jpeg;base64,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"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
