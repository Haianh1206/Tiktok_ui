import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { useState, useEffect } from 'react';
import config from '~/config';
import {
  HomeIcon,
  UserGroupIcon,
  ExploreIcon,
  LiveIcon,
  HomeActiveIcon,
  UserGroupActiveIcon,
  ExploreActiveIcon,
  LiveActiveIcon,
} from '~/components/Icon';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';
import SidebarLink from '~/components/SidebarLink/SidebarLink';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);
const initPage = 1;
const per_page = 5;

function Sidebar() {
  const [suggestedUsers, setSuggestUsers] = useState([]);
  const [isSeeAll, setIsSeeAll] = useState(false);
  const [page, setPage] = useState(initPage);
  useEffect(() => {
    userService
      .getSuggested({ page, perPage: per_page })
      .then((data) => {
        setSuggestUsers((prevState) => [...prevState, ...data]);
      })
      .catch((error) => console.log(error));
  }, [page]);
  const handleViewChange = (isSeeAll) => {
    setIsSeeAll((prevState) => !prevState);
    if (isSeeAll) {
      setPage(page + 1);
    } else {
    }
  };
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="Khám phá"
          to={config.routes.explore}
          icon={<ExploreIcon />}
          activeIcon={<ExploreActiveIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <SuggestedAccounts
        lable="Suggested Accounts"
        data={suggestedUsers}
        isSeeAll={isSeeAll}
        onViewChange={handleViewChange}
      />
      <SuggestedAccounts lable="Following Accounts" following="Những tài khoản bạn follow sẽ xuất hiện tại đây" />
      <SidebarLink />
    </aside>
  );
}

export default Sidebar;
